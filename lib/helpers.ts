// Takes a long hash string and truncates it.
export function truncateHash(hash: string, length = 38): string {
  return hash.replace(hash.substring(6, length), '...');
}

export function formatNumber(number: number): string {
  return new Intl.NumberFormat().format(number);
}

export function convertSecondsToDay(num: number) {
  const oneMinute = 60;
  const oneHour = oneMinute * 60;
  const oneDay = oneHour * 24;
  const oneYear = oneDay * 365;
  return {
    years: (~~(num / oneYear)).toLocaleString(),
    days: (~~((num % oneYear) / oneDay)).toLocaleString(),
    hours: (~~((num % oneDay) / oneHour)).toLocaleString(),
    minutes: (~~((num % oneHour) / oneMinute)).toLocaleString(),
    seconds: (num % oneMinute).toLocaleString(),
  };
}
