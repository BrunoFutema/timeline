import React from 'react';

import { Timeline } from '@components/organisms';

import { Container } from './styles';

const Home: React.FC = () => {
  return (
    <Container>
      <h1>Hello Timeline</h1>

      <Timeline />
    </Container>
  );
};

export { Home };
