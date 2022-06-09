import {
  Container,
  DateArea,
  HeadCountArea,
  PriceArea,
  InActiveContent,
  ActiveContent,
  ContentHeader,
  ContentContainer,
  SearchButtonArea,
} from "./SearchBar.styled";
import cancelButton from "Asset/cancelButton.svg";
import searchButton from "Asset/searchButton.svg";
import activeSearchButton from "Asset/activeSearchButton.svg";
import { Img } from "Components/Common/styled";
import { MAX_PRICE_RANGE, MIN_PRICE_RANGE, SEARCH_BAR_REF_IDX } from "Helpers/constant";
import { useHeadCount } from "Context/HeadCountProvider";
import { useCalendar } from "Context/CalendarProvider";
import { NavLink } from "react-router-dom";
import { usePriceModal } from "Context/PriceProvider";
import { getWonTemplate } from "Helpers/utils";

interface SearchBarType {
  searchBarStyle?: string;
  priceModalRef?: React.MutableRefObject<HTMLElement[] | null[]>;
  calendarRef?: React.MutableRefObject<HTMLElement[] | null[]>;
  headCountRef?: React.MutableRefObject<HTMLElement[] | null[]>;
}

export default function SearchBar({
  calendarRef,
  priceModalRef,
  headCountRef,
  searchBarStyle,
}: SearchBarType) {
  const [calendarState, dispatchCalendar] = useCalendar();
  const [priceChartState, dispatchPriceChart] = usePriceModal();
  const [headCountState, dispatchHeadCount] = useHeadCount();

  const { isCalendarOpen, checkIn, checkOut } = calendarState;
  const { isHeadCountOpen, adult, child, baby: babyCount } = headCountState;
  const { isPriceModalOpen, minPrice, maxPrice } = priceChartState;

  const activeCheckInOut = checkIn.day > 0 || checkOut.day > 0;
  const activePrice = minPrice > MIN_PRICE_RANGE || maxPrice < MAX_PRICE_RANGE;
  const priceRange = `${getWonTemplate(minPrice)} ~ ${getWonTemplate(maxPrice)}`;
  const guestCount = adult + child;

  const headCountTemplate = `게스트 ${guestCount}명 ${babyCount > 0 ? `유아 ${babyCount}명` : ""}`;

  const isSearchBarOpen =
    isHeadCountOpen ||
    isPriceModalOpen ||
    isCalendarOpen ||
    checkIn.day > 0 ||
    checkOut.day > 0 ||
    minPrice > MIN_PRICE_RANGE ||
    maxPrice < MAX_PRICE_RANGE ||
    guestCount > 0;

  const handleClick = (dispatch: any) => {
    dispatch({ type: "OPEN" });
  };

  const handleReset = (dispatch: any) => {
    dispatch({ type: "RESET" });
  };

  return (
    <Container flex={true} justify="space-between" searchBarStyle={searchBarStyle}>
      <DateArea
        ref={(el) => calendarRef && (calendarRef.current[SEARCH_BAR_REF_IDX] = el)}
        flex={true}
        justify="space-between"
        align="center"
      >
        <ContentContainer onClick={() => handleClick(dispatchCalendar)}>
          <ContentHeader>체크인</ContentHeader>
          {checkIn.day > 0 ? (
            <ActiveContent>{`${checkIn.month}월 ${checkIn.day}일`}</ActiveContent>
          ) : (
            <InActiveContent>날짜입력</InActiveContent>
          )}
        </ContentContainer>
        <ContentContainer onClick={() => handleClick(dispatchCalendar)}>
          <ContentHeader>체크아웃</ContentHeader>
          {checkOut.day > 0 ? (
            <ActiveContent>{`${checkOut.month}월 ${checkOut.day}일`}</ActiveContent>
          ) : (
            <InActiveContent>날짜입력</InActiveContent>
          )}
        </ContentContainer>
        {activeCheckInOut && (
          <Img
            src={cancelButton}
            width="20px"
            height="20px"
            margin="0 33px 0 0"
            onClick={() => handleReset(dispatchCalendar)}
          />
        )}
      </DateArea>
      <PriceArea
        ref={(el) => priceModalRef && (priceModalRef.current[SEARCH_BAR_REF_IDX] = el)}
        flex={true}
        justify="space-between"
        align="center"
      >
        <ContentContainer onClick={() => handleClick(dispatchPriceChart)}>
          <ContentHeader>요금</ContentHeader>
          {activePrice ? (
            <ActiveContent>{priceRange}</ActiveContent>
          ) : (
            <InActiveContent>금액대 설정</InActiveContent>
          )}
        </ContentContainer>
        {activePrice && (
          <Img
            src={cancelButton}
            width="20px"
            height="20px"
            margin="0 33px 0 0"
            onClick={() => handleReset(dispatchPriceChart)}
          />
        )}
      </PriceArea>
      <HeadCountArea
        ref={(el) => headCountRef && (headCountRef.current[SEARCH_BAR_REF_IDX] = el)}
        flex={true}
        justify="space-between"
        align="center"
      >
        <ContentContainer onClick={() => handleClick(dispatchHeadCount)} width="140px">
          <ContentHeader>인원 수</ContentHeader>
          {guestCount > 0 ? (
            <ActiveContent>{headCountTemplate}</ActiveContent>
          ) : (
            <InActiveContent>게스트 추가</InActiveContent>
          )}
        </ContentContainer>
        {guestCount > 0 && (
          <Img
            src={cancelButton}
            width="20px"
            height="20px"
            margin="0 100px 0 0"
            onClick={() => handleReset(dispatchHeadCount)}
          />
        )}
      </HeadCountArea>
      <SearchButtonArea>
        <NavLink to="/search-result">
          {isSearchBarOpen ? (
            <Img src={activeSearchButton} width="90px" height="42px" />
          ) : (
            <Img src={searchButton} width="40px" height="40px" />
          )}
        </NavLink>
      </SearchButtonArea>
    </Container>
  );
}
