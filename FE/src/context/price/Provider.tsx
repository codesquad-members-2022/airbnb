import { useEffect, useState, Dispatch, SetStateAction, createContext } from 'react';

import { API } from '@constants';
import useAxios from '@lib/hooks/useAxios';

export interface PriceContextTypes {
  minPrice: number;
  setMinPrice: Dispatch<SetStateAction<number>>;
  maxPrice: number;
  setMaxPrice: Dispatch<SetStateAction<number>>;
  defaultMinPrice: number;
  defaultMaxPrice: number;
  avgPrice: number;
  priceRange: number[];
}

interface PriceProviderPropsTypes {
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

export const PriceContext = createContext<PriceContextTypes | null>(null);

export const PriceProvider = ({ children }: PriceProviderPropsTypes) => {
  const [minPrice, setMinPrice] = useState(0);
  const [maxPrice, setMaxPrice] = useState(0);
  const [avgPrice, setAvgPrice] = useState(0);
  const [defaultMinPrice, setDefaultMinPrice] = useState(0);
  const [defaultMaxPrice, setDefaultMaxPrice] = useState(0);
  const [priceRange, setPriceRange] = useState<number[]>([]);

  // TODO: 체크인, 체크아웃 날짜 담아서 요청 보내기
  const [{ response }] = useAxios<PriceInfoTypes>({
    method: 'get',
    url: API.PRICE_INFO,
    config: {
      params: {
        checkIn: '2022-06-10',
        checkOut: '2022-06-11',
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
      setDefaultMinPrice(defaultMinPrice || minPricePerNight);
      setDefaultMaxPrice(defaultMaxPrice || maxPricePerNight);
    }
  }, [response]);

  const value = {
    minPrice,
    setMinPrice,
    maxPrice,
    setMaxPrice,
    defaultMinPrice,
    defaultMaxPrice,
    avgPrice,
    priceRange,
  };

  return <PriceContext.Provider {...{value}}>{children}</PriceContext.Provider>;
};
