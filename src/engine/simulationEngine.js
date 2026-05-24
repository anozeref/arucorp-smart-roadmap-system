import { allocateMonthlyBudget } from "./allocationEngine";

import { decideNextPurchase } from "./purchaseDecisionEngine";

import { calculateRemainingBalance } from "./balanceEngine";

export function runMonthlySimulation({
  items,
  monthlyAllocation,
}) {
  let currentMonth = 1;

  let balance = 0;

  const roadmap = [];

  const simulationItems = items.map(
    (item) => ({
      ...item,
      purchased: !!item.purchased,
    })
  );

  while (
    simulationItems.some(
      (item) => !item.purchased
    )
  ) {
    balance = allocateMonthlyBudget({
      currentBalance: balance,
      monthlyAllocation,
    });

    const monthGroup = {
      id: crypto.randomUUID(),

      month: currentMonth,

      purchases: [],

      startingBalance: balance,

      endingBalance: balance,

      totalSpent: 0,
    };

    let noFurtherPurchases = false;

    while (true) {
      const recommendation =
        decideNextPurchase({
          items: simulationItems,
          balance,
        });

      if (!recommendation) {
        noFurtherPurchases = true;
        break;
      }

      if (balance < recommendation.price) {
        break;
      }

      balance =
        calculateRemainingBalance({
          balance,
          itemPrice:
            recommendation.price,
        });

      const itemIndex =
        simulationItems.findIndex(
          (item) =>
            item.id ===
            recommendation.id
        );

      simulationItems[
        itemIndex
      ].purchased = true;

      monthGroup.purchases.push({
        id: crypto.randomUUID(),

        itemId:
          recommendation.id,

        itemName:
          recommendation.name,

        priority:
          recommendation.priority,

        price:
          recommendation.price,

        remainingBalance: balance,
      });

      monthGroup.totalSpent +=
        recommendation.price;

      monthGroup.endingBalance =
        balance;
    }

    if (
      monthGroup.purchases.length >
      0
    ) {
      roadmap.push(monthGroup);
    }

    if (noFurtherPurchases) {
      break;
    }

    currentMonth++;
  }

  return roadmap;
}