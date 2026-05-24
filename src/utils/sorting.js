export function sortByPriority(items) {
  return [...items].sort(
    (a, b) =>
      a.priority - b.priority
  );
}

export function sortByPriceAsc(items) {
  return [...items].sort(
    (a, b) => a.price - b.price
  );
}

export function sortByPriceDesc(
  items
) {
  return [...items].sort(
    (a, b) => b.price - a.price
  );
}

export function sortByNewest(items) {
  return [...items].sort(
    (a, b) =>
      b.createdAt - a.createdAt
  );
}