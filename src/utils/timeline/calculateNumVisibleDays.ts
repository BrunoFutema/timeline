import { BUFFER_DAYS } from '@constants/timeline';

type Params = {
  dayWidth: number;
  timelineDaysWidth: number;
};

function calculateNumVisibleDays({
  dayWidth,
  timelineDaysWidth,
}: Params): number {
  return Math.ceil(timelineDaysWidth / dayWidth) + BUFFER_DAYS;
}

export { calculateNumVisibleDays };
