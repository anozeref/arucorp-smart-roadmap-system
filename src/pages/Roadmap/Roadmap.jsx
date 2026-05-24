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
              roadmap.map((item) => (
                <RoadmapCard
                  key={item.id}
                  index={item.month}
                  item={item}
                />
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