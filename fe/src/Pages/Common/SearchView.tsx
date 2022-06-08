import SearchBar from "Components/SearchBar/SearchBar";
import { MODAL_REF_IDX } from "Helpers/constant";
import CalendarModal from "Pages/Common/CalendarModal/CalendarModal";
import HeadCountModal from "Pages/Common/HeadCountModal/HeadCountModal";
import { useRef } from "react";
import PriceModal from "./PriceModal/PriceModal";
import { SearchViewContainer } from "./SearchView.styled";

interface SearchViewType {
  searchBarStyle?: string;
  calendarStyle?: string;
  priceChartStyle?: string;
  headCountStyle?: string;
  searchRef?: React.MutableRefObject<HTMLElement[] | null[]>;
}

export default function SearchView({
  searchRef,
  searchBarStyle,
  headCountStyle,
  priceChartStyle,
  calendarStyle,
}: SearchViewType) {
  const calendarRef = useRef([]);
  const priceModalRef = useRef([]);
  const headCountRef = useRef([]);

  return (
    <SearchViewContainer ref={(el) => searchRef && (searchRef.current[MODAL_REF_IDX] = el)}>
      <SearchBar
        calendarRef={calendarRef}
        priceModalRef={priceModalRef}
        headCountRef={headCountRef}
        searchBarStyle={searchBarStyle}
      />
      <CalendarModal calendarRef={calendarRef} calendarStyle={calendarStyle} />
      <PriceModal priceModalRef={priceModalRef} priceChartStyle={priceChartStyle} />
      <HeadCountModal headCountRef={headCountRef} headCountStyle={headCountStyle} />
    </SearchViewContainer>
  );
}
