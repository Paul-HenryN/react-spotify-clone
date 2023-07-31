export function MinToHourMin(minutes) {
  const hours = minutes / 60;
  const min = (hours - parseInt(hours)) * 60;

  return [parseInt(hours), parseInt(min)];
}

export function millisecondsToMinSec(millis) {
  const minutes = millis / 1000 / 60;
  const seconds = (minutes - parseInt(minutes)) * 60;

  return [parseInt(minutes), parseInt(seconds)];
}
