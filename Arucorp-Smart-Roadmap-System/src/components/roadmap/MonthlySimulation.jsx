import TimelineCard from "./TimelineCard";

export default function MonthlySimulation({
  roadmap,
}) {
  return (
    <div className="monthly-simulation">
      <div className="monthly-simulation-header">
        <h2>Monthly Simulation</h2>
      </div>

      <div className="timeline-list">
        {roadmap.map((entry) => (
          <TimelineCard
            key={entry.id}
            month={entry.month}
            itemName={entry.itemName}
            price={entry.price}
            remainingBalance={
              entry.remainingBalance
            }
          />
        ))}
      </div>
    </div>
  );
}