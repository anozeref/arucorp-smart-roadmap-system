import ItemStatusBadge from "./ItemStatusBadge";

export default function ItemCard({
  item,
  onDelete,
  onTogglePurchased,
  onEdit,
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
          Prioritas:
          <strong>
            {" "}
            {item.priority}
          </strong>
        </p>
      </div>

      <div className="item-card-actions">
        <button
          className="edit-button"
          onClick={() => onEdit?.(item)}
        >
          Ubah
        </button>

        <button
          className="toggle-button"
          onClick={() =>
            onTogglePurchased(item.id)
          }
        >
          {item.purchased
            ? "Tandai Belum"
            : "Tandai Terbeli"}
        </button>

        <button
          className="delete-button"
          onClick={() =>
            onDelete(item.id)
          }
        >
          Hapus
        </button>
      </div>
    </div>
  );
}