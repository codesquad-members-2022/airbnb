import { useContext } from "react";

import { SearchBarStateContext } from "contexts/contexts";
import RouterContext from "router/Contexts";

import SearchBarContainer from "./SearchBar.style";
import SelectItemArea from "./SelectItemArea/SelectItemArea";

const SearchBar = (): JSX.Element => {
  const { isSearchBarFullSize } = { ...useContext(SearchBarStateContext) };
  const { page } = { ...useContext(RouterContext) };

  return (
    <SearchBarContainer
      isSearchBarFullSize={isSearchBarFullSize || page === "index"}
    >
      <SelectItemArea />
    </SearchBarContainer>
  );
};

export default SearchBar;
