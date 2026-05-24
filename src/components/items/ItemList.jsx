import ItemCard from "./ItemCard";

export default function ItemList({
  items = [],
  onDelete,
  onTogglePurchased,
  onEdit,
  onUpdateItem,
}) {
  if (!Array.isArray(items)) {
    return null;
  }

  if (items.length === 0) {
    return (
      <div className="empty-items">
        <h3>Belum Ada Item</h3>

        <p>
          Mulai tambahkan item pengadaan
          untuk menghasilkan simulasi roadmap.
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
            allItems={items}
            onDelete={onDelete}
            onTogglePurchased={
              onTogglePurchased
            }
            onEdit={onEdit}
            onUpdateItem={onUpdateItem}
          />
        );
      })}
    </div>
  );
}