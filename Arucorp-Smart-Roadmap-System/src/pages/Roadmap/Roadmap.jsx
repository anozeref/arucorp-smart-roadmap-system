import "./roadmap.css";

import RoadmapTable from "../../components/roadmap/RoadmapTable";
import FundingProgress from "../../components/roadmap/FundingProgress";
import PurchaseRecommendation from "../../components/roadmap/PurchaseRecommendation";

import useRoadmap from "../../hooks/useRoadmap";

export default function Roadmap() {
  const {
    roadmap,
    nextRecommendation,
    completionPercentage,
  } = useRoadmap();

  return (
    <div className="roadmap-page">
      <section className="roadmap-header">
        <div>
          <h1>Procurement Roadmap</h1>
          <p>
            Simulate monthly procurement decisions and funding progress.
          </p>
        </div>
      </section>

      <section className="roadmap-summary">
        <FundingProgress percentage={completionPercentage} />

        <PurchaseRecommendation
          recommendation={nextRecommendation}
        />
      </section>

      <section className="roadmap-table-wrapper">
        <RoadmapTable roadmap={roadmap} />
      </section>
    </div>
  );
}