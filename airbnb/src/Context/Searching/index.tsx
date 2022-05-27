import React, { useReducer, Dispatch } from 'react';

const calendarInitialState: CalenderState = {
  startDate: 0,
  endDate: 0,
};

const priceInitialState: PriceState = {
  minimumPrice: 0,
  maximuPrice: 0,
  guesthouseNumber: 0,
};

const customersInitialState: CustomerState = {
  adultCount: 0,
  kidsCount: 0,
  smallChildCount: 0,
};

// TODO: <SearchingContextState | null> 은 해결했는데 구조분해 할당을 못해서 다시 바꿈 해결방법 요망
export const SearchingContext =
  React.createContext<SearchingContextState | null>(null);

export const setSerachingContext =
  React.createContext<SearchContextDispatch | null>(null);

const calenderReducer = (
  state: CalenderState,
  action: CalenderAction,
): CalenderState => {
  switch (action.type) {
    case 'SET_START_DATE':
      return { ...state, startDate: action.date };

    case 'SET_END_DATE':
      return { ...state, endDate: action.date };

    case 'RESET':
      return { ...calendarInitialState };

    default:
      // TODO: action.type 에러 never type에 action.type 형식 할당 불가능 에러 해결하기
      throw new Error(`잘못된 달력 액션입니다. actionType: ${action}`);
  }
};

const priceReducer = (state: PriceState, action: PriceAction): PriceState => {
  switch (action.type) {
    case 'SET_MINIMUM_PRICE':
      return { ...state, minimumPrice: action.income };

    case 'SET_MAXIMUM_PRICE':
      return { ...state, maximuPrice: action.income };

    case 'RESET':
      return { ...priceInitialState };

    default:
      throw new Error(`잘못된 달력 액션입니다. actionType: ${action}`);
  }
};

const customersReducer = (
  state: CustomerState,
  action: CustomerAction,
): CustomerState => {
  switch (action.type) {
    case 'SET_ADULT_COUNT':
      return { ...state, adultCount: action.income };
    default:
      throw new Error(`잘못된 액션입니다. actionType: ${action}`);
  }
};
export function SearchingProvider({
  children,
}: {
  children: React.ReactNode;
}): JSX.Element {
  // TODO: 커스텀훅을 통한 상태 리팩토링
  const [calendar, calendarDispatch] = useReducer(
    calenderReducer,
    calendarInitialState,
  );

  const [price, priceDispatch] = useReducer(priceReducer, priceInitialState);

  const [customers, customersDispatch] = useReducer(
    customersReducer,
    customersInitialState,
  );

  return (
    <SearchingContext.Provider value={{ calendar, price, customers }}>
      <setSerachingContext.Provider
        value={{ calendarDispatch, priceDispatch, customersDispatch }}
      >
        {children}
      </setSerachingContext.Provider>
    </SearchingContext.Provider>
  );
}

export interface SearchingContextState {
  calendar: CalenderState;
  price: PriceState;
  customers: CustomerState;
}

interface SearchContextDispatch {
  calendarDispatch: Dispatch<CalenderAction>;
  priceDispatch: Dispatch<PriceAction>;
  customersDispatch: Dispatch<CustomerAction>;
}
// TODO: 작명 직접적인 State 쓰지말것 State는 상태에만 작명 사용하자
export interface CalenderState {
  startDate: null | number;
  endDate: null | number;
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
type CalenderAction =
  | { type: 'SET_START_DATE'; date: number }
  | { type: 'SET_END_DATE'; date: number }
  | { type: 'RESET' };

type PriceAction =
  | { type: 'SET_MINIMUM_PRICE'; income: number }
  | { type: 'SET_MAXIMUM_PRICE'; income: number }
  | { type: 'RESET' };

type CustomerAction =
  | { type: 'SET_ADULT_COUNT'; income: number }
  | { type: 'SET_KIDS_COUNT'; income: number }
  | { type: 'SET_SMALL_KIDS_COUNT'; income: number }
  | { type: 'RESET' };
