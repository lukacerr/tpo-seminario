function breakInterval(n: number, tag: string, pluralTag: string) {
  const mfi = Math.floor(n);
  return `${mfi} ${mfi > 1 ? pluralTag : tag}`;
}

export function timeSince(date: Date) {
  const seconds = Math.floor((new Date().valueOf() - date.valueOf()) / 1000);

  let interval = seconds / 31536000;
  if (interval > 1) return breakInterval(interval, 'año', 'años');

  interval = seconds / 2592000;
  if (interval > 1) return breakInterval(interval, 'mes', 'meses');

  interval = seconds / 86400;
  if (interval > 1) return breakInterval(interval, 'día', 'días');

  interval = seconds / 3600;
  if (interval > 1) return breakInterval(interval, 'hora', 'horas');

  interval = seconds / 60;
  if (interval > 1) return breakInterval(interval, 'minuto', 'minutos');

  return 'unos instantes';
}
