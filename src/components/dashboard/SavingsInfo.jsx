import { PiggyBank } from "lucide-react";

export default function SavingsInfo({
  pendingItems,
}) {
  return (
    <div className="savings-info-card">
      <div className="card-header">
        <div>
          <h2>Informasi Tabungan</h2>
        </div>

        <PiggyBank className="card-header-icon" />
      </div>

      <div className="recommendation-content">
        <div className="savings-content">
          <div className="savings-item">
            <span>Item Tertunda</span>

            <strong>
              {pendingItems} Item
            </strong>
          </div>
        </div>
      </div>
    </div>
  );
}