export function allocateMonthlyBudget({
  currentBalance,
  monthlyAllocation,
}) {
  return (
    currentBalance + monthlyAllocation
  );
}