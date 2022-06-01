import React, { useContext } from 'react';
import styled from 'styled-components';
import { CalendarContext } from 'contexts/CalendarProvider';

function CalendarDates({ lastDate, firstDate, idx, year, month, date }) {
  const { handelClickEvent } = useContext(CalendarContext);

  return (
    <DateList>
      <DateNum
        lastDate={lastDate}
        firstDate={firstDate}
        active={idx > firstDate - 1 || idx < lastDate}
        onClick={() => {
          handelClickEvent(year, month, date);
        }}
      >
        {date}일
      </DateNum>
    </DateList>
  );
}

const DateList = styled.li`
  position: relative;
  width: calc(94% / 7);
  height: 60px;
  text-align: right;
  border: 1px solid ${({ theme }) => theme.colors.gray1};

  :nth-child(7n + 1) {
    color: ${({ theme }) => theme.colors.red};
  }

  :nth-child(7n) {
    color: ${({ theme }) => theme.colors.blue};
  }
`;

const DateNum = styled.button`
  width: 100%;
  text-align: right;
  font-size: ${({ theme }) => theme.fontSizes.m};
  font-weight: 500;
  color: inherit;
  ${({ active }) => active && `color: #BDBDBD;`};
`;

export default CalendarDates;
