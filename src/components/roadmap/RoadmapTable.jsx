export default function RoadmapTable({
  roadmap,
}) {
  return (
    <div className="roadmap-table">
      <table>
        <thead>
          <tr>
            <th>Month</th>
            <th>Purchased Item</th>
            <th>Priority</th>
            <th>Price</th>
            <th>Remaining Balance</th>
          </tr>
        </thead>

        <tbody>
          {roadmap.map((entry) => (
            <tr key={entry.id}>
              <td>{entry.month}</td>

              <td>{entry.itemName}</td>

              <td>
                Priority {entry.priority}
              </td>

              <td>
                Rp{" "}
                {entry.price.toLocaleString(
                  "id-ID"
                )}
              </td>

              <td>
                Rp{" "}
                {entry.remainingBalance.toLocaleString(
                  "id-ID"
                )}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}