export default function BudgetOverview({
  allocation,
  spent,
}) {
  return (
    <div className="budget-overview-card">
      <div className="card-header">
        <div>
          <h2>Budget Overview</h2>
        </div>

        <i className="fab fa-cc-amazon-pay card-header-icon" />
      </div>

      <div className="recommendation-content">
        <div className="budget-info-list">
          <div className="budget-info-item">
            <span>Monthly Allocation</span>

            <strong>
              Rp{" "}
              {allocation.toLocaleString(
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
    </div>
  );
}