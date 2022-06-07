import { createContext, useContext, useMemo, useReducer, useCallback } from "react";

import { SearchModalActionType, SearchModalDispatches, SearchModalState, SearchModalType } from "_types/searchModal";

const reducer = (state: SearchModalState, action: SearchModalActionType): SearchModalState => {
  switch (action.type) {
    case "PERIOD":
      return { openedModal: "PERIOD" };

    case "PRICE":
      return { openedModal: "PRICE" };

    case "PERSONNEL":
      // TODO
      return { openedModal: "PERSONNEL" };

    case "OFF":
      return { openedModal: null };

    default:
      return state;
  }
};

const SearchModalStateContext = createContext<SearchModalState | null>(null);
const SearchModalDispatchContext = createContext<SearchModalDispatches | null>(null);

const initialState = {
  openedModal: null,
};

const SearchModalProvider = ({ children }: { children?: React.ReactNode }) => {
  const [searchModal, dispatch] = useReducer(reducer, initialState);

  const onOpenSearchModal = useCallback((modalParam: SearchModalType) => {
    dispatch({ type: modalParam });
  }, []);

  const onCloseSearchModal = useCallback(() => {
    dispatch({ type: "OFF" });
  }, []);

  const dispatches = useMemo(
    () => ({
      onOpenSearchModal,
      onCloseSearchModal,
    }),
    [onCloseSearchModal, onOpenSearchModal],
  );

  return (
    <SearchModalStateContext.Provider value={searchModal}>
      <SearchModalDispatchContext.Provider value={dispatches}>{children}</SearchModalDispatchContext.Provider>
    </SearchModalStateContext.Provider>
  );
};

export const useSearchModalState = () => {
  const state = useContext(SearchModalStateContext);
  if (!state) throw new Error("Cannot find SearchModalProvider");
  return state;
};

export const useSearchModalDispatch = () => {
  const state = useContext(SearchModalDispatchContext);
  if (!state) throw new Error("Cannot find SearchModalProvider");
  return state;
};

export default SearchModalProvider;
