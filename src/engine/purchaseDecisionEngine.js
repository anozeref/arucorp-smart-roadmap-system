import { calculateItemScore } from "./scoringEngine";

export function decideNextPurchase({
  items,
  balance,
}) {
  const pendingItems = items.filter(
    (item) => !item.purchased
  );

  if (pendingItems.length === 0) {
    return null;
  }

  const scoredItems = pendingItems.map(
    (item) => ({
      ...item,
      score: calculateItemScore(
        item,
        balance
      ),
    })
  );

  scoredItems.sort(
    (a, b) => b.score - a.score
  );

  const affordableItems =
    scoredItems.filter(
      (item) => balance >= item.price
    );

  if (affordableItems.length > 0) {
    return affordableItems[0];
  }

  return scoredItems[0];
}