import { MAX_PRICE_RANGE, MIN_PRICE_RANGE } from "Helpers/constant";
import { useReducer } from "react";

interface StateType {
  isPriceModalOpen: boolean;
  minPrice: number;
  maxPrice: number;
}

interface ActionType {
  type: string;
  minPrice?: number;
  maxPrice?: number;
}

const initialState: StateType = {
  isPriceModalOpen: false,
  minPrice: MIN_PRICE_RANGE,
  maxPrice: MAX_PRICE_RANGE,
};

const reducer = (state: StateType, action: ActionType) => {
  switch (action.type) {
    case "OPEN":
      return {
        ...state,
        isPriceModalOpen: true,
      };
    case "CLOSE":
      return {
        ...state,
        isPriceModalOpen: false,
      };
    case "SET_MIN_PRICE":
      return {
        ...state,
        minPrice: action.minPrice || initialState.minPrice,
      };
    case "SET_MAX_PRICE":
      return {
        ...state,
        maxPrice: action.maxPrice || initialState.maxPrice,
      };
    case "RESET":
      return {
        ...initialState,
        isPriceModalOpen: true,
      };
    default:
      return state;
  }
};

export const usePriceModalReducer = () => useReducer(reducer, initialState);
