import { usePriceModalReducer } from "Hook/usePriceModal";
import { createContext, useContext } from "react";

export const PriceModalContext = createContext({});
export const DispatchPriceModalContext = createContext<any>(undefined);

export default function PriceModalProvider({ children }: any) {
  const [state, dispatch] = usePriceModalReducer();

  return (
    <DispatchPriceModalContext.Provider value={dispatch}>
      <PriceModalContext.Provider value={state}>{children}</PriceModalContext.Provider>
    </DispatchPriceModalContext.Provider>
  );
}

export const usePriceModal = () => [useContext(PriceModalContext), useContext(DispatchPriceModalContext)];
