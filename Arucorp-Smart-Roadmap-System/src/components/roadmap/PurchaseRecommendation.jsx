export default function PurchaseRecommendation({
  recommendation,
}) {
  if (!recommendation) {
    return (
      <div className="purchase-recommendation">
        <div className="card-header">
          <div>
            <h2>No Recommendation</h2>
          </div>

          <i className="fab fa-creative-commons card-header-icon" />
        </div>

        <p>
          All procurement items have been completed.
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

        <i className="fab fa-cc-amazon-pay card-header-icon" />
      </div>

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