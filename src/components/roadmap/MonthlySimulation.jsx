import TimelineCard from "./TimelineCard";

import { CalendarDays } from "lucide-react";

export default function MonthlySimulation({
  roadmap,
}) {
  return (
    <div className="monthly-simulation">
      <div className="card-header monthly-simulation-header">
        <div>
          <h2>Monthly Simulation</h2>
        </div>

        <CalendarDays className="card-header-icon" />
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