import React, { createContext, useEffect, useMemo, useReducer } from 'react';
import reducer from 'components/calender/context/reducer';
import { ActionType, initFilter, setCheckIn, setCheckOut } from 'components/calender/context/action';

export interface FilterType {
  start?: Date;
  end?: Date;
  filtered?: {
    [year: number]: {
      [month: number]: Set<number>;
    };
  };
}

interface IDateState {
  period: {
    checkIn: Date;
    checkOut: Date;
  } | null;
  filter: FilterType | null;
}

interface IDateContext {
  state: IDateState;
  dispatch: React.Dispatch<{
    type: ActionType;
    payload: any;
  }> | null;
  setCheckedDate: ((checkIn?: Date, checkOut?: Date) => void) | null;
}

interface IDateProvider {
  period: {
    checkIn?: Date;
    checkOut?: Date;
  } | null;
  setCheckedDate: (checkIn?: Date, checkOut?: Date) => void;
  children: React.ReactNode;
  filter: FilterType;
}

export const initState = { state: { period: null, filter: null }, dispatch: null, setCheckedDate: null };
const DateContext = createContext<IDateContext>(initState);

const DateProvider = ({ period, setCheckedDate, filter, children }: IDateProvider) => {
  const [state, dateDispatch] = useReducer(reducer, initState);
  useEffect(() => {
    setCheckIn(dateDispatch, period?.checkIn);
    setCheckOut(dateDispatch, period?.checkOut);
    initFilter(dateDispatch, filter);
  }, []);

  const providerValue = useMemo<IDateContext>(
    () => ({ ...state, dispatch: dateDispatch, setCheckedDate }),
    [state, dateDispatch, setCheckedDate],
  );

  return <DateContext.Provider value={providerValue}>{children}</DateContext.Provider>;
};

export { DateContext, DateProvider };
