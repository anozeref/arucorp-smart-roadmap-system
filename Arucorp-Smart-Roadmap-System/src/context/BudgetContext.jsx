import {
  createContext,
  useEffect,
  useState,
} from "react";

import {
  getProject,
  updateProject,
} from "../services/api/projectApi";

export const BudgetContext =
  createContext();

export function BudgetProvider({
  children,
}) {
  const [monthlyAllocation, setMonthlyAllocation] =
    useState(0);

  const [currentBalance, setCurrentBalance] =
    useState(0);

  const [totalSpent, setTotalSpent] =
    useState(0);

  useEffect(() => {
    loadProject();
  }, []);

  async function loadProject() {
    try {
      const project =
        await getProject();

      setMonthlyAllocation(
        project.monthlyAllocation || 0
      );

      setCurrentBalance(
        project.currentBalance || 0
      );

      setTotalSpent(
        project.totalSpent || 0
      );
    } catch (error) {
      console.error(error);
    }
  }

  async function updateMonthlyAllocation(
    value
  ) {
    const updatedProject = {
      monthlyAllocation: value,
      currentBalance,
      totalSpent,
    };

    await updateProject(
      updatedProject
    );

    setMonthlyAllocation(value);
  }

  async function resetBudget() {
    const resetData = {
      monthlyAllocation: 0,
      currentBalance: 0,
      totalSpent: 0,
    };

    await updateProject(resetData);

    setMonthlyAllocation(0);
    setCurrentBalance(0);
    setTotalSpent(0);
  }

  return (
    <BudgetContext.Provider
      value={{
        monthlyAllocation,
        currentBalance,
        totalSpent,
        setCurrentBalance,
        setTotalSpent,
        updateMonthlyAllocation,
        resetBudget,
      }}
    >
      {children}
    </BudgetContext.Provider>
  );
}