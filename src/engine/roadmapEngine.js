import { runMonthlySimulation } from "./simulationEngine";

export function generateRoadmap({
  items,
  monthlyAllocation,
}) {
  if (
    !items ||
    items.length === 0
  ) {
    return [];
  }

  if (!monthlyAllocation) {
    return [];
  }

  return runMonthlySimulation({
    items,
    monthlyAllocation,
  });
}