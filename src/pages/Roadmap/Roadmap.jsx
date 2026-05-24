import "./roadmap.css";

import useRoadmap from "../../hooks/useRoadmap";

import RoadmapCard from "../../components/roadmap/RoadmapCard";

export default function Roadmap() {
  const { roadmap } = useRoadmap();

  return (
    <div className="roadmap-page">
      <div className="roadmap-header">
        <div className="page-header-inner">
          <div className="page-header-icon">
            <i className="fab fa-creative-commons-by"></i>
          </div>
          <div>
            <h1>Roadmap</h1>

            <p>
              Prioritize item purchases according to
              budget and needs.
            </p>
          </div>
        </div>
      </div>

      <div className="roadmap-summary">
        <section className="roadmap-main">
          {/* Section header removed per localization request */}

          <div className="roadmap-list">
            {roadmap.length > 0 ? (
              roadmap.map((item) => (
                <RoadmapCard
                  key={item.id}
                  index={item.month}
                  item={item}
                />
              ))
              ) : (
              <div className="roadmap-empty">
                No roadmap items yet. Add entries in db.json
                or via the item form.
              </div>
            )}
          </div>
        </section>
      </div>
    </div>
  );
}