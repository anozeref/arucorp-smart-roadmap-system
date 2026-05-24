import { useMemo } from "react";

import { generateRoadmap } from "../engine/roadmapEngine";

export default function useSimulation({
  items,
  monthlyAllocation,
}) {
  const simulation = useMemo(() => {
    return generateRoadmap({
      items,
      monthlyAllocation,
    });
  }, [items, monthlyAllocation]);

  return simulation;
}