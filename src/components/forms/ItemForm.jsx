import { useEffect, useState } from "react";

import PriorityInput from "./PriorityInput";

export default function ItemForm({
  onAddItem,
  onUpdateItem,
  initialItem,
  onCancelEdit,
}) {
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [priority, setPriority] = useState(1);

  function resetForm() {
    setName("");
    setPrice("");
    setPriority(1);
  }

  useEffect(() => {
    if (initialItem) {
      setName(initialItem.name || "");
      setPrice(
        initialItem.price?.toString() || ""
      );
      setPriority(initialItem.priority ?? 1);
      return;
    }

    resetForm();
  }, [initialItem]);

  function handleSubmit(e) {
    e.preventDefault();

    if (!name.trim()) return;
    if (!price || Number(price) <= 0) return;

    const itemPayload = {
      id:
        initialItem?.id ||
        crypto.randomUUID(),
      name: name.trim(),
      price: Number(price),
      priority,
      purchased:
        initialItem?.purchased ?? false,
      dependencies:
        initialItem?.dependencies ?? [],
      createdAt:
        initialItem?.createdAt ||
        Date.now(),
    };

    if (initialItem) {
      onUpdateItem?.(itemPayload);
    } else {
      onAddItem(itemPayload);
    }

    resetForm();
  }

  return (
    <form
      className="item-form"
      onSubmit={handleSubmit}
    >
      <div className="form-group">
        <label>Nama Item</label>

        <input
          type="text"
          placeholder="Masukkan nama item"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </div>

      <div className="form-group">
        <label>Harga Item</label>

        <input
          type="number"
          placeholder="Masukkan harga item"
          value={price}
          onChange={(e) => setPrice(e.target.value)}
        />
      </div>

      <PriorityInput
        value={priority}
        onChange={setPriority}
      />

      <div className="item-form-actions">
        <button type="submit" className="button button-primary">
          {initialItem ? "Perbarui Item" : "Tambah Item"}
        </button>

        {initialItem && (
          <button
            type="button"
            className="button button-secondary"
            onClick={onCancelEdit}
          >
            Batal
          </button>
        )}
      </div>
    </form>
  );
}