import * as TYPE from './types';

const ACCOMODATION_DATAS = [
  150000, 30000, 100000, 41240, 55000, 200000, 250000, 140000, 40000, 50000,
  65200, 53220, 242300, 131000, 45630, 143400, 232400, 280000, 41250, 64500,
  53453, 123100, 67457, 234230, 23233, 53200, 70000, 90000, 10000, 20000,
  100000, 200000, 90000, 130000, 190000, 200000, 40000, 13000, 63460, 30000,
  242000, 30000, 20000, 50000, 30000, 60000, 70000, 10000, 120000, 60000,
  230000, 100000, 190000, 200000, 400000, 300000, 320000,
];

export const calendarInitialState: TYPE.CalenderState = {
  startDate: null,
  endDate: null,
  displaySchedule: false,
};

export const priceInitialState: TYPE.PriceState = {
  minimumPrice: Math.min(...ACCOMODATION_DATAS),
  maximuPrice: Math.max(...ACCOMODATION_DATAS),
  guesthouseNumber: 0,
};

export const customersInitialState: TYPE.CustomerState = {
  adultCount: 0,
  childrenCount: 0,
  infantsCount: 0,
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

    case 'SET_DISPLAY':
      return { ...state, displaySchedule: !state.displaySchedule };

    case 'RESET':
      return {
        ...calendarInitialState,
        displaySchedule: state.displaySchedule,
      };
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
    case 'SET_CHILDREN_COUNT':
      return {
        ...state,
        childrenCount: action.income,
        adultCount:
          state.childrenCount === 0 && state.adultCount === 0
            ? 1
            : state.adultCount,
      };
    case 'SET_INFANTS_COUNT':
      return {
        ...state,
        infantsCount: action.income,
        adultCount:
          state.infantsCount === 0 && state.adultCount === 0
            ? 1
            : state.adultCount,
      };
    case 'RESET':
      return customersInitialState;
    default:
      throw new Error(`잘못된 액션입니다. actionType: ${action}`);
  }
};
