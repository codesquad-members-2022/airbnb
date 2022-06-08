import {
  AccommodationContainer,
  Description,
  GradeArea,
  Heart,
  InfoBottom,
  InfoContainer,
  InfoTop,
  OneDayPrice,
  Photo,
  PriceArea,
  Review,
  Rocation,
  Title,
  TotalPrice,
} from "./Accommodation.styled";
import mockPhoto from "Asset/mockPhoto.svg";
import heartImg from "Asset/heart.svg";
import { getWonTemplate } from "Helpers/utils";
import { useContext } from "react";
import { CalendarContext } from "Context/CalendarProvider";
import { DateType } from "Helpers/interface";

interface AccommodationDataType {
  src: string;
  rocation: string;
  title: string;
  description: string;
  grade: number;
  heart: boolean;
  reviewCnt: number;
  oneDayPrice: number;
}

interface AccommodationType {
  accommodationStyle: string;
  photoStyle: string;
  accommodationData: AccommodationDataType;
}

interface CalendarStateType {
  checkIn: DateType;
  checkOut: DateType;
}

export default function Accommodation({
  accommodationStyle,
  photoStyle,
  accommodationData,
}: AccommodationType) {
  const calendarState = useContext(CalendarContext);

  const { checkIn, checkOut }: any = calendarState;
  const { src, rocation, title, description, grade, heart, reviewCnt, oneDayPrice } = accommodationData;

  return (
    <AccommodationContainer flex={true} accommodationStyle={accommodationStyle} justify="space-between">
      <Photo src={mockPhoto} photoStyle={photoStyle} />
      <InfoContainer flex={true} direction="column" justify="space-between">
        <InfoTop>
          <Rocation>{rocation}</Rocation>
          <Title>{title}</Title>
          <Description>{description}</Description>
          <Heart src={heartImg}></Heart>
        </InfoTop>
        <InfoBottom flex={true} justify="space-between">
          <GradeArea flex={true} align="center">
            <div>⭐</div>
            <div>{grade}</div>
            <Review>후기 {reviewCnt}개</Review>
          </GradeArea>
          <PriceArea flex={true} direction="column">
            <OneDayPrice>{`${getWonTemplate(oneDayPrice)} / 1박`}</OneDayPrice>
            {heart && <TotalPrice>전체 총액 (if 체크인,체크아웃 true)</TotalPrice>}
          </PriceArea>
        </InfoBottom>
      </InfoContainer>
    </AccommodationContainer>
  );
}
