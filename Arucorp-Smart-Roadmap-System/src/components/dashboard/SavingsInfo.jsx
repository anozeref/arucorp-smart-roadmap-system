export default function SavingsInfo({
  balance,
  pendingItems,
}) {
  return (
    <div className="savings-info-card">
      <div className="card-header">
        <h2>Savings Information</h2>
      </div>

      <div className="savings-content">
        <div className="savings-item">
          <span>Carry Over Balance</span>

          <strong>
            Rp{" "}
            {balance.toLocaleString(
              "id-ID"
            )}
          </strong>
        </div>

        <div className="savings-item">
          <span>Pending Items</span>

          <strong>
            {pendingItems} Items
          </strong>
        </div>
      </div>
    </div>
  );
}