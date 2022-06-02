import Gnb from "Components/Gnb/Gnb";
import SearchView from "Pages/Common/SearchView";
import {
  calendarStyle,
  headCountStyle,
  searchBarStyle,
  SearchResultContainer,
  SearchResultHeader,
} from "./SearchResult.styled";

export default function SearchResult() {
  return (
    <SearchResultContainer className="?">
      <SearchResultHeader>
        <Gnb />
        <SearchView
          searchBarStyle={searchBarStyle}
          calendarStyle={calendarStyle}
          headCountStyle={headCountStyle}
        />
      </SearchResultHeader>
    </SearchResultContainer>
  );
}
