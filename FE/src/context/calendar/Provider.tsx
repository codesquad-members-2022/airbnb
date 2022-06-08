import React, { useState } from 'react';

export interface CalendarContextTypes {
  checkIn: string;
  setCheckIn: React.Dispatch<React.SetStateAction<string>>;
  checkOut: string;
  setCheckOut: React.Dispatch<React.SetStateAction<string>>;
}

interface CalendarProviderTypes {
  children: JSX.Element;
}

export const CalendarContext = React.createContext<CalendarContextTypes | null>(null);

export const CalendarProvider = ({ children }: CalendarProviderTypes) => {
  const [checkIn, setCheckIn] = useState('');
  const [checkOut, setCheckOut] = useState('');

  const value = { checkIn, setCheckIn, checkOut, setCheckOut };

  return <CalendarContext.Provider value={value}>{children}</CalendarContext.Provider>;
};
