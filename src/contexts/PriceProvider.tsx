import React, { createContext, useContext, useState } from "react";

const PriceStateContext = createContext<PriceContextProps | null>(null);
const PriceDispatchContext = createContext<PriceContextProps | null>(null);

const PriceProvider = ({ children }: { children?: React.ReactNode }) => {
  const [priceRange, setPriceRange] = useState<PriceTypes | null>(null);

  return (
    <PriceStateContext.Provider value={{ priceRange }}>
      <PriceDispatchContext.Provider value={{ setPriceRange }}>{children}</PriceDispatchContext.Provider>
    </PriceStateContext.Provider>
  );
};

export type PriceTypes = {
  minPrice: number;
  maxPrice: number;
};

export type PriceContextProps = {
  priceRange?: null | PriceTypes;
  setPriceRange?: (priceRange: PriceTypes) => void | PriceTypes;
};

export const usePriceState = () => {
  const state = useContext(PriceStateContext);
  if (!state) throw new Error("Cannot find PriceProvider");
  return state;
};

export const usePriceDispatch = () => {
  const state = useContext(PriceDispatchContext);
  if (!state) throw new Error("Cannot find PriceProvider");
  return state;
};

export default PriceProvider;
