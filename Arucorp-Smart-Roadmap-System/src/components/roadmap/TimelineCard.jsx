export default function TimelineCard({
  month,
  itemName,
  price,
  remainingBalance,
}) {
  return (
    <div className="timeline-card">
      <div className="timeline-card-header">
        <h3>{month}</h3>
      </div>

      <div className="timeline-card-body">
        <p>
          Purchased:
          <strong> {itemName}</strong>
        </p>

        <p>
          Price:
          <strong>
            {" "}
            Rp{" "}
            {price.toLocaleString("id-ID")}
          </strong>
        </p>

        <p>
          Remaining Balance:
          <strong>
            {" "}
            Rp{" "}
            {remainingBalance.toLocaleString(
              "id-ID"
            )}
          </strong>
        </p>
      </div>
    </div>
  );
}