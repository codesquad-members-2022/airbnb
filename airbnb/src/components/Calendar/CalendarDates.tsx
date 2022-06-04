import React from 'react';
import styled from 'styled-components';
import {
  changeLocalDateStr,
  changeTimeDate,
  compareDate,
} from 'utility/dateUtil';
import { useInputState } from 'hooks/useInputState';
import { useInputDispatch } from 'hooks/useInputDispatch';

type props = {
  date: string | number;
  year: number;
  month: number;
};

function CalendarDates({ date, year, month }: props) {
  const { checkIn, checkOut } = useInputState();
  const { handelClickEvent } = useInputDispatch();

  const nowDate: string = changeLocalDateStr(year, month - 1, date);

  const disableDate: boolean = compareDate(new Date(), nowDate);

  const checkedDate: boolean =
    changeTimeDate(checkIn) === changeTimeDate(nowDate) ||
    changeTimeDate(checkOut) === changeTimeDate(nowDate);

  const selectedDate: boolean =
    changeTimeDate(checkIn) < changeTimeDate(nowDate) &&
    changeTimeDate(nowDate) < changeTimeDate(checkOut);

  return (
    <DateList>
      <DateNum
        onClick={() => {
          handelClickEvent(year, month, date);
        }}
        disabled={disableDate}
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
  border: 1px solid ${({ theme }) => theme.colors.white};

  :nth-child(7n + 1) {
    color: ${({ theme }) => theme.colors.red};
  }

  :nth-child(7n) {
    color: ${({ theme }) => theme.colors.blue};
  }
`;

const DateNum = styled.button<{
  disabled: boolean;
  checkedDate: boolean;
  selectedDate: boolean;
  date: string | number;
}>`
  width: 100%;
  text-align: right;
  font-size: ${({ theme }) => theme.fontSizes.m};
  font-weight: 500;
  color: inherit;

  &:disabled {
    ${({ disabled }) => disabled && `color : #BDBDBD`}
  }

  ${({ checkedDate, date }) =>
    checkedDate && date && ` border-bottom: 3px solid #f00`};
  ${({ selectedDate, date }) =>
    selectedDate && date && ` border-bottom: 3px solid #010101`};
`;

export default CalendarDates;
