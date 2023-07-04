export function formatDate(date: number): string {
  const dateFormated = new Date(date);
  return `${dateFormated.getDate().toString().padStart(2, "0")}/${(
    dateFormated.getMonth() + 1
  )
    .toString()
    .padStart(2, "0")}/${dateFormated.getFullYear()}`;
}
