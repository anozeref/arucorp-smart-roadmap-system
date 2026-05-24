const iconMap = {
  "Monthly Allocation": "fa-cc-visa",
  "Current Balance": "fa-cc-mastercard",
  "Total Items": "fa-dropbox",
  "Purchased Items": "fa-opencart",
};

export default function SummaryCard({
  title,
  value,
}) {
  const icon = iconMap[title] || "fa-creative-commons";

  return (
    <div className="summary-card">
      <div className="summary-card-icon">
        <i className={`fab ${icon}`} />
      </div>

      <div className="summary-card-content">
        <p className="summary-title">{title}</p>

        <h2 className="summary-value">{value}</h2>
      </div>
    </div>
  );
}