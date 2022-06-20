import { Dispatch, SetStateAction, useContext } from 'react';

import { CalendarContext, CalendarContextTypes } from '@context/calendar/Provider';
import { PersonnelContext, PersonnelContextTypes } from '@context/personnel/Provider';
import { PriceContext, PriceContextTypes } from '@context/price/Provider';

export type PersonnelStateWithType = [number, Dispatch<SetStateAction<number>>];

const PERSONNEL_TYPE = {
  ADULT: '성인',
  CHILD: '어린이',
  BABY: '유아',
};

export const usePersonnelState = (
  type?: string,
): PersonnelStateWithType | PersonnelContextTypes => {
  const personnelState = useContext<PersonnelContextTypes | null>(PersonnelContext);
  if (!personnelState) throw new Error('PersonnelProvider is not found');

  const {
    numberOfAdults,
    setNumberOfAdults,
    numberOfChildren,
    setNumberOfChildren,
    numberOfBabies,
    setNumberOfBabies,
  } = personnelState;

  switch (type) {
    case PERSONNEL_TYPE.ADULT:
      return [numberOfAdults, setNumberOfAdults];
    case PERSONNEL_TYPE.CHILD:
      return [numberOfChildren, setNumberOfChildren];
    case PERSONNEL_TYPE.BABY:
      return [numberOfBabies, setNumberOfBabies];
    default:
      return personnelState;
  }
};

export const usePriceState = () => {
  const priceState = useContext<PriceContextTypes | null>(PriceContext);
  if (!priceState) throw new Error('PriceProvider is not found');
  return priceState;
};

export const useCalendarState = () => {
  const calendarState = useContext<CalendarContextTypes | null>(CalendarContext);
  if (!calendarState) throw new Error('CalendarProvider is not found');
  return calendarState;
};
