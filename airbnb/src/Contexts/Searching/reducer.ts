import * as TYPE from './types';

export const calendarInitialState: TYPE.CalenderState = {
  startDate: new Date(),
  endDate: null,
};

export const priceInitialState: TYPE.PriceState = {
  minimumPrice: 0,
  maximuPrice: 0,
  guesthouseNumber: 0,
};

export const customersInitialState: TYPE.CustomerState = {
  adultCount: 0,
  kidsCount: 0,
  smallChildCount: 0,
};

/* eslint-disable consistent-return */
export const calenderReducer = (
  state: TYPE.CalenderState,
  action: TYPE.CalenderAction,
): TYPE.CalenderState => {
  switch (action.type) {
    case 'SET_START_DATE':
      return { ...state, startDate: action.date };

    case 'SET_END_DATE':
      return { ...state, endDate: action.date };

    case 'RESET':
      return { ...calendarInitialState };
    // no default
  }
};

export const priceReducer = (
  state: TYPE.PriceState,
  action: TYPE.PriceAction,
): TYPE.PriceState => {
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

export const customersReducer = (
  state: TYPE.CustomerState,
  action: TYPE.CustomerAction,
): TYPE.CustomerState => {
  switch (action.type) {
    case 'SET_ADULT_COUNT':
      return { ...state, adultCount: action.income };
    default:
      throw new Error(`잘못된 액션입니다. actionType: ${action}`);
  }
};
