import { BarChart3 } from "lucide-react";

export default function BudgetOverview({
  allocation,
  spent,
}) {
  return (
    <div className="budget-overview-card">
      <div className="card-header">
        <div>
          <h2>Gambaran Anggaran</h2>
        </div>

        <BarChart3 className="card-header-icon" />
      </div>

      <div className="recommendation-content">
        <div className="budget-info-list">
          <div className="budget-info-item">
            <span>Alokasi Bulanan</span>

            <strong>
              Rp{" "}
              {allocation.toLocaleString(
                "id-ID"
              )}
            </strong>
          </div>

          <div className="budget-info-item">
            <span>Total Pengeluaran</span>

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