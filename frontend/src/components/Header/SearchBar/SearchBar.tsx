import SearchBarContexts from "./Context/SearchBarContexts";
import SearchBarContainer from "./SearchBar.style";
import SelectItemArea from "./SelectItemArea/SelectItemArea";

const SearchBar = (): JSX.Element => {
  return (
    <SearchBarContainer currentPage="index">
      <SearchBarContexts>
        <SelectItemArea />
      </SearchBarContexts>
    </SearchBarContainer>
  );
};

export default SearchBar;
