export default function PurchaseRecommendation({
  recommendation,
}) {
  if (!recommendation) {
    return (
      <div className="purchase-recommendation">
        <h2>No Recommendation</h2>

        <p>
          All procurement items have
          been completed.
        </p>
      </div>
    );
  }

  return (
    <div className="purchase-recommendation">
      <h2>Next Recommendation</h2>

      <div className="recommendation-content">
        <h3>{recommendation.name}</h3>

        <p>
          Priority:
          <strong>
            {" "}
            {recommendation.priority}
          </strong>
        </p>

        <p>
          Price:
          <strong>
            {" "}
            Rp{" "}
            {recommendation.price.toLocaleString(
              "id-ID"
            )}
          </strong>
        </p>

        <p>
          Recommendation Score:
          <strong>
            {" "}
            {recommendation.score}
          </strong>
        </p>
      </div>
    </div>
  );
}