import React, { createContext, Dispatch, useReducer } from 'react';

type ContextType = {
  checkIn: string;
  checkOut: string;
};

type ContextDispatchType = Dispatch<ActionType>;

type ActionType =
  | {
      type: 'INPUT_CHECK_IN';
      date: string;
    }
  | { type: 'INPUT_CHECK_OUT'; date: string }
  | { type: 'RESET_INPUT' };

export const CalendarContext = createContext<ContextType | null>(null);

export const CalendarDispatchContext =
  createContext<ContextDispatchType | null>(null);

function inputDateReducer(state: ContextType, action: ActionType) {
  switch (action.type) {
    case 'INPUT_CHECK_IN':
      return { ...state, checkIn: action.date };

    case 'INPUT_CHECK_OUT':
      return { ...state, checkOut: action.date };

    case 'RESET_INPUT':
      return initialCalendar;

    default:
      throw new Error();
  }
}

const initialCalendar: ContextType = {
  checkIn: '',
  checkOut: '',
};

function CalendarProvider({ children }: { children: React.ReactNode }) {
  const [inputDate, dispatchInputDate] = useReducer(
    inputDateReducer,
    initialCalendar,
  );

  return (
    <CalendarContext.Provider value={inputDate}>
      <CalendarDispatchContext.Provider value={dispatchInputDate}>
        {children}
      </CalendarDispatchContext.Provider>
    </CalendarContext.Provider>
  );
}

export default CalendarProvider;
