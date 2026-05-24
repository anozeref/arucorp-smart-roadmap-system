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

  // Preserve the purchased flag from source items so already purchased
  // items are not included in the simulation roadmap.
  const simulationItems = items.map((item) => ({
    ...item,
    purchased: !!item.purchased,
  }));

  while (
    simulationItems.some(
      (item) => !item.purchased
    )
  ) {
    balance = allocateMonthlyBudget({
      currentBalance: balance,
      monthlyAllocation,
    });

    let purchasedThisMonth = false;
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

      roadmap.push({
        id: crypto.randomUUID(),
        month: currentMonth,
        itemName:
          recommendation.name,
        priority:
          recommendation.priority,
        price:
          recommendation.price,
        remainingBalance: balance,
      });

      purchasedThisMonth = true;
    }

    if (noFurtherPurchases) {
      break;
    }

    currentMonth++;
  }

  return roadmap;
}