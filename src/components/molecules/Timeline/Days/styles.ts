import styled from 'styled-components';

interface IContainerProps {
  maxWidth: number;
}

export const Container = styled.div<IContainerProps>`
  max-width: ${({ maxWidth }) => `${maxWidth}px`};

  display: flex;
`;
