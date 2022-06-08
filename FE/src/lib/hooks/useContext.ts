import { useContext } from 'react';

import { CalendarContext, CalendarContextTypes } from '@context/calendar/Provider';
import { PriceContext, PriceContextTypes } from '@context/price/Provider';

export const usePriceState = () => {
  const priceState = useContext<PriceContextTypes | null>(PriceContext);
  if (!priceState) throw new Error('PriceProvider is not found');
  return priceState;
};

export const useCalendarState = () => {
  const calendarState = useContext<CalendarContextTypes | null>(CalendarContext);
  if (!calendarState) throw new Error(' CalendarProvider is not found');
  return calendarState;
};
