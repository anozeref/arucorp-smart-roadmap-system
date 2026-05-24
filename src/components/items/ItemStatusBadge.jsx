export default function ItemStatusBadge({
  purchased,
}) {
  return (
    <span
      className={
        purchased
          ? "item-status completed"
          : "item-status pending"
      }
    >
      {purchased ? "Terbeli" : "Tertunda"}
    </span>
  );
}