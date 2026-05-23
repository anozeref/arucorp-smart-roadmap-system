import { useState } from "react";

import PriorityInput from "./PriorityInput";

export default function ItemForm({
  onAddItem,
}) {
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [priority, setPriority] = useState(1);

  function resetForm() {
    setName("");
    setPrice("");
    setPriority(1);
  }

  function handleSubmit(e) {
    e.preventDefault();

    if (!name.trim()) return;
    if (!price || Number(price) <= 0) return;

    const newItem = {
      id: crypto.randomUUID(),
      name: name.trim(),
      price: Number(price),
      priority,
      purchased: false,
      createdAt: Date.now(),
    };

    onAddItem(newItem);

    resetForm();
  }

  return (
    <form
      className="item-form"
      onSubmit={handleSubmit}
    >
      <div className="form-group">
        <label>Item Name</label>

        <input
          type="text"
          placeholder="Enter item name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </div>

      <div className="form-group">
        <label>Item Price</label>

        <input
          type="number"
          placeholder="Enter item price"
          value={price}
          onChange={(e) => setPrice(e.target.value)}
        />
      </div>

      <PriorityInput
        value={priority}
        onChange={setPriority}
      />

      <button type="submit">
        Add Item
      </button>
    </form>
  );
}