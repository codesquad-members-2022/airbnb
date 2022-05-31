import { useReducer } from "react";

interface StateType {
  isHeadCountOpen: boolean;
  adult: number;
  child: number;
  baby: number;
}

interface ActionType {
  type: string;
  target?: "adult" | "child" | "baby";
}

const initialState: StateType = {
  isHeadCountOpen: false,
  adult: 0,
  child: 0,
  baby: 0,
};

const reducer = (state: StateType, action: ActionType) => {
  switch (action.type) {
    case "OPEN":
      return {
        ...state,
        isHeadCountOpen: true,
      };
    case "CLOSE":
      return {
        ...state,
        isHeadCountOpen: false,
      };
    case "PLUS":
      return {
        ...state,
        [action.target || "adult"]: action.target && state[action.target] + 1,
      };
    case "MINUS":
      return {
        ...state,
        [action.target || "adult"]: action.target && state[action.target] - 1,
      };
    case "RESET":
      return {
        ...initialState,
        isHeadCountOpen: true,
      };
    default:
      return state;
  }
};

export const useHeadCountReducer = () => useReducer(reducer, initialState);
