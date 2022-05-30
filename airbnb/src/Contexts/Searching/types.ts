import { Dispatch } from 'react';

export interface SearchingContextState {
  calendar: CalenderState;
  price: PriceState;
  customers: CustomerState;
}

export interface SearchContextDispatch {
  calendarDispatch: Dispatch<CalenderAction>;
  priceDispatch: Dispatch<PriceAction>;
  customersDispatch: Dispatch<CustomerAction>;
}
// TODO: 작명 직접적인 State 쓰지말것 State는 상태에만 작명 사용하자
export interface CalenderState {
  startDate: number;
  endDate: number;
}

export interface PriceState {
  minimumPrice: number;
  maximuPrice: number;
  guesthouseNumber: number;
}

export interface CustomerState {
  adultCount: number;
  kidsCount: number;
  smallChildCount: number;
}

// TODO: type을 interface로 바꾸려면?
export type CalenderAction =
  | { type: 'SET_START_DATE'; date: number }
  | { type: 'SET_END_DATE'; date: number }
  | { type: 'RESET' };

export type PriceAction =
  | { type: 'SET_MINIMUM_PRICE'; income: number }
  | { type: 'SET_MAXIMUM_PRICE'; income: number }
  | { type: 'RESET' };

export type CustomerAction =
  | { type: 'SET_ADULT_COUNT'; income: number }
  | { type: 'SET_KIDS_COUNT'; income: number }
  | { type: 'SET_SMALL_KIDS_COUNT'; income: number }
  | { type: 'RESET' };
