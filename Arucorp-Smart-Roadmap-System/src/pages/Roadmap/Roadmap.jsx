import "./roadmap.css";

import useRoadmap from "../../hooks/useRoadmap";

import RoadmapCard from "../../components/roadmap/RoadmapCard";

export default function Roadmap() {
  const { roadmap } = useRoadmap();

  return (
    <div className="roadmap-page">
      <div className="roadmap-header">
        <h1>Roadmap</h1>

        <p>
          Rencana pembelian item
          berdasarkan prioritas dan
          budget
        </p>
      </div>

      <div className="roadmap-list">
        {roadmap.map(
          (item, index) => (
            <RoadmapCard
              key={item.id}
              index={index + 1}
              item={item}
            />
          )
        )}
      </div>
    </div>
  );
}