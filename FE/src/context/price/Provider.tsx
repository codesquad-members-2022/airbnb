import React, { useEffect, useState } from 'react';

import { API } from '@constants';
import useAxios from '@lib/hooks/useAxios';

export interface PriceContextTypes {
  minPrice: number;
  setMinPrice: React.Dispatch<React.SetStateAction<number>>;
  maxPrice: number;
  setMaxPrice: React.Dispatch<React.SetStateAction<number>>;
  avgPrice: number;
  priceRange: number[];
}

interface PriceProviderTypes {
  children: JSX.Element;
}

interface CategorizedPriceTypes {
  tag: number;
  endOfRange: number;
  count: number;
}

interface PriceInfoTypes {
  minPricePerNight: number;
  maxPricePerNight: number;
  avgPricePerNight: number;
  countOfCategorizedPricePerNight: CategorizedPriceTypes[];
}

export const PriceContext = React.createContext<PriceContextTypes | null>(null);

export const PriceProvider = ({ children }: PriceProviderTypes) => {
  const [minPrice, setMinPrice] = useState(0);
  const [maxPrice, setMaxPrice] = useState(0);
  const [avgPrice, setAvgPrice] = useState(0);
  const [priceRange, setPriceRange] = useState<number[]>([]);

  const [{ response }] = useAxios<PriceInfoTypes>({
    method: 'get',
    url: API.PRICE_INFO,
    config: {
      params: {
        checkIn: '2022-06-07',
        checkOut: '2022-06-08',
      },
    },
  });

  useEffect(() => {
    if (response) {
      const {
        minPricePerNight,
        maxPricePerNight,
        avgPricePerNight,
        countOfCategorizedPricePerNight,
      } = response;

      const priceRange = countOfCategorizedPricePerNight.map((item) => item.count);

      setMinPrice(minPricePerNight);
      setMaxPrice(maxPricePerNight);
      setAvgPrice(avgPricePerNight);
      setPriceRange(priceRange);
    }
  }, [response]);

  const value = { minPrice, setMinPrice, maxPrice, setMaxPrice, avgPrice, priceRange };

  return <PriceContext.Provider value={value}>{children}</PriceContext.Provider>;
};
