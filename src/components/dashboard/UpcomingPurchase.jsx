import { Clock } from "lucide-react";

export default function UpcomingPurchase({
  roadmap,
}) {
  const upcomingItems = roadmap.slice(0, 5);

  return (
    <div className="upcoming-purchase-card">
      <div className="card-header">
        <div>
          <h2>Pembelian Mendatang</h2>
        </div>

        <Clock className="card-header-icon" />
      </div>

      <div className="recommendation-content">
        <div className="upcoming-list">
          {upcomingItems.length === 0 && (
            <p>
              Belum ada roadmap pengadaan mendatang.
            </p>
          )}

          {upcomingItems.map((item) => (
            <div
              key={item.id}
              className="upcoming-item"
            >
              <div>
                <h4>{item.itemName}</h4>

                <p>Month {item.month}</p>
              </div>

              <strong>
                Rp{" "}
                {item.price.toLocaleString(
                  "id-ID"
                )}
              </strong>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}