import { addZero } from './addZero';

export function timeInSecondsAndMinutes(timeInMilliseconds: number): {
  minutes: string;
  seconds: string;
} {
  const minutes = addZero(Math.floor(timeInMilliseconds / 1000 / 60));
  const seconds = addZero(
    +minutes
      ? timeInMilliseconds / 1000 - +minutes * 60
      : timeInMilliseconds / 1000
  );
  return { minutes, seconds };
}
