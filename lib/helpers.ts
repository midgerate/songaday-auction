// Takes a long hash string and truncates it.
export function truncateHash(hash: string, length = 38): string {
  return hash.replace(hash.substring(6, length), '...');
}

export function formatNumber(number: number): string {
  return new Intl.NumberFormat().format(number);
}
