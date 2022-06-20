import { useState, Dispatch, SetStateAction, createContext } from 'react';

export interface CalendarContextTypes {
  checkIn: string;
  setCheckIn: Dispatch<SetStateAction<string>>;
  checkOut: string;
  setCheckOut: Dispatch<SetStateAction<string>>;
}

interface CalendarProviderTypes {
  children: JSX.Element;
}

export const CalendarContext = createContext<CalendarContextTypes | null>(null);

export const CalendarProvider = ({ children }: CalendarProviderTypes) => {
  const [checkIn, setCheckIn] = useState('');
  const [checkOut, setCheckOut] = useState('');

  const value = { checkIn, setCheckIn, checkOut, setCheckOut };

  return <CalendarContext.Provider value={value}>{children}</CalendarContext.Provider>;
};
