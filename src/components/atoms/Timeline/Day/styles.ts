import styled, { css } from 'styled-components';

interface IContainerProps {
  isHeader?: boolean;
  isToday: boolean;
  isWeekend: boolean;
}

const containerVariations = {
  header: css`
    height: 60px;
    min-height: 60px;

    background: #4a5b84 !important;

    &:before {
      display: none;
    }

    strong {
      color: #fbfbfb;
      font-size: 14px;
      text-align: center;
    }

    span {
      color: #fbfbfb;
      font-size: 14px;
      text-align: center;
    }
  `,
  today: css`
    position: relative;

    color: grey;

    &:before {
      content: '';

      width: 48px;
      height: 48px;

      background: #41c057;

      opacity: 0.2;

      position: absolute;
      top: 0;
    }
  `,
  weekend: css`
    background: #354369;
  `,
};

export const Container = styled.div<IContainerProps>`
  ${({ isToday, isHeader, isWeekend }) => css`
    width: 48px;
    min-width: 48px;
    height: 48px;
    min-height: 48px;

    outline: 1px solid #283253;
    background: #373d5d;

    position: relative;

    cursor: pointer;

    transition: background 400ms;

    display: flex;
    align-items: center;
    justify-content: center;

    ${isHeader && containerVariations.header}
    ${isToday && containerVariations.today}
    ${isWeekend && containerVariations.weekend}

    &:hover {
      background: #373d5dcc;
    }
  `}
`;

export const HeaderLabel = styled.div`
  width: 48px;
  min-width: 48px;
  height: 60px;
  min-height: 60px;

  border-bottom: 2px solid #1b203c;

  display: flex;
  gap: 2px;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;
