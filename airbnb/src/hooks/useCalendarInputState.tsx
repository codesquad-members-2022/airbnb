import { useContext } from 'react';
import { CalendarContext } from 'contexts/CalendarProvider';

export function useCalendarInputState() {
  const inputState = useContext(CalendarContext);
  if (!inputState) throw new Error();

  return {
    checkIn: inputState.checkIn,
    checkOut: inputState.checkOut,
  };
}
