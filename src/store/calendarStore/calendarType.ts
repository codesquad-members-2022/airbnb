import { Dispatch } from 'react';

export type DateType = Date | null;
export type CalendarStateType = {
  checkIn: DateType;
  checkOut: DateType;
  hoveredDate: DateType;
};

export type CalendarActionType = {
  type: string;
  payload: Date | null;
};

export type CalendarDispatchType = Dispatch<CalendarActionType>;
