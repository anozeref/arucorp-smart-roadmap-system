export function calculateRemainingBalance({
  balance,
  itemPrice,
}) {
  return balance - itemPrice;
}

export function calculateTotalSpent(
  roadmap
) {
  return roadmap.reduce(
    (total, item) =>
      total + item.price,
    0
  );
}

export function calculatePendingValue(
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