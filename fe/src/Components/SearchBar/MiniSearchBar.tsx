import { Img } from "Components/Common/styled";
import cancelButton from "Asset/cancelButton.svg";
import { CalendarContext } from "Context/CalendarProvider";
import { HeadCountContext } from "Context/HeadCountProvider";
import { useContext } from "react";
import {
  ActiveContent,
  Container,
  ContentContainer,
  ContentHeader,
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
  const headCountState: any = useContext(HeadCountContext);

  const { checkIn, checkOut } = calendarState;
  const { adult, child, baby } = headCountState;
  const guestCount = adult + child;
  const headCountTemplate = `게스트 ${guestCount}명 ${baby > 0 ? `유아 ${baby}명` : ""}`;
  const { month: checkInMonth, day: checkInDay } = checkIn;
  const { month: checkOutMonth, day: checkOutDay } = checkOut;

  return (
    <Container flex={true} justify="space-between" searchBarStyle={searchBarStyle} onClick={handleClick}>
      <DateArea flex={true} justify="space-between" align="center">
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
      <PriceArea flex={true} justify="space-between" align="center">
        <ContentContainer>
          <ContentHeader>요금</ContentHeader>
          {/* 금액 상태 값이 입력되면 Active, 없으면 InActive */}
          {false ? (
            <ActiveContent>입력된 금액</ActiveContent>
          ) : (
            <InActiveContent>금액대 설정</InActiveContent>
          )}
        </ContentContainer>
        <Img src={cancelButton} width="20px" height="20px" margin="0 33px 0 0" />
      </PriceArea>
      <HeadCountArea flex={true} justify="space-between" align="center">
        <ContentContainer width="140px">
          <ContentHeader>인원 수</ContentHeader>
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
