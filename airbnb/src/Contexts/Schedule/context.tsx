import React, { ReactNode } from 'react';

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

export const ScheduleContext = React.createContext<ScheduleValueProps>({
  startDate: null,
  endDate: null,
  setDate: () => {},
});

interface ScheduleProviderProps extends ScheduleProps {
  children: ReactNode;
}

export function ScheduleProvider({
  startDate,
  endDate,
  setStartDate,
  setEndDate,
  children,
}: ScheduleProviderProps) {
  const setDate = (date: Date) => {
    if (!startDate) {
      setStartDate(date);
    } else if (date < startDate) {
      setStartDate(date);
      setEndDate(null);
    } else setEndDate(date);
  };

  const value = { startDate, endDate, setDate };
  return (
    <ScheduleContext.Provider value={value}>
      {children}
    </ScheduleContext.Provider>
  );
}
