import React from 'react';
import * as TYPE from './types';

export const ScheduleContext = React.createContext<TYPE.ScheduleValueProps>({
  startDate: null,
  endDate: null,
  setDate: () => {},
});

export function ScheduleProvider({
  startDate,
  endDate,
  setStartDate,
  setEndDate,
  children,
}: TYPE.ScheduleProviderProps) {
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
