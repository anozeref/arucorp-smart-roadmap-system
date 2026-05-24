import "./roadmapCard.css";

export default function RoadmapCard({
  index,
  item,
}) {
  const remainingBalance = item.remainingBalance || 0;
  const itemPrice = item.price || 0;
  const availableBudget =
    item.availableBudget ??
    itemPrice +
      remainingBalance;

  const usedPercentage = Math.min(
    Math.floor(
      (itemPrice / availableBudget) *
        100
    ),
    100
  );

  const description =
    item.description ||
    item.category ||
    "Roadmap procurement item";

  const progressColor =
    usedPercentage <= 33
      ? "hsl(142, 45%, 70%)"
      : usedPercentage <= 66
      ? "var(--color-primary-soft)"
      : usedPercentage <= 90
      ? "hsl(30, 90%, 70%)"
      : "hsl(4, 85%, 72%)";

  return (
    <div className="roadmap-card">
      <div className="roadmap-index">
        {index}
      </div>

      <div className="roadmap-content">
        <div className="roadmap-badge">
          🏆 Prioritas {item.priority}
        </div>

        <h2 className="roadmap-title">
          {item.itemName}
        </h2>

        <p className="roadmap-description">
          {description}
        </p>

        <div className="roadmap-stats">
          <div className="roadmap-stat">
            <span>TERSEDIA</span>

            <strong>
              Rp{availableBudget.toLocaleString("id-ID")}
            </strong>
          </div>

          <div className="roadmap-stat">
            <span>HARGA EST.</span>

            <strong>
              Rp{itemPrice.toLocaleString("id-ID")}
            </strong>
          </div>

          <div className="roadmap-stat">
            <span>SISA TABUNGAN</span>

            <strong>
              Rp{remainingBalance.toLocaleString("id-ID")}
            </strong>
          </div>
        </div>

        <div className="roadmap-progress">
          <div
            className="roadmap-progress-fill"
            style={{
              width: `${usedPercentage}%`,
              background: progressColor,
              boxShadow: `0 0 12px ${progressColor}`,
            }}
          />
        </div>

        <p className="roadmap-footer">
          {usedPercentage}% anggaran terpakai — Rp{remainingBalance.toLocaleString(
            "id-ID"
          )} tersisa untuk ditabung
        </p>
      </div>
    </div>
  );
}