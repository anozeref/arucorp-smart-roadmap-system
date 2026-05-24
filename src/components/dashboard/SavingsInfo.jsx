export default function SavingsInfo({
  pendingItems,
}) {
  return (
    <div className="savings-info-card">
      <div className="card-header">
        <div>
          <h2>Savings Information</h2>
        </div>

        <i className="fab fa-creative-commons card-header-icon" />
      </div>

      <div className="recommendation-content">
        <div className="savings-content">
          <div className="savings-item">
            <span>Pending Items</span>

            <strong>
              {pendingItems} Items
            </strong>
          </div>
        </div>
      </div>
    </div>
  );
}