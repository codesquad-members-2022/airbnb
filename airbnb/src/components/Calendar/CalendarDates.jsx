import React, { useContext } from 'react';
import styled from 'styled-components';
import { CalendarContext } from 'contexts/CalendarProvider';
import { changeLocalDateStr, changeTimeDate } from 'utility/dateUtil';

function CalendarDates({ lastDate, firstDate, year, month, date }) {
  const {
    inputDate: { checkIn, checkOut },
    handelClickEvent,
  } = useContext(CalendarContext);

  const nowDate = changeLocalDateStr(year, month - 1, date);

  const checkedDate =
    changeTimeDate(checkIn) === changeTimeDate(nowDate) ||
    changeTimeDate(checkOut) === changeTimeDate(nowDate);

  const selectedDate =
    changeTimeDate(checkIn) < changeTimeDate(nowDate) &&
    changeTimeDate(nowDate) < changeTimeDate(checkOut);

  return (
    <DateList>
      <DateNum
        lastDate={lastDate}
        firstDate={firstDate}
        onClick={() => {
          handelClickEvent(year, month, date);
        }}
        checkedDate={checkedDate}
        selectedDate={selectedDate}
        date={date}
      >
        {date && `${date}일`}
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
  ${({ checkedDate, date }) =>
    checkedDate && date && ` border-bottom: 3px solid #f00`};
  ${({ selectedDate, date }) =>
    selectedDate && date && ` border-bottom: 3px solid #010101`};
`;

export default CalendarDates;
