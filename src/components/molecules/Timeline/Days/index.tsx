import React, { useCallback, useEffect, useRef, useState } from 'react';

import { addDays } from 'date-fns';
import { v4 } from 'uuid';

import { TimelineDay } from '@components/atoms';
import { BUFFER_DAYS } from '@constants/timeline';
import { calculateNumVisibleDays } from '@utils/timeline/calculateNumVisibleDays';
import { getFirstAndLastDatesFromDate } from '@utils/timeline/getFirstAndLastDatesFromDate';

import { Container } from './styles';

interface ITimelineDaysProps {
  isHeader?: boolean;
}

const TimelineDays: React.FC<ITimelineDaysProps> = ({ isHeader = false }) => {
  const timelineDaysRef = useRef<HTMLDivElement>(null);

  const [isResize, setIsResize] = useState<boolean>(false);
  const [numVisibleDays, setNumVisibleDays] = useState<number>(60);

  window.onresize = () => setIsResize(true);

  useEffect(() => {
    if (timelineDaysRef.current) {
      const numVisibleDaysCalculated = calculateNumVisibleDays({
        dayWidth: 48,
        timelineDaysWidth: window.innerWidth,
      });

      setNumVisibleDays(numVisibleDaysCalculated);

      // console.log(window.innerWidth);
      // console.log(timelineDaysRef.current.getBoundingClientRect());
      // console.log('numVisibleDaysCalculated: ', numVisibleDaysCalculated);
    }
  }, [isResize]);

  const onRenderDays = useCallback(() => {
    const [first] = getFirstAndLastDatesFromDate(new Date());

    const components: JSX.Element[] = [];

    for (let i = 0; i < 0 + numVisibleDays + BUFFER_DAYS; i++) {
      components.push(
        <TimelineDay key={v4()} isHeader={isHeader} date={addDays(first, i)} />,
      );
    }

    return components;
  }, [isHeader, numVisibleDays]);

  return (
    <Container ref={timelineDaysRef} maxWidth={window.innerWidth}>
      {onRenderDays()}
    </Container>
  );
};

export { TimelineDays };
