import React, { useReducer } from 'react';
import { CalendarStateContext, CalendarDispatchContext } from './CalendarContext';
import calendarReducer from './calendarReducer';
import { CalendarStateType } from './calendarType';
import { getSearchParams } from '../../util/urlUtil';

const makeCurrPageCalendarState = () => {
  const checkInString = getSearchParams('checkIn');
  const checkOutString = getSearchParams('checkOut');
  const checkInValue = checkInString ? new Date(checkInString) : null;
  const checkOutValue = checkOutString ? new Date(checkOutString) : null;

  const calendarState: CalendarStateType = {
    checkIn: checkInValue,
    checkOut: checkOutValue,
    hoveredDate: checkOutValue,
  };

  return calendarState;
};

const CalendarProvider = ({ children }: { children: React.ReactNode }) => {
  const currPageInitialCalendarState = makeCurrPageCalendarState();
  const [calendarState, dispatchCalendar] = useReducer(
    calendarReducer,
    currPageInitialCalendarState,
  );

  return (
    <CalendarStateContext.Provider value={calendarState}>
      <CalendarDispatchContext.Provider value={dispatchCalendar}>
        {children}
      </CalendarDispatchContext.Provider>
    </CalendarStateContext.Provider>
  );
};

export default CalendarProvider;
