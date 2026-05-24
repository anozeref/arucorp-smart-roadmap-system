import { CheckCircle2, ShoppingCart } from "lucide-react";

export default function PurchaseRecommendation({
  recommendation,
}) {
  if (!recommendation) {
    return (
      <div className="purchase-recommendation">
        <div className="card-header">
          <div>
            <h2>Tidak Ada Rekomendasi</h2>
          </div>

          <CheckCircle2 className="card-header-icon" />
        </div>

        <p>
          Semua item pengadaan telah selesai.
        </p>
      </div>
    );
  }

  return (
    <div className="purchase-recommendation">
      <div className="card-header">
        <div>
          <h2>Next Recommendation</h2>
        </div>

        <ShoppingCart className="card-header-icon" />
      </div>

      <div className="recommendation-content">
        <h3>{recommendation.itemName || recommendation.name}</h3>

        <p>
          Price:
          <strong>
            {" "}
            Rp {recommendation.price.toLocaleString("id-ID")}
          </strong>
        </p>
      </div>
    </div>
  );
}