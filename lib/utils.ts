export function formatDate(date: Date): string {
  return date.toLocaleDateString();
}

export function capitalizeFirstLetter(str: string): string {
  return str.charAt(0).toUpperCase() + str.slice(1);
}