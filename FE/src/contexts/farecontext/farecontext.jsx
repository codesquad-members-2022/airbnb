import React, { createContext, useMemo, useReducer } from 'react';

export const FareContext = createContext();

const valueReducer = (state, action) => {
  switch (action.type) {
    case 'left':
      return {
        ...state,
        left: action.value,
        placeHolder: `${action.value}~${state.right}`,
        isSet: true,
      };
    case 'right':
      return {
        ...state,
        right: action.value,
        placeHolder: `${state.left}~${action.value}`,
        isSet: true,
      };
    case 'init':
      return {
        left: 30000,
        right: 70000,
        placeHolder: '금액대 설정',
        isSet: false,
      };
    default:
      return state;
  }
};

export function FareProvider({ children }) {
  const [Slidevalue, dispatch] = useReducer(valueReducer, {
    left: 30000,
    right: 70000,
    placeHolder: '금액대 설정',
    isSet: false,
  });
  const Value = useMemo(
    () => ({
      Slidevalue,
      dispatch,
    }),
    [Slidevalue],
  );
  return <FareContext.Provider value={Value}>{children}</FareContext.Provider>;
}
