import { createContext, useState } from 'react';
import { MIN_PRICE, MAX_PRICE } from '@/constants/priceText';
import { convertNumToCurrency } from '@/utils/utils';

const PriceContext = createContext({});

function PriceProvider({ children }) {
  const [min, setMin] = useState(MIN_PRICE);
  const [max, setMax] = useState(MAX_PRICE);

  const gap = MIN_PRICE * 5;

  const calcLimit = (num, gap) => {
    return Number(num) + Number(gap);
  };

  const updateMin = ({ target }) => {
    if (Number(target.value) >= calcLimit(max, -1 * gap)) return;
    setMin(target.value);
  };

  const updateMax = ({ target }) => {
    if (Number(target.value) <= calcLimit(min, gap)) return;
    setMax(target.value);
  };

  const resetPrice = () => {
    setMin(MIN_PRICE);
    setMax(MAX_PRICE);
  };

  const minToCurrency = convertNumToCurrency(min);
  const maxToCurrency = convertNumToCurrency(max);

  const priceRange = `₩${minToCurrency} - ₩${maxToCurrency} ${max === MAX_PRICE ? '+' : ''}`;
  const priceAverage = 19283;

  const isInitialState = min === MIN_PRICE && max === MAX_PRICE;
  const priceValue = `${isInitialState ? '' : `${minToCurrency} - ${maxToCurrency}`}`;

  return (
    <PriceContext.Provider value={{ min, max, updateMin, updateMax, resetPrice, priceRange, priceAverage, priceValue }}>
      {children}
    </PriceContext.Provider>
  );
}

export { PriceContext, PriceProvider };
