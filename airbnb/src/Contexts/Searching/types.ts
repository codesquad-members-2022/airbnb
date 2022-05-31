import { Dispatch } from 'react';

// TODO:타입 네이밍 컨벤션 결정할것
// TODO: 작명 직접적인 State 쓰지말것 State는 상태에만 작명 사용하자

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

export interface CalenderState {
  startDate: Date | null;
  endDate: Date | null;
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
  | { type: 'SET_START_DATE'; date: Date }
  | { type: 'SET_END_DATE'; date: Date }
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
