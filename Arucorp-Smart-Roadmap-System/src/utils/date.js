export function getMonthLabel(
  monthNumber
) {
  const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  return (
    months[(monthNumber - 1) % 12]
  );
}

export function generateMonthName(
  monthIndex
) {
  return `Month ${monthIndex}`;
}

export function formatDate(timestamp) {
  return new Date(
    timestamp
  ).toLocaleDateString("id-ID");
}