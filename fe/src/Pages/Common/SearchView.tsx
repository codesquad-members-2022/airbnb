import SearchBar from "Components/SearchBar/SearchBar";
import { MODAL_REF_IDX } from "Helpers/constant";
import CalendarModal from "Pages/Common/CalendarModal/CalendarModal";
import HeadCountModal from "Pages/Common/HeadCountModal/HeadCountModal";
import { useRef } from "react";

interface SearchViewType {
  searchBarStyle?: string;
  calendarStyle?: string;
  headCountStyle?: string;
  searchRef?: React.MutableRefObject<HTMLElement[] | null[]>;
}

export default function SearchView({
  searchRef,
  searchBarStyle,
  headCountStyle,
  calendarStyle,
}: SearchViewType) {
  const calendarRef = useRef([]);
  const headCountRef = useRef([]);

  return (
    <div ref={(el) => searchRef && (searchRef.current[MODAL_REF_IDX] = el)}>
      <SearchBar calendarRef={calendarRef} headCountRef={headCountRef} searchBarStyle={searchBarStyle} />
      <CalendarModal calendarRef={calendarRef} calendarStyle={calendarStyle} />
      <HeadCountModal headCountRef={headCountRef} headCountStyle={headCountStyle} />
    </div>
  );
}
