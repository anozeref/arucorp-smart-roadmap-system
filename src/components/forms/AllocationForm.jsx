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
        <label>Monthly Allocation</label>

        <input
          type="number"
          placeholder="Enter monthly allocation"
          value={value}
          onChange={(e) => setValue(e.target.value)}
        />
      </div>

      <button type="submit" className="button button-primary">
        Save Allocation
      </button>
    </form>
  );
}