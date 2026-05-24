export function calculateItemScore(
  item,
  currentBalance
) {
  const priorityWeight =
    (6 - item.priority) * 100;

  const affordabilityWeight =
    currentBalance >= item.price
      ? 200
      : Math.floor(
          (currentBalance / item.price) *
            100
        );

  const priceEfficiencyWeight =
    Math.floor(
      1000000 / item.price
    );

  const score =
    priorityWeight +
    affordabilityWeight +
    priceEfficiencyWeight;

  return score;
}