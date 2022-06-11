import { useContext } from 'react';

import { PriceDispatchContext, PriceRange, PriceStateContext } from 'contexts/PriceContext';

export function usePriceState() {
  const state = useContext(PriceStateContext);
  if (!state) throw new Error();

  return {
    priceRange: state.priceRange,
    priceRangeText: state.priceRangeText,
  };
}

export function usePriceDispatch() {
  const dispatch = useContext(PriceDispatchContext);
  if (!dispatch) throw new Error();

  const setRange = (range: PriceRange) => {
    dispatch({
      type: 'SET_RANGE',
      payload: range,
    });
  };

  const setPriceText = (text: string) => {
    dispatch({
      type: 'SET_PRICE_TEXT',
      payload: text,
    });
  };

  const resetRange = () => {
    dispatch({
      type: 'RESET',
      payload: null,
    });
  };

  return { setRange, setPriceText, resetRange };
}
