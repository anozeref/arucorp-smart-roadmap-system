export default function BudgetOverview({
  allocation,
  balance,
  spent,
}) {
  return (
    <div className="budget-overview-card">
      <div className="card-header">
        <h2>Budget Overview</h2>
      </div>

      <div className="budget-info-list">
        <div className="budget-info-item">
          <span>
            Monthly Allocation
          </span>

          <strong>
            Rp{" "}
            {allocation.toLocaleString(
              "id-ID"
            )}
          </strong>
        </div>

        <div className="budget-info-item">
          <span>
            Current Balance
          </span>

          <strong>
            Rp{" "}
            {balance.toLocaleString(
              "id-ID"
            )}
          </strong>
        </div>

        <div className="budget-info-item">
          <span>Total Spent</span>

          <strong>
            Rp{" "}
            {spent.toLocaleString("id-ID")}
          </strong>
        </div>
      </div>
    </div>
  );
}