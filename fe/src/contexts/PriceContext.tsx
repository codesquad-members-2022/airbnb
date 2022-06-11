import { createContext, Dispatch, ReactNode, useReducer } from 'react';

import { toLocalString } from 'utils/helper';

export type PriceRange = {
  min: number;
  max: number;
};

type State = {
  priceRange: PriceRange;
  priceRangeText: string;
};

type Action =
  | { type: 'SET_RANGE'; payload: { [key: string]: number } }
  | { type: 'SET_PRICE_TEXT'; payload: string }
  | { type: 'RESET'; payload: null };

type PriceDispatch = Dispatch<Action>;

const initState: State = {
  priceRange: { min: 0, max: 0 },
  priceRangeText: '금액대 설정',
};

export const PriceStateContext = createContext<State>(initState);
export const PriceDispatchContext = createContext<PriceDispatch | null>(null);

export function PriceProvider({ children }: { children: ReactNode }) {
  const [state, dispatch] = useReducer(priceReducer, initState);

  return (
    <PriceStateContext.Provider value={state}>
      <PriceDispatchContext.Provider value={dispatch}>{children}</PriceDispatchContext.Provider>
    </PriceStateContext.Provider>
  );
}

function priceReducer(state: State, action: Action): State {
  switch (action.type) {
    case 'SET_RANGE':
      return {
        ...state,
        priceRange: {
          min: action.payload.min,
          max: action.payload.max,
        },
      };
    case 'SET_PRICE_TEXT':
      return {
        ...state,
        priceRangeText: action.payload,
      };
    case 'RESET':
      return { ...initState };
    default:
      throw new Error();
  }
}
