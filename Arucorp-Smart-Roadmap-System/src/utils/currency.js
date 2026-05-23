export function formatCurrency(value) {
  return new Intl.NumberFormat(
    "id-ID",
    {
      style: "currency",
      currency: "IDR",
      maximumFractionDigits: 0,
    }
  ).format(value);
}

export function formatCompactCurrency(
  value
) {
  return new Intl.NumberFormat(
    "id-ID",
    {
      notation: "compact",
      maximumFractionDigits: 1,
    }
  ).format(value);
}