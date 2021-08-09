import { THOUSAND_IN_HOUR } from '@constants/timeline';

import { getToday } from './getToday';

type Params = {
  position: number;
  nowPosition: number;
  dayWidth: number;
};

function getPixelToDate({ dayWidth, nowPosition, position }: Params): Date {
  const hoursInPixel = 24 / dayWidth;
  const pixelsFromNow = position - nowPosition;

  const today = getToday();

  const milisecondsFromNow =
    today.getTime() + pixelsFromNow * hoursInPixel * THOUSAND_IN_HOUR;

  const result = new Date(milisecondsFromNow);

  const lightSavingDiff =
    (result.getTimezoneOffset() - today.getTimezoneOffset()) * 60 * 1000;

  result.setTime(result.getTime() + lightSavingDiff);

  return result;
}

export { getPixelToDate };
