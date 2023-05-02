import { addZero } from './addZero';

export function timeInSecondsAndMinutes(timeInMilliseconds: number): {
  minutes: string;
  seconds: string;
} {
  let minutes;
  let seconds;
  if (timeInMilliseconds > 0) {
    minutes = addZero(Math.floor(timeInMilliseconds / 1000 / 60));
    seconds = addZero(
      Math.floor(
        +minutes
          ? timeInMilliseconds / 1000 - +minutes * 60
          : timeInMilliseconds / 1000
      )
    );
  } else {
    minutes = addZero(0);
    seconds = addZero(0);
  }
  return { minutes, seconds };
}
