import React, { useReducer } from 'react';

const SearchingContext = React.createContext(null);
const setSerachingContext = React.createContext(null);

export function SearchingProvider({ children }: { childeren: JSX.Element }) {
  // TODO: 커스텀훅을 통한 상태 리팩토링
  const [calendar, calendarDispatch] = useReducer(
    calendarReducer,
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
