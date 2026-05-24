import "./dashboard.css";

import SummaryCard from "../../components/dashboard/SummaryCard";
import BudgetOverview from "../../components/dashboard/BudgetOverview";
import SavingsInfo from "../../components/dashboard/SavingsInfo";
import UpcomingPurchase from "../../components/dashboard/UpcomingPurchase";

import PurchaseRecommendation from "../../components/roadmap/PurchaseRecommendation";

import useBudget from "../../hooks/useBudget";
import useItems from "../../hooks/useItems";
import useRoadmap from "../../hooks/useRoadmap";

export default function Dashboard() {
  const { monthlyAllocation, totalSpent } = useBudget();

  const { items, purchasedItems, pendingItems } = useItems();

  const { roadmap, nextRecommendation } = useRoadmap();

  return (
    <div className="dashboard-page">
      <section className="dashboard-header">
        <div className="page-header-inner">
          <div className="page-header-icon">
            <i className="fab fa-creative-commons"></i>
          </div>
          <div>
            <h1>Procurement Dashboard</h1>
            <p>
              Monitor procurement progress and balance allocation with a
              compact dashboard view.
            </p>
          </div>
        </div>
      </section>

      <section className="summary-grid">
        <SummaryCard
          title="Monthly Allocation"
          value={`Rp ${monthlyAllocation.toLocaleString("id-ID")}`}
        />

        <SummaryCard
          title="Total Items"
          value={items.length}
        />

        <SummaryCard
          title="Purchased Items"
          value={purchasedItems.length}
        />
      </section>

      <section className="dashboard-main-grid">
        <div className="dashboard-left">
          <PurchaseRecommendation
            recommendation={nextRecommendation}
          />

          <BudgetOverview
            allocation={monthlyAllocation}
            spent={totalSpent}
          />

          <SavingsInfo
            pendingItems={pendingItems.length}
          />
        </div>

        <div className="dashboard-right">
          <UpcomingPurchase roadmap={roadmap} />
        </div>
      </section>
    </div>
  );
}