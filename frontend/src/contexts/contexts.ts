import { createContext } from "react";

export const PriceRangeContext = createContext<PriceRangeContextType | null>(
  null
);

export const SearchBarStateContext =
  createContext<SearchBarStateContextType | null>(null);

interface RangeType {
  min: number;
  max: number;
}

export interface PriceRangeType {
  price: RangeType;
  percentage: RangeType;
}

interface PriceRangeContextType {
  initialPrice: RangeType;
  priceRange: PriceRangeType;
  setPriceRange: {
    setPrice: React.Dispatch<React.SetStateAction<RangeType>>;
    setPercentage: React.Dispatch<React.SetStateAction<RangeType>>;
  };
}

interface SearchBarStateContextType {
  isSearchBarFullSize: boolean;
  setIsSearchBarFullSize: React.Dispatch<React.SetStateAction<boolean>>;
}
