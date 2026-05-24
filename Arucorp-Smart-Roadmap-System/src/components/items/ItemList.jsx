import ItemCard from "./ItemCard";

export default function ItemList({
  items = [],
  onDelete,
  onTogglePurchased,
  onEdit,
}) {
  if (!Array.isArray(items)) {
    return null;
  }

  if (items.length === 0) {
    return (
      <div className="empty-items">
        <h3>No Items Added</h3>

        <p>
          Start adding procurement items
          to generate roadmap simulation.
        </p>
      </div>
    );
  }

  return (
    <div className="item-list">
      {items.map((item) => {
        if (!item) return null;

        return (
          <ItemCard
            key={item.id}
            item={item}
            onDelete={onDelete}
            onTogglePurchased={
              onTogglePurchased
            }
            onEdit={onEdit}
          />
        );
      })}
    </div>
  );
}