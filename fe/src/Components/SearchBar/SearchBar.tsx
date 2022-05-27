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

export default function SearchBar() {
  const [calendar, dispatchCalendar] = useCalendar();
  const { checkIn, checkOut } = calendar;

  const handleClickCheckInOut = () => {
    dispatchCalendar({
      type: "OPEN",
    });
  };

  const handleResetCalendar = () => {
    dispatchCalendar({
      type: "RESET",
    });
  };

  return (
    <Container flex={true} justify="space-between">
      <DateArea flex={true} justify="space-between" align="center">
        <ContentContainer onClick={handleClickCheckInOut}>
          <ContentHeader>체크인</ContentHeader>
          {checkIn.day > 0 ? (
            <ActiveContent>{`${checkIn.month}월 ${checkIn.day}일`}</ActiveContent>
          ) : (
            <InActiveContent>날짜입력</InActiveContent>
          )}
        </ContentContainer>
        <ContentContainer onClick={handleClickCheckInOut}>
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
            onClick={handleResetCalendar}
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
      <HeadCountArea flex={true} justify="space-between" align="center">
        <ContentContainer>
          <ContentHeader>인원 수</ContentHeader>
          {/* 인원수 상태 값이 입력되면 Active, 없으면 InActive */}
          {false ? <ActiveContent>게스트 n명</ActiveContent> : <InActiveContent>게스트 추가</InActiveContent>}
        </ContentContainer>
        <Img src={cancelButton} width="20px" height="20px" />
        {/* 검색창 활성화시 active */}
        {false ? (
          <Img src={activeSearchButton} width="90px" height="42px" />
        ) : (
          <Img src={searchButton} width="40px" height="40px" />
        )}
      </HeadCountArea>
    </Container>
  );
}
