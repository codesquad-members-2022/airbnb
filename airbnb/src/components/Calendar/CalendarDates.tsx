import React from 'react';
import styled from 'styled-components';
import {
  changeLocalDateStr,
  changeTimeDate,
  compareDate,
} from 'utility/dateUtil';
import { useCalendarInputState } from 'hooks/useCalendarInputState';
import { useCalendarInputDispatch } from 'hooks/useCalendarInputDispatch';

type CalendarDatesProps = {
  date: string | number;
  year: number;
  month: number;
};

function CalendarDates({ date, year, month }: CalendarDatesProps) {
  const { checkIn, checkOut } = useCalendarInputState();
  const { handelClickEvent } = useCalendarInputDispatch();

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
    color: ${({ disabled, theme }) => disabled && theme.colors.gray4};
  }

  border-bottom: ${({ checkedDate, date, theme }) =>
    checkedDate && date && `3px solid ${theme.colors.red}`};

  border-bottom: ${({ selectedDate, date, theme }) =>
    selectedDate && date && `3px solid ${theme.colors.black}`};
`;

export default CalendarDates;
