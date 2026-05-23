import "./dashboard.css";

import SummaryCard from "../../components/dashboard/SummaryCard";
import BudgetOverview from "../../components/dashboard/BudgetOverview";
import SavingsInfo from "../../components/dashboard/SavingsInfo";
import UpcomingPurchase from "../../components/dashboard/UpcomingPurchase";

import MonthlySimulation from "../../components/roadmap/MonthlySimulation";
import PurchaseRecommendation from "../../components/roadmap/PurchaseRecommendation";

import useBudget from "../../hooks/useBudget";
import useItems from "../../hooks/useItems";
import useRoadmap from "../../hooks/useRoadmap";

export default function Dashboard() {
  const { monthlyAllocation, currentBalance, totalSpent } = useBudget();

  const { items, purchasedItems, pendingItems } = useItems();

  const { roadmap, nextRecommendation } = useRoadmap();

  return (
    <div className="dashboard-page">
      <section className="dashboard-header">
        <div>
          <h1>Procurement Dashboard</h1>
          <p>
            Monitor procurement progress, balance allocation, and roadmap
            simulation.
          </p>
        </div>
      </section>

      <section className="summary-grid">
        <SummaryCard
          title="Monthly Allocation"
          value={`Rp ${monthlyAllocation.toLocaleString("id-ID")}`}
        />

        <SummaryCard
          title="Current Balance"
          value={`Rp ${currentBalance.toLocaleString("id-ID")}`}
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
          <BudgetOverview
            allocation={monthlyAllocation}
            balance={currentBalance}
            spent={totalSpent}
          />

          <SavingsInfo
            balance={currentBalance}
            pendingItems={pendingItems.length}
          />

          <PurchaseRecommendation
            recommendation={nextRecommendation}
          />
        </div>

        <div className="dashboard-right">
          <UpcomingPurchase roadmap={roadmap} />

          <MonthlySimulation roadmap={roadmap} />
        </div>
      </section>
    </div>
  );
}