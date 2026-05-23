export default function PriorityInput({
  value,
  onChange,
}) {
  return (
    <div className="form-group">
      <label>Priority</label>

      <select
        value={value}
        onChange={(e) => onChange(Number(e.target.value))}
      >
        <option value={1}>
          Priority 1
        </option>

        <option value={2}>
          Priority 2
        </option>

        <option value={3}>
          Priority 3
        </option>

        <option value={4}>
          Priority 4
        </option>

        <option value={5}>
          Priority 5
        </option>
      </select>
    </div>
  );
}