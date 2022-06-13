import useEffect, { createContext, useContext, useMemo, useReducer, useCallback } from "react";

import { CalendarState, CalendarActionType, CalendarDispatches, CalendarTypes } from "_types/calendar";

const reducer = (state: CalendarState, action: CalendarActionType): CalendarState => {
  switch (action.type) {
    case CalendarTypes.CHECK_IN:
      return { ...state, checkIn: action.data };

    case CalendarTypes.CHECK_OUT:
      return { ...state, checkOut: action.data };

    case CalendarTypes.CHECK_HOVER:
      return { ...state, checkHover: action.data };

    case CalendarTypes.ALL_REMOVE:
      return initialState;

    default:
      return state;
  }
};

const CalendarStateContext = createContext<CalendarState | null>(null);
const CalendarDispatchContext = createContext<CalendarDispatches | null>(null);

const initialState = {
  checkIn: null,
  checkOut: null,
  checkHover: null,
};

const CalendarProvider = ({ children }: { children?: React.ReactNode }) => {
  const [calendar, dispatch] = useReducer(reducer, initialState);

  const onCheckIn = useCallback((date: Date) => {
    dispatch({ type: CalendarTypes.CHECK_IN, data: date });
  }, []);

  const onCheckOut = useCallback((date: Date) => {
    dispatch({ type: CalendarTypes.CHECK_OUT, data: date });
  }, []);

  const onCheckHover = useCallback((date: Date) => {
    dispatch({ type: CalendarTypes.CHECK_HOVER, data: date });
  }, []);

  const onCheckRemove = useCallback(() => {
    dispatch({ type: CalendarTypes.ALL_REMOVE });
  }, []);

  const dispatches = useMemo(
    () => ({
      onCheckIn,
      onCheckOut,
      onCheckHover,
      onCheckRemove,
    }),
    [onCheckIn, onCheckOut, onCheckHover, onCheckRemove],
  );

  return (
    <CalendarStateContext.Provider value={calendar}>
      <CalendarDispatchContext.Provider value={dispatches}>{children}</CalendarDispatchContext.Provider>
    </CalendarStateContext.Provider>
  );
};

export const useCalendarState = () => {
  const state = useContext(CalendarStateContext);
  if (!state) throw new Error("Cannot find CalendarProvider");
  return state;
};

export const useCalendarDispatch = () => {
  const state = useContext(CalendarDispatchContext);
  if (!state) throw new Error("Cannot find CalendarProvider");
  return state;
};

export default CalendarProvider;
