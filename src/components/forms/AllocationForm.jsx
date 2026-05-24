import { useState } from "react";

export default function AllocationForm({
  allocation,
  onSave,
}) {
  const [value, setValue] = useState(allocation || "");

  function handleSubmit(e) {
    e.preventDefault();

    if (!value || Number(value) <= 0) return;

    onSave(Number(value));
  }

  return (
    <form
      className="allocation-form"
      onSubmit={handleSubmit}
    >
      <div className="form-group">
        <label>Alokasi Bulanan</label>

        <input
          type="number"
          placeholder="Masukkan alokasi bulanan"
          value={value}
          onChange={(e) => setValue(e.target.value)}
        />
      </div>

      <button type="submit" className="button button-primary">
        Simpan Alokasi
      </button>
    </form>
  );
}