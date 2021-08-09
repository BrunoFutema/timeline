import React, { useRef } from 'react';

import { TimelineDays } from '@components/molecules';
import { useDragScroll } from '@hooks/useDragScroll';

import { Container } from './styles';

const Timeline: React.FC = () => {
  const viewPortRef = useRef<HTMLDivElement>(null);

  useDragScroll({ ref: viewPortRef, velocity: 6 });

  return (
    <Container ref={viewPortRef}>
      <TimelineDays isHeader />
      <TimelineDays />
      <TimelineDays />
      <TimelineDays />
      <TimelineDays />
      <TimelineDays />
      <TimelineDays />
      <TimelineDays />
      <TimelineDays />
      <TimelineDays />
    </Container>
  );
};

export { Timeline };
