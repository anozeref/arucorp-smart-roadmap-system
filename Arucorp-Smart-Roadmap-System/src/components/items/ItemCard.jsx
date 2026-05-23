import ItemStatusBadge from "./ItemStatusBadge";

export default function ItemCard({
  item,
  onDelete,
  onTogglePurchased,
}) {
  if (!item) return null;

  return (
    <div className="item-card">
      <div className="item-card-top">
        <div>
          <h3>{item.name}</h3>

          <p>
            Rp{" "}
            {item.price.toLocaleString(
              "id-ID"
            )}
          </p>
        </div>

        <ItemStatusBadge
          purchased={item.purchased}
        />
      </div>

      <div className="item-card-middle">
        <p>
          Priority:
          <strong>
            {" "}
            {item.priority}
          </strong>
        </p>
      </div>

      <div className="item-card-actions">
        <button
          className="toggle-button"
          onClick={() =>
            onTogglePurchased(item.id)
          }
        >
          {item.purchased
            ? "Mark Pending"
            : "Mark Purchased"}
        </button>

        <button
          className="delete-button"
          onClick={() =>
            onDelete(item.id)
          }
        >
          Delete
        </button>
      </div>
    </div>
  );
}