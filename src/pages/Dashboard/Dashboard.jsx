import "./dashboard.css";

import { Activity } from "lucide-react";
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
            <Activity size={24} />
          </div>
          <div>
            <h1>Dasbor Pengadaan</h1>
            <p>
              Pantau kemajuan pengadaan dan seimbangkan alokasi anggaran dengan
              tampilan dasbor yang ringkas dan mudah dibaca.
            </p>
          </div>
        </div>
      </section>

      <section className="summary-grid">
        <SummaryCard
          title="Alokasi Bulanan"
          value={`Rp ${monthlyAllocation.toLocaleString("id-ID")}`}
        />

        <SummaryCard
          title="Total Item"
          value={items.length}
        />

        <SummaryCard
          title="Item Dibeli"
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