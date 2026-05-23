export function validateItemName(
  name
) {
  return (
    typeof name === "string" &&
    name.trim().length >= 2
  );
}

export function validatePrice(price) {
  return (
    typeof price === "number" &&
    price > 0
  );
}

export function validatePriority(
  priority
) {
  return (
    typeof priority === "number" &&
    priority >= 1 &&
    priority <= 5
  );
}

export function validateMonthlyAllocation(
  allocation
) {
  return (
    typeof allocation === "number" &&
    allocation > 0
  );
}

export function validateItem(item) {
  return (
    validateItemName(item.name) &&
    validatePrice(item.price) &&
    validatePriority(item.priority)
  );
}