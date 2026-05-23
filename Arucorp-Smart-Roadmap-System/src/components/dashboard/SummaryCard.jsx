export default function SummaryCard({
  title,
  value,
}) {
  return (
    <div className="summary-card">
      <div className="summary-card-content">
        <p className="summary-title">
          {title}
        </p>

        <h2 className="summary-value">
          {value}
        </h2>
      </div>
    </div>
  );
}