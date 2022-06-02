import React, { useReducer } from 'react';
import {
  calenderReducer,
  priceReducer,
  customersReducer,
  calendarInitialState,
  priceInitialState,
  customersInitialState,
} from './reducer';
import * as TYPE from './types';

export const SearchingContext =
  React.createContext<TYPE.SearchingContextState | null>({
    calendar: calendarInitialState,
    price: priceInitialState,
    customers: customersInitialState,
  });

// TODO: Dispatch 함수 해결해야할것
export const SearchingDispatchContext =
  React.createContext<TYPE.SearchContextDispatch | null>(null);

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

  const getStartDateAction = (startDate: Date) => {
    const action: TYPE.CalenderAction = {
      type: 'SET_START_DATE',
      date: startDate,
    };
    return action;
  };

  const getEndDateAction = (endDate: Date) => {
    const action: TYPE.CalenderAction = {
      type: 'SET_END_DATE',
      date: endDate,
    };

    return action;
  };

  const [price, priceDispatch] = useReducer(priceReducer, priceInitialState);

  const [customers, customersDispatch] = useReducer(
    customersReducer,
    customersInitialState,
  );

  return (
    <SearchingContext.Provider value={{ calendar, price, customers }}>
      <SearchingDispatchContext.Provider
        value={{
          calendarDispatch,
          priceDispatch,
          customersDispatch,
          getStartDateAction,
          getEndDateAction,
        }}
      >
        {children}
      </SearchingDispatchContext.Provider>
    </SearchingContext.Provider>
  );
}
