import SearchBar from "Components/SearchBar/SearchBar";
import CalendarModal from "Pages/Common/CalendarModal/CalendarModal";
import HeadCountModal from "Pages/Common/HeadCountModal/HeadCountModal";
import { useRef } from "react";

interface SearchViewType {
  searchBarStyle?: string;
  calendarStyle?: string;
  headCountStyle?: string;
}

export default function SearchView({ searchBarStyle, headCountStyle, calendarStyle }: SearchViewType) {
  const calendarRef = useRef([]);
  const headCountRef = useRef([]);

  return (
    <>
      <SearchBar calendarRef={calendarRef} headCountRef={headCountRef} searchBarStyle={searchBarStyle} />
      <CalendarModal calendarRef={calendarRef} calendarStyle={calendarStyle} />
      <HeadCountModal headCountRef={headCountRef} headCountStyle={headCountStyle} />
    </>
  );
}
