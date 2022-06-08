import { useState, useMemo } from "react";

import { SearchBarStateContext } from "./contexts";

const SearchBarContext = ({ children }: { children: React.ReactNode }) => {
  const [isSearchBarFullSize, setIsSearchBarFullSize] = useState(true);

  return (
    <SearchBarStateContext.Provider
      value={useMemo(
        () => ({ isSearchBarFullSize, setIsSearchBarFullSize }),
        [isSearchBarFullSize, setIsSearchBarFullSize]
      )}
    >
      {children}
    </SearchBarStateContext.Provider>
  );
};

export default SearchBarContext;
