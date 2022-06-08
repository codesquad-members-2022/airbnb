import Gnb from "Components/Gnb/Gnb";
import MiniSearchBar from "Components/SearchBar/MiniSearchBar";
import { DispatchCalendarContext } from "Context/CalendarProvider";
import { DispatchHeadCountContext } from "Context/HeadCountProvider";
import { DispatchPriceModalContext } from "Context/PriceProvider";
import { useOutsideClick } from "Hook/useOutsideClick";
import SearchView from "Pages/Common/SearchView";
import { useContext, useRef, useState } from "react";
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
  priceChartStyle,
} from "./SearchResult.styled";

export default function SearchResult() {
  const [isMiniSearchBar, setIsMiniSearchBar] = useState(false);
  const dispatchCalendar = useContext(DispatchCalendarContext);
  const dispatchPrice = useContext(DispatchPriceModalContext);
  const dispatchHeadCount = useContext(DispatchHeadCountContext);
  const searchRef = useRef([]);

  const handleClick = () => {
    setIsMiniSearchBar(true);
    dispatchCalendar({ type: "CLOSE" });
    dispatchPrice({ type: "CLOSE" });
    dispatchHeadCount({ type: "CLOSE" });
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
                  priceChartStyle={priceChartStyle}
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
