import { CalendarContext } from 'contexts/CalendarProvider';
import { useContext } from 'react';

export function useInputState() {
  const inputState = useContext(CalendarContext);
  if (!inputState) throw new Error();

  return {
    checkIn: inputState.checkIn,
    checkOut: inputState.checkOut,
  };
}
