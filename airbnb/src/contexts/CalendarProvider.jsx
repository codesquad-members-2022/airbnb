import React, { useMemo, useReducer } from 'react';
import { compareDate, changeLocalDateStr } from 'utility/dateUtil';

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
    const selectedDate = changeLocalDateStr(year, month - 1, date);

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

  function handelResetEvent() {
    dispatchInputDate({
      type: 'RESET_INPUT',
    });
  }

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
