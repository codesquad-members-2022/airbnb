import { FlexType } from "Helpers/interface";
import { applyFlex } from "Helpers/utils";
import styled from "styled-components";

interface AccommodationType extends FlexType {
  accommodationStyle: string;
}

interface PhotoType {
  photoStyle: string;
}

export const AccommodationContainer = styled.div<AccommodationType>`
  ${({ flex, justify }) => applyFlex({ flex, justify })};
  ${({ accommodationStyle }) => accommodationStyle};
`;

export const Photo = styled.img<PhotoType>`
  ${({ photoStyle }) => photoStyle};
`;

export const InfoContainer = styled.div<FlexType>`
  width: 100%;
  ${({ flex, direction, justify }) => applyFlex({ flex, direction, justify })};
`;

export const InfoTop = styled.div`
  position: relative;
  div {
    margin: 8px 0;
  }
`;

export const Rocation = styled.div`
  font-weight: 400;
  font-size: 1rem;
  color: #828282;
`;
export const Title = styled.div`
  font-weight: 400;
  font-size: 1.25rem;
  color: #333;
`;
export const Description = styled.div`
  font-weight: 400;
  font-size: 1rem;
  color: #828282;
`;

export const Heart = styled.img`
  position: absolute;
  right: 20px;
  top: 10px;
`;

export const InfoBottom = styled.div<FlexType>`
  ${({ flex, justify }) => applyFlex({ flex, justify })};
`;

export const GradeArea = styled.div<FlexType>`
  ${({ flex, align }) => applyFlex({ flex, align })};
  div {
    font-size: 0.75rem;
    margin: 0 2px;
  }
`;

export const Review = styled.div`
  font-size: 0.75rem;
  font-weight: 400;
  color: #828282;
`;

export const PriceArea = styled.div<FlexType>`
  ${({ flex, direction }) => applyFlex({ flex, direction })};
  div {
    text-align: right;
  }
`;

export const OneDayPrice = styled.div`
  font-size: 1rem;
  font-weight: 700;
`;

export const TotalPrice = styled.div`
  font-size: 0.75rem;
  font-weight: 400;
  color: #828282;
`;
