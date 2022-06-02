import { createContext, Dispatch, useContext, useMemo, useReducer } from "react";

type CalendarState = {
  checkIn: Date | null;
  checkOut: Date | null;
};

type CalendarActionType = "CHECK_IN" | "CHECK_OUT";

const reducer = (state: CalendarState, action: { type: CalendarActionType }) => {
  switch (action.type) {
    case "CHECK_IN":
      return state;

    default:
      return state;
  }
};

const initialState = {
  checkIn: null,
  checkOut: null,
};

const CalendarStateContext = createContext<CalendarState | null>(null);
const CalendarDispatchContext = createContext<Dispatch<CalendarActionType> | null>(null);

const CalendarProvider = ({ children }: { children?: React.ReactNode }) => {
  const [calendarFilter, dispatch] = useReducer(reducer, initialState);

  const dispatches = useMemo(() => {
    return null;
  }, []);

  return (
    <CalendarStateContext.Provider value={calendarFilter}>
      <CalendarDispatchContext.Provider value={dispatches}>{children}</CalendarDispatchContext.Provider>
    </CalendarStateContext.Provider>
  );
};

export const useCalendarState = () => {
  const state = useContext(CalendarStateContext);
  if (!state) throw new Error("Cannot find CalendarProvider"); //
  return state;
};

export const useCalendarDispatch = () => {
  const state = useContext(CalendarDispatchContext);
  if (!state) throw new Error("Cannot find CalendarProvider"); //
  return state;
};

export default CalendarProvider;
