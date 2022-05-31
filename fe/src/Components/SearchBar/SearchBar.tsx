import {
  Container,
  DateArea,
  HeadCountArea,
  PriceArea,
  InActiveContent,
  ActiveContent,
  ContentHeader,
  ContentContainer,
} from "./SearchBar.styled";
import cancelButton from "Asset/cancelButton.svg";
import searchButton from "Asset/searchButton.svg";
import activeSearchButton from "Asset/activeSearchButton.svg";
import { Img } from "Components/Common/styled";
import { useCalendar } from "Hook/useCalendar";
import { SEARCH_BAR_REF_IDX } from "Helpers/constant";
import { useHeadCount } from "Context/HeadCountProvider";

interface SearchBarType {
  calendarRef?: React.MutableRefObject<HTMLElement[] | null[]>;
  headCountRef?: React.MutableRefObject<HTMLElement[] | null[]>;
}

export default function SearchBar({ calendarRef, headCountRef }: SearchBarType) {
  const [calendarState, dispatchCalendar] = useCalendar();
  const [headCountState, dispatchHeadCount] = useHeadCount();

  const { isHeadCountOpen, adult, child, baby: babyCount } = headCountState;
  const guestCount = adult + child;

  const headCountTemplate =
    babyCount > 0 ? `게스트 ${guestCount}명 유아 ${babyCount}명` : `게스트 ${guestCount}명`;

  const { isCalendarOpen, checkIn, checkOut } = calendarState;

  const isSearchBarOpen =
    isHeadCountOpen || isCalendarOpen || checkIn.day > 0 || checkOut.day > 0 || guestCount > 0;

  const handleClick = (dispatch: any) => {
    dispatch({ type: "OPEN" });
  };

  const handleReset = (dispatch: any) => {
    dispatch({ type: "RESET" });
  };

  return (
    <Container flex={true} justify="space-between">
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
        {checkIn.day > 0 && checkOut.day > 0 && (
          <Img
            src={cancelButton}
            width="20px"
            height="20px"
            margin="0 33px 0 0"
            onClick={() => handleReset(dispatchCalendar)}
          />
        )}
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
          <Img src={cancelButton} width="20px" height="20px" onClick={() => handleReset(dispatchHeadCount)} />
        )}
        {isSearchBarOpen ? (
          <Img src={activeSearchButton} width="90px" height="42px" />
        ) : (
          <Img src={searchButton} width="40px" height="40px" />
        )}
      </HeadCountArea>
    </Container>
  );
}
