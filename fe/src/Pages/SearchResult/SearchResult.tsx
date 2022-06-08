import Accommodation from "Components/Accommodation/Accommodation";
import Gnb from "Components/Gnb/Gnb";
import MiniSearchBar from "Components/SearchBar/MiniSearchBar";
import { DispatchCalendarContext } from "Context/CalendarProvider";
import { DispatchHeadCountContext } from "Context/HeadCountProvider";
import { DispatchPriceModalContext } from "Context/PriceProvider";
import { getRandomNumber } from "Helpers/utils";
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
  accommodationStyle,
  photoStyle,
  Title,
  SearchConditions,
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
        <Tourist>
          <SearchConditions flex={true}>
            <div>숙소몇개</div>
            <div>체크인~체크아웃</div>
            <div>최소가격~최대가격</div>
            <div>게스트 n명</div>
          </SearchConditions>
          <Title>지도에서 선택한 지역의 숙소</Title>
          {accommodationDataList.map((accommodationData) => {
            return (
              <Accommodation
                accommodationStyle={accommodationStyle}
                photoStyle={photoStyle}
                accommodationData={accommodationData}
              />
            );
          })}
          {/* <Accommodation accommodationStyle={accommodationStyle} photoStyle={photoStyle} />
          <Accommodation accommodationStyle={accommodationStyle} photoStyle={photoStyle} />
          <Accommodation accommodationStyle={accommodationStyle} photoStyle={photoStyle} />
          <Accommodation accommodationStyle={accommodationStyle} photoStyle={photoStyle} />
          <Accommodation accommodationStyle={accommodationStyle} photoStyle={photoStyle} /> */}
        </Tourist>
        <Map></Map>
      </SearchResultArea>
    </>
  );
}

// 백엔드 서버에서 api 요청받기 전까지 임시로 사용할 함수
const generateAccommodationData = (idx: number) => {
  const accommodationData = {
    src: "",
    rocation: "어딘가의 아파트 전체",
    title: `${idx + 1}번 째 아파트`,
    description: "최대 인원 몇명? 침실 어쩌고",
    grade: Number((Math.random() * 5).toFixed(2)),
    heart: !!getRandomNumber(0, 1),
    reviewCnt: getRandomNumber(0, 50),
    oneDayPrice: getRandomNumber(5000, 30000),
  };
  return accommodationData;
};

const accommodationDataList = new Array(10).fill(1).map((_, idx) => generateAccommodationData(idx));
