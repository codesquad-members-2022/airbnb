import { useHeadCountReducer } from "Hook/useHeadCount";
import { createContext, useContext } from "react";

export const HeadCountContext = createContext({});
export const DispatchHeadCountContext = createContext<any>(undefined);

export default function HeadCountProvider({ children }: any) {
  const [state, dispatch] = useHeadCountReducer();

  return (
    <DispatchHeadCountContext.Provider value={dispatch}>
      <HeadCountContext.Provider value={state}>{children}</HeadCountContext.Provider>
    </DispatchHeadCountContext.Provider>
  );
}

export const useHeadCount = () => [useContext(HeadCountContext), useContext(DispatchHeadCountContext)];
