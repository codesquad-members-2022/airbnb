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

export default function Accommodation({
  accommodationStyle,
  photoStyle,
  accommodationData,
}: AccommodationType) {
  const { rocation, title, description, grade, heart, reviewCnt, oneDayPrice } = accommodationData;

  return (
    <AccommodationContainer flex accommodationStyle={accommodationStyle} justify="space-between">
      <Photo src={mockPhoto} photoStyle={photoStyle} />
      <InfoContainer flex direction="column" justify="space-between">
        <InfoTop>
          <Rocation>{rocation}</Rocation>
          <Title>{title}</Title>
          <Description>{description}</Description>
          <Heart src={heartImg}></Heart>
        </InfoTop>
        <InfoBottom flex justify="space-between">
          <GradeArea flex align="center">
            <div>⭐</div>
            <div>{grade}</div>
            <Review>후기 {reviewCnt}개</Review>
          </GradeArea>
          <PriceArea flex direction="column">
            <OneDayPrice>{`${getWonTemplate(oneDayPrice)} / 1박`}</OneDayPrice>
            {heart && <TotalPrice>전체 총액 (if 체크인,체크아웃 true)</TotalPrice>}
          </PriceArea>
        </InfoBottom>
      </InfoContainer>
    </AccommodationContainer>
  );
}
