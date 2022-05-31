import { CalendarContext, DispatchCalendarContext } from "Context/CalendarProvider";
import { useContext, useReducer } from "react";

interface ActionType {
  type: string;
  year?: number;
  month?: number;
  day?: number;
}

const initialState = {
  isCalendarOpen: false,
  checkIn: {
    year: 0,
    month: 0,
    day: 0,
  },
  checkOut: {
    year: 0,
    month: 0,
    day: 0,
  },
};

const reducer = (state: object, action: ActionType) => {
  switch (action.type) {
    case "OPEN":
      return {
        ...state,
        isCalendarOpen: true,
      };
    case "CLOSE":
      return {
        ...state,
        isCalendarOpen: false,
      };
    case "SET_CHECK_IN":
      return {
        ...state,
        checkIn: {
          year: action.year,
          month: action.month,
          day: action.day,
        },
      };
    case "SET_CHECK_OUT":
      return {
        ...state,
        checkOut: {
          year: action.year,
          month: action.month,
          day: action.day,
        },
      };
    case "RESET":
      return {
        ...initialState,
        isCalendarOpen: true,
      };
    default:
      return state;
  }
};

export const useCalendarReducer = () => useReducer(reducer, initialState);

export const useCalendar = () => [useContext(CalendarContext), useContext(DispatchCalendarContext)];
