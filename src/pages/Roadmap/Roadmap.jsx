import "./roadmap.css";

import { MapPin } from "lucide-react";

import useRoadmap from "../../hooks/useRoadmap";

import RoadmapCard from "../../components/roadmap/RoadmapCard";

export default function Roadmap() {
  const { roadmap } = useRoadmap();

  return (
    <div className="roadmap-page">
      <div className="roadmap-header">
        <div className="page-header-inner">
          <div className="page-header-icon">
            <MapPin size={24} />
          </div>

          <div>
            <h1>Roadmap</h1>

            <p>
              Prioritaskan pembelian
              item berdasarkan
              anggaran dan kebutuhan.
            </p>
          </div>
        </div>
      </div>

      <div className="roadmap-summary">
        <section className="roadmap-main">
          <div className="roadmap-list">
            {roadmap.length > 0 ? (
              roadmap.map(
                (monthGroup) => (
                  <div
                    key={monthGroup.id}
                    className="roadmap-month-group"
                  >
                    <div className="roadmap-month-header">
                      <div className="roadmap-month-index">
                        {
                          monthGroup.month
                        }
                      </div>

                      <div className="roadmap-month-info">
                        <h2>
                          Cycle{" "}
                          {
                            monthGroup.month
                          }
                        </h2>

                        <p>
                          {
                            monthGroup.purchases
                              .length
                          }{" "}
                          item
                          procurement
                        </p>
                      </div>
                    </div>

                    <div className="roadmap-month-items">
                      {monthGroup.purchases.map(
                        (item) => (
                          <RoadmapCard
                            key={item.id}
                            item={item}
                          />
                        )
                      )}
                    </div>
                  </div>
                )
              )
            ) : (
              <div className="roadmap-empty">
                Belum ada roadmap
                procurement tersedia.
              </div>
            )}
          </div>
        </section>
      </div>
    </div>
  );
}