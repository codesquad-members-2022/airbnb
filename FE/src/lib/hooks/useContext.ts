import { useContext } from 'react';

import { PriceContext, PriceContextTypes } from '@context/price/Provider';

export const usePriceState = () => {
  const priceState = useContext<PriceContextTypes | null>(PriceContext);
  if (!priceState) throw new Error('PriceProvider is not found');
  return priceState;
}
