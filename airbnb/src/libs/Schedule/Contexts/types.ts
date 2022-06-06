import { ReactNode } from 'react';

export interface ScheduleValueProps {
  startDate: Date | null;
  endDate: Date | null;
  setDate(date: Date): void;
}

export interface ScheduleProps {
  startDate: Date | null;
  endDate: Date | null;
  setStartDate(date: Date): void;
  setEndDate(date: null | Date): void;
}

export interface ScheduleProviderProps extends ScheduleProps {
  children: ReactNode;
}
