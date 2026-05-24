export default function TimelineCard({
  month,
  purchases = [],
}) {
  const endOfMonthBalance =
    purchases.length > 0
      ? purchases[purchases.length - 1].remainingBalance
      : 0;

  return (
    <div className="timeline-card">
      <div className="timeline-card-header">
        <h3>{month}</h3>
      </div>

      <div className="timeline-card-body">
        {purchases.map((purchase) => (
          <div
            className="timeline-purchase"
            key={purchase.id}
          >
            <p>
              Purchased:
              <strong> {purchase.itemName}</strong>
            </p>

            <p>
              Price:
              <strong>
                Rp {purchase.price.toLocaleString("id-ID")}
              </strong>
            </p>
          </div>
        ))}

        <p className="timeline-balance">
          Remaining Balance:
          <strong>
            Rp {endOfMonthBalance.toLocaleString("id-ID")}
          </strong>
        </p>
      </div>
    </div>
  );
}