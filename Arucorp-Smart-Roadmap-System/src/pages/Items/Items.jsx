import "./items.css";

import ItemForm from "../../components/forms/ItemForm";
import ItemList from "../../components/items/ItemList";

import useItems from "../../hooks/useItems";

export default function Items() {
  const {
    items,
    addItem,
    deleteItem,
    togglePurchased,
  } = useItems();

  return (
    <div className="items-page">
      <section className="items-header">
        <div>
          <h1>Procurement Items</h1>
          <p>
            Manage procurement targets, priorities, and item pricing.
          </p>
        </div>
      </section>

      <section className="items-content">
        <div className="items-form-wrapper">
          <ItemForm onAddItem={addItem} />
        </div>

        <div className="items-list-wrapper">
          <ItemList
            items={items}
            onDelete={deleteItem}
            onTogglePurchased={togglePurchased}
          />
        </div>
      </section>
    </div>
  );
}