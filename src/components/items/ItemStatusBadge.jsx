export default function ItemStatusBadge({
  purchased,
  locked,
}) {
  return (
    <span
      className={
        purchased
          ? "item-status completed"
          : locked
          ? "item-status locked"
          : "item-status pending"
      }
    >
      {purchased
        ? "Terbeli"
        : locked
        ? "Terkunci"
        : "Tertunda"}
    </span>
  );
}