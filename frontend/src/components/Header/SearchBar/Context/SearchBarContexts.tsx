import { createContext, useMemo, useState } from "react";

// 임시데이터 시작
export const initialPrice = {
  minPrice: 10000,
  maxPrice: 10000000,
};

// 임시데이터 끝

export const PriceSelectContext = createContext<PriceSelectContextType>({
  accomodationPrice: {
    minPrice: initialPrice.minPrice,
    maxPrice: initialPrice.maxPrice,
  },
  setAccomodationPrice: null,
});

const SearchBarContexts = ({ children }: { children: React.ReactNode }) => {
  const [accomodationPrice, setAccomodationPrice] = useState({
    minPrice: initialPrice.minPrice,
    maxPrice: initialPrice.maxPrice,
  });

  const accomodationUseState = useMemo(
    () => ({ accomodationPrice, setAccomodationPrice }),
    [accomodationPrice, setAccomodationPrice]
  );

  return (
    <PriceSelectContext.Provider value={accomodationUseState}>
      {children}
    </PriceSelectContext.Provider>
  );
};

export default SearchBarContexts;

interface AccomodationPriceType {
  minPrice: number;
  maxPrice: number;
}

interface PriceSelectContextType {
  accomodationPrice: AccomodationPriceType;
  setAccomodationPrice: React.Dispatch<
    React.SetStateAction<AccomodationPriceType>
  > | null;
}
