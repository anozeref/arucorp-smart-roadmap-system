import "./roadmap.css";

import { MapPin } from "lucide-react";
import useRoadmap from "../../hooks/useRoadmap";

import RoadmapCard from "../../components/roadmap/RoadmapCard";

export default function Roadmap() {
  const { roadmap } = useRoadmap();

  const groupedByMonth = roadmap.reduce(
    (acc, entry) => {
      const monthKey = String(entry.month);

      if (!acc[monthKey]) {
        acc[monthKey] = [];
      }

      acc[monthKey].push(entry);

      return acc;
    },
    {}
  );

  const months = Object.keys(groupedByMonth)
    .sort((a, b) => Number(a) - Number(b))
    .map((monthKey) => ({
      month: Number(monthKey),
      purchases: groupedByMonth[monthKey],
    }));

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
              Prioritaskan pembelian item berdasarkan anggaran dan kebutuhan.
            </p>
          </div>
        </div>
      </div>

      <div className="roadmap-summary">
        <section className="roadmap-main">
          {/* Section header removed per localization request */}

          <div className="roadmap-list">
            {roadmap.length > 0 ? (
              months.map((monthGroup) => (
                <div
                  key={monthGroup.month}
                  className="roadmap-month-group"
                >
                  <div className="roadmap-month-heading">
                    Bulan {monthGroup.month}
                  </div>

                  {monthGroup.purchases.map((item, idx) => (
                    <RoadmapCard
                      key={item.id}
                      index={idx + 1}
                      item={item}
                    />
                  ))}
                </div>
              ))
            ) : (
              <div className="roadmap-empty">
                Belum ada item roadmap. Tambahkan entri di db.json
                atau lewat formulir item.
              </div>
            )}
          </div>
        </section>
      </div>
    </div>
  );
}