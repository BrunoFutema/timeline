import styled from 'styled-components';

export const Container = styled.div`
  padding-bottom: 10px;

  overflow-x: scroll;

  &::-webkit-scrollbar {
    width: 0.2rem;
    height: 0.2rem;
  }

  &::-webkit-scrollbar-corner {
    background: rgba(0, 0, 0, 0);
  }

  &::-webkit-scrollbar-track {
    box-shadow: inset 0 0 5px transparent;
    border-radius: 7px;
  }

  &::-webkit-scrollbar-thumb {
    background: #00bfff;
    border-radius: 7px;
  }
`;
