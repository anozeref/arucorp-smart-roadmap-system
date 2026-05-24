export function calculateTotalPrice(
  items
) {
  return items.reduce(
    (total, item) =>
      total + item.price,
    0
  );
}

export function calculatePurchasedValue(
  items
) {
  return items
    .filter((item) => item.purchased)
    .reduce(
      (total, item) =>
        total + item.price,
      0
    );
}

export function calculateCompletionPercentage({
  totalItems,
  purchasedItems,
}) {
  if (totalItems === 0) return 0;

  return Math.floor(
    (purchasedItems / totalItems) *
      100
  );
}

export function calculateRemainingTarget(
  items
) {
  return items
    .filter((item) => !item.purchased)
    .reduce(
      (total, item) =>
        total + item.price,
      0
    );
}