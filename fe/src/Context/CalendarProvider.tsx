import { useCalendarReducer } from "Hook/useCalendar";
import { createContext } from "react";

// interface actionType {
//   type: "OPEN" | "CLOSE" | "SET_CHECK_IN" | "SET_CHECK_OUT";
//   year: number;
//   month?: number;
//   day?: number;
// }
// Dispatch 타입, children 타입 보류중
// Children : React.ReactNode 왜 안될까?

export const CalendarContext = createContext({});
export const DispatchCalendarContext = createContext<any>(undefined);

export default function CalendarProvider({ children }: any) {
  const [state, dispatch] = useCalendarReducer();

  return (
    <DispatchCalendarContext.Provider value={dispatch}>
      <CalendarContext.Provider value={state}>{children}</CalendarContext.Provider>
    </DispatchCalendarContext.Provider>
  );
}
