export default function FundingProgress({
  percentage,
}) {
  return (
    <div className="funding-progress-card">
      <div className="funding-progress-header">
        <h2>Funding Progress</h2>

        <span>{percentage}%</span>
      </div>

      <div className="progress-bar">
        <div
          className="progress-fill"
          style={{
            width: `${percentage}%`,
          }}
        />
      </div>
    </div>
  );
}