import {
  createContext,
  useEffect,
  useMemo,
  useState,
} from "react";

import { generateRoadmap } from "../engine/roadmapEngine";

import {
  calculateCompletionPercentage,
} from "../utils/calculations";

import useItems from "../hooks/useItems";
import useBudget from "../hooks/useBudget";

export const RoadmapContext =
  createContext();

export function RoadmapProvider({
  children,
}) {
  const { items, purchasedItems } =
    useItems();

  const { monthlyAllocation } =
    useBudget();

  const [roadmap, setRoadmap] =
    useState([]);

  useEffect(() => {
    const generatedRoadmap =
      generateRoadmap({
        items,
        monthlyAllocation,
      });

    setRoadmap(generatedRoadmap);
  }, [items, monthlyAllocation]);

  const nextRecommendation =
    useMemo(() => {
      return roadmap[0] || null;
    }, [roadmap]);

  const completionPercentage =
    useMemo(() => {
      return calculateCompletionPercentage(
        {
          totalItems: items.length,
          purchasedItems:
            purchasedItems.length,
        }
      );
    }, [items, purchasedItems]);

  return (
    <RoadmapContext.Provider
      value={{
        roadmap,
        nextRecommendation,
        completionPercentage,
      }}
    >
      {children}
    </RoadmapContext.Provider>
  );
}