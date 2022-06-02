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
import * as ACTION from './Action';

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
          getStartDateAction: ACTION.getStartDateAction,
          getEndDateAction: ACTION.getEndDateAction,
          getScheduleDisplayAction: ACTION.getScheduleDisplayAction,
          getResetScheduleAction: ACTION.getResetScheduleAction,
        }}
      >
        {children}
      </SearchingDispatchContext.Provider>
    </SearchingContext.Provider>
  );
}
