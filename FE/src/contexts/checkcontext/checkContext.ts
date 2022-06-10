import { createContext } from 'react';
import { ICheckContext } from 'contexts/checkcontext/checkContext.types';

export const CheckContext = createContext<ICheckContext>({
  checkIn: '',
  checkOut: '',
  mouseOverCheckOut: '',
  setCheckIn: () => {
    return '';
  },
  setCheckOut: () => {
    return '';
  },
  setMouseOverCheckOut: () => {
    return '';
  },
});
