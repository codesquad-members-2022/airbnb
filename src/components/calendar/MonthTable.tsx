import React from 'react';
import styled from 'styled-components';
import {
  useCalendarStateContext,
  useCalendarDispatchContext,
} from '../../store/calendarStore/CalendarContext';
import { calendarActions } from '../../store/calendarStore/calendarReducer';
import MonthTHead from './MonthTHead';
import MonthTBody from './MonthTBody';

const MonthTable = ({ year, month }: { year: number; month: number }) => {
  const { checkOut } = useCalendarStateContext();
  const dispatchCalendar = useCalendarDispatchContext();
  const { hoverActionCreator } = calendarActions;

  const onMouseLeaveHandler = () => {
    if (checkOut) return;
    dispatchCalendar(hoverActionCreator(null));
  };

  return (
    <StyledTable onMouseLeave={onMouseLeaveHandler}>
      <MonthTHead year={year} month={month} />
      <MonthTBody year={year} month={month} />
    </StyledTable>
  );
};

const StyledTable = styled.table`
  -webkit-user-select: none;
`;

export default MonthTable;
