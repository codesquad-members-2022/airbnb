import React, { useMemo, useReducer } from 'react';
import { compareDate } from 'utility/dateUtil';

export const CalendarContext = React.createContext();

function inputDateReducer(state, { type, date }) {
  let newState = {};

  switch (type) {
    case 'INPUT_CHECK_IN':
      newState = { ...state, checkIn: date };
      break;
    case 'INPUT_CHECK_OUT':
      newState = { ...state, checkOut: date };
      break;
    case 'RESET_INPUT':
      newState = initialCalendar;
      break;
    default:
      return state;
  }

  return newState;
}

const initialCalendar = { checkIn: null, checkOut: null };

function CalendarProvider({ children }) {
  const [inputDate, dispatchInputDate] = useReducer(
    inputDateReducer,
    initialCalendar,
  );

  function handelClickEvent(year, month, date) {
    const selectedDate = new Date(year, month - 1, date).toLocaleDateString();

    if (!inputDate.checkIn || compareDate(inputDate.checkIn, selectedDate)) {
      dispatchInputDate({
        type: 'INPUT_CHECK_IN',
        date: selectedDate,
      });
    } else {
      dispatchInputDate({
        type: 'INPUT_CHECK_OUT',
        date: selectedDate,
      });
    }
  }

  // 리셋 함수 작성 중...
  function handelResetEvent() {}

  const calendarReducerValue = useMemo(() => {
    return {
      inputDate,
      handelClickEvent,
      handelResetEvent,
    };
  }, [inputDate]);

  return (
    <CalendarContext.Provider value={calendarReducerValue}>
      {children}
    </CalendarContext.Provider>
  );
}

export default CalendarProvider;
