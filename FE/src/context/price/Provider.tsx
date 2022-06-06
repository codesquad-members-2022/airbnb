import React, { useState } from 'react';

export interface PriceContextTypes {
  minPrice: number;
  setMinPrice: React.Dispatch<React.SetStateAction<number>>;
  maxPrice: number;
  setMaxPrice: React.Dispatch<React.SetStateAction<number>>;
}

interface PriceProviderTypes {
  children: JSX.Element;
}

export const PriceContext = React.createContext<PriceContextTypes>({} as PriceContextTypes);

export const PriceProvider = ({ children }: PriceProviderTypes) => {
  const [minPrice, setMinPrice] = useState(0);
  const [maxPrice, setMaxPrice] = useState(0);

  const value = { minPrice, setMinPrice, maxPrice, setMaxPrice };

  return <PriceContext.Provider value={value}>{children}</PriceContext.Provider>;
};
