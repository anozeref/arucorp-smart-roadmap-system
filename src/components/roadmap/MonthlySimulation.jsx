import TimelineCard from "./TimelineCard";

import { CalendarDays } from "lucide-react";

export default function MonthlySimulation({
  roadmap,
}) {
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
    <div className="monthly-simulation">
      <div className="card-header monthly-simulation-header">
        <div>
          <h2>Monthly Simulation</h2>
        </div>

        <CalendarDays className="card-header-icon" />
      </div>

      <div className="timeline-list">
        {months.map((entry) => (
          <TimelineCard
            key={entry.month}
            month={entry.month}
            purchases={entry.purchases}
          />
        ))}
      </div>
    </div>
  );
}