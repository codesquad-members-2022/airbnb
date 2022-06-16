import React, { useState } from 'react';
import { PriceStateContext, PriceDispatchContext } from './PriceContext';
import { PriceStateType } from './priceTypes';
import { getSearchParams } from '../../util/urlUtil';

const makeCurrPagePriceState = () => {
  const minPriceString = getSearchParams('minPrice');
  const maxPriceString = getSearchParams('maxPrice');
  const priceState: PriceStateType = {
    minPrice: Number(minPriceString) || null,
    maxPrice: Number(maxPriceString) || null,
  };
  return priceState;
};

const PriceProvider = ({ children }: { children: React.ReactNode }) => {
  const currPageInitialPriceState = makeCurrPagePriceState();
  const [priceState, setPriceState] = useState(currPageInitialPriceState);

  return (
    <PriceStateContext.Provider value={priceState}>
      <PriceDispatchContext.Provider value={setPriceState}>
        {children}
      </PriceDispatchContext.Provider>
    </PriceStateContext.Provider>
  );
};

export default PriceProvider;
