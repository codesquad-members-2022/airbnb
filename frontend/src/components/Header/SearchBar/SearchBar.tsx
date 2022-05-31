import SearchBarContainer from "./SearchBar.style";
import SelectItemArea from "./SelectItemArea/SelectItemArea";

const SearchBar = (): JSX.Element => {
  return (
    <SearchBarContainer currentPage="index">
      <SelectItemArea />
    </SearchBarContainer>
  );
};

export default SearchBar;
