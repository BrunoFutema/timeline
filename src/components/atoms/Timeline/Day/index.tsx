import React, { useMemo } from 'react';
import Ink from 'react-ink';

import { format, isToday, isWeekend } from 'date-fns';
import ptBR from 'date-fns/locale/pt-BR';

import { Container, HeaderLabel } from './styles';

interface ITimelineDayProps {
  date: Date;
  isHeader?: boolean;
}

const TimelineDay: React.FC<ITimelineDayProps> = ({ date, isHeader }) => {
  const itsWeekend = useMemo(() => isWeekend(date), [date]);
  const itsToday = useMemo(() => isToday(date), [date]);

  const [parsedDay, parsedWeek] = useMemo(() => {
    const day = format(date, 'dd', { locale: ptBR });
    const week = format(date, 'EEE', { locale: ptBR });
    return [day, week];
  }, [date]);

  return (
    <Container isHeader={isHeader} isToday={itsToday} isWeekend={itsWeekend}>
      <Ink />
      {isHeader && (
        <HeaderLabel>
          <strong>{parsedDay}</strong>
          <span>{parsedWeek}</span>
        </HeaderLabel>
      )}
    </Container>
  );
};

export { TimelineDay };
