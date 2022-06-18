import * as React from 'react';
import styled from 'styled-components';

interface MonthContainerPros {
  width?: string;
}

const MonthContainer = styled.div<MonthContainerPros>`
  display: grid;
  width: ${({ width }) => width};
  height: 290px;
  grid-template-columns: repeat(7, 1fr);
  grid-template-rows: repeat(6, 1fr);
  grid-row-gap: 5px;
  place-content: stretch stretch;
`;

MonthContainer.defaultProps = {
  width: '335px',
};

interface MonthItemProps {
  startDayOfWeek?: number;
}

const MonthItem = styled.div<MonthItemProps>`
  display: flex;
  justify-content: center;
  align-items: center;
  &:first-child {
    grid-column: ${({ startDayOfWeek = -1 }) => `1 / ${startDayOfWeek + 1}`};
  }
`;

export { MonthContainer, MonthItem };
