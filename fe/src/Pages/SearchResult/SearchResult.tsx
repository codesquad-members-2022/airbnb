import Gnb from "Components/Gnb/Gnb";
import MiniSearchBar from "Components/SearchBar/MiniSearchBar";
import { useOutsideClick } from "Hook/useOutsideClick";
import SearchView from "Pages/Common/SearchView";
import { useRef, useState } from "react";
import {
  calendarStyle,
  headCountStyle,
  searchBarStyle,
  miniSearchBarStyle,
  SearchResultHeaderArea,
  SearchResultHeader,
  SearchResultHeaderContainer,
  SearchResultArea,
  Tourist,
  Map,
} from "./SearchResult.styled";

export default function SearchResult() {
  const [isMiniSearchBar, setIsMiniSearchBar] = useState(false);
  const searchRef = useRef([]);

  const handleClick = () => {
    setIsMiniSearchBar(true);
  };

  const handleOutsideClick = () => {
    setIsMiniSearchBar(false);
  };

  useOutsideClick(searchRef, handleOutsideClick);

  return (
    <>
      <SearchResultHeaderContainer isMini={isMiniSearchBar}>
        <SearchResultHeaderArea>
          <SearchResultHeader>
            {!isMiniSearchBar ? (
              <Gnb
                contents={<MiniSearchBar searchBarStyle={miniSearchBarStyle} handleClick={handleClick} />}
              />
            ) : (
              <>
                <Gnb />
                <SearchView
                  searchRef={searchRef}
                  searchBarStyle={searchBarStyle}
                  calendarStyle={calendarStyle}
                  headCountStyle={headCountStyle}
                />
              </>
            )}
          </SearchResultHeader>
        </SearchResultHeaderArea>
      </SearchResultHeaderContainer>
      <SearchResultArea flex={true}>
        <Tourist></Tourist>
        <Map></Map>
      </SearchResultArea>
    </>
  );
}
