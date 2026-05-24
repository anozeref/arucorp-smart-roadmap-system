import { calculateItemScore } from "./scoringEngine";
import {
  isItemLocked,
  validateDependencies,
} from "../utils/dependencyUtils";

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

  const unlockedItems = pendingItems.filter(
    (item) =>
      !isItemLocked(item, items) &&
      validateDependencies(item, items)
  );

  if (unlockedItems.length === 0) {
    return null;
  }

  const scoredItems = unlockedItems
    .map((item) => ({
      ...item,
      score: calculateItemScore(
        item,
        balance,
        items
      ),
    }))
  ;

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