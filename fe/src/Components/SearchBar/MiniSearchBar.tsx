import { CalendarContext } from "Context/CalendarProvider";
import { HeadCountContext } from "Context/HeadCountProvider";
import { PriceModalContext } from "Context/PriceProvider";
import { MAX_PRICE_RANGE, MIN_PRICE_RANGE } from "Helpers/constant";
import { getWonTemplate } from "Helpers/utils";
import { useContext } from "react";
import {
  ActiveContent,
  Container,
  ContentContainer,
  DateArea,
  HeadCountArea,
  InActiveContent,
  PriceArea,
} from "./SearchBar.styled";

interface MiniSearchBarType {
  searchBarStyle?: string;
  handleClick?: () => void;
  calendarRef?: React.MutableRefObject<HTMLElement[] | null[]>;
  headCountRef?: React.MutableRefObject<HTMLElement[] | null[]>;
}

export default function MiniSearchBar({ searchBarStyle, handleClick }: MiniSearchBarType) {
  const calendarState: any = useContext(CalendarContext);
  const priceState: any = useContext(PriceModalContext);
  const headCountState: any = useContext(HeadCountContext);

  const { checkIn, checkOut } = calendarState;
  const { maxPrice, minPrice } = priceState;
  const { adult, child, baby } = headCountState;

  const guestCount = adult + child;
  const isAlreadySetPrice = maxPrice < MAX_PRICE_RANGE || minPrice > MIN_PRICE_RANGE;
  const priceTemplate = `${getWonTemplate(minPrice)} ~ ${getWonTemplate(maxPrice)}`;
  const headCountTemplate = `게스트 ${guestCount}명 ${baby > 0 ? `유아 ${baby}명` : ""}`;

  const { month: checkInMonth, day: checkInDay } = checkIn;
  const { month: checkOutMonth, day: checkOutDay } = checkOut;

  return (
    <Container flex justify="space-between" searchBarStyle={searchBarStyle} onClick={handleClick}>
      <DateArea flex justify="space-between" align="center">
        <ContentContainer>
          {checkInDay > 0 ? (
            <ActiveContent>{`${checkInMonth}월 ${checkInDay}일`}</ActiveContent>
          ) : (
            <InActiveContent>날짜입력</InActiveContent>
          )}
        </ContentContainer>
        <ContentContainer>
          {checkOutDay > 0 ? (
            <ActiveContent>{`${checkOutMonth}월 ${checkOutDay}일`}</ActiveContent>
          ) : (
            <InActiveContent>날짜입력</InActiveContent>
          )}
        </ContentContainer>
      </DateArea>
      <PriceArea flex justify="space-between" align="center">
        <ContentContainer>
          {isAlreadySetPrice ? (
            <ActiveContent>{priceTemplate}</ActiveContent>
          ) : (
            <InActiveContent>금액대 설정</InActiveContent>
          )}
        </ContentContainer>
      </PriceArea>
      <HeadCountArea flex justify="space-between" align="center">
        <ContentContainer width="140px">
          {guestCount > 0 ? (
            <ActiveContent>{headCountTemplate}</ActiveContent>
          ) : (
            <InActiveContent>게스트 추가</InActiveContent>
          )}
        </ContentContainer>
      </HeadCountArea>
    </Container>
  );
}
