import "./roadmapCard.css";

export default function RoadmapCard({
  index,
  item,
}) {
  const availableBudget =
    item.availableBudget ||
    item.price +
      item.remainingBalance;

  const usedPercentage = Math.min(
    Math.floor(
      (item.price /
        availableBudget) *
        100
    ),
    100
  );

  return (
    <div className="roadmap-card">
      <div className="roadmap-index">
        {index}
      </div>

      <div className="roadmap-content">
        <div className="roadmap-badge">
          🏆 Priority {item.priority}
        </div>

        <h2 className="roadmap-title">
          {item.itemName}
        </h2>

        <p className="roadmap-description">
          Procurement roadmap target
        </p>

        <div className="roadmap-stats">
          <div className="roadmap-stat">
            <span>TERSEDIA</span>

            <strong>
              Rp
              {availableBudget.toLocaleString(
                "id-ID"
              )}
            </strong>
          </div>

          <div className="roadmap-stat">
            <span>HARGA</span>

            <strong>
              Rp
              {item.price.toLocaleString(
                "id-ID"
              )}
            </strong>
          </div>

          <div className="roadmap-stat">
            <span>SISA TABUNGAN</span>

            <strong>
              Rp
              {item.remainingBalance.toLocaleString(
                "id-ID"
              )}
            </strong>
          </div>
        </div>

        <div className="roadmap-progress">
          <div
            className="roadmap-progress-fill"
            style={{
              width: `${usedPercentage}%`,
            }}
          />
        </div>

        <p className="roadmap-footer">
          {usedPercentage}% dari budget
          digunakan — Rp
          {item.remainingBalance.toLocaleString(
            "id-ID"
          )}{" "}
          lanjut ditabung
        </p>
      </div>
    </div>
  );
}