import {
  getUnlockImpact,
  getItemDependencies,
} from "../utils/dependencyUtils";

export function calculateItemScore(
  item,
  currentBalance,
  items
) {
  const priorityWeight =
    (6 - item.priority) * 160;

  const affordabilityWeight =
    currentBalance >= item.price
      ? 240
      : Math.floor(
          (currentBalance / item.price) *
            120
        );

  const efficiencyWeight =
    Math.floor(
      1800000 / item.price
    );

  const unlockImpactWeight =
    getUnlockImpact(item, items) * 90;

  const roadmapOptimizationWeight =
    getItemDependencies(item).length > 0
      ? 40
      : 0;

  const score =
    priorityWeight +
    affordabilityWeight +
    efficiencyWeight +
    unlockImpactWeight +
    roadmapOptimizationWeight;

  return score;
}