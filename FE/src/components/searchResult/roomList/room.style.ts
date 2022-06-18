import styled from 'styled-components';

interface Thumbnails {
  imgUrl: string;
}
const RoomWrapper = styled.div`
  width: 100%;
  height: 200px;
  display: flex;
`;

const Thumbnail = styled.img<Thumbnails>`
  width: 330px;
  height: 200px;
  background: url(${({ imgUrl }) => imgUrl});
  border-radius: 10px;
`;

const Description = styled.div`
  width: 354px;
  padding: 6px 0 0 15px;
`;

const InfoWrapper = styled.div`
  display: flex;
  justify-content: space-between;
`;

const Info = styled.div`
  width: 268px;
  height: 87px;
`;

const Location = styled.div`
  line-height: 17px;
  width: 100%;
  font-size: ${({ theme: { fontSize } }) => fontSize.xSmall};
  font-weight: ${({ theme: { fontWeight } }) => fontWeight.normal};
  color: ${({ theme: { colors } }) => colors.grey3};
`;
const RoomTitle = styled.div`
  margin: 8px 0 10px 0;
  width: 100%;
  font-size: ${({ theme: { fontSize } }) => fontSize.small};
  font-weight: ${({ theme: { fontWeight } }) => fontWeight.normal};
  color: ${({ theme: { colors } }) => colors.grey1};
`;

const Option = styled.div`
  font-size: ${({ theme: { fontSize } }) => fontSize.xSmall};
  font-weight: ${({ theme: { fontWeight } }) => fontWeight.normal};
  color: ${({ theme: { colors } }) => colors.grey3};
  line-height: 17px;
`;

const PointWrapper = styled.div`
  display: flex;
  margin-top: 65px;
  justify-content: space-between;
  align-items: flex-end;
`;

const Point = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`;

const Rating = styled.p`
  font-size: ${({ theme: { fontSize } }) => fontSize.xSmall};
  font-weight: ${({ theme: { fontWeight } }) => fontWeight.normal};
  color: ${({ theme: { colors } }) => colors.grey1};
`;

const Review = styled.p`
  font-size: ${({ theme: { fontSize } }) => fontSize.xSmall};
  font-weight: ${({ theme: { fontWeight } }) => fontWeight.normal};
  color: ${({ theme: { colors } }) => colors.grey3};
  padding-left: 5px;
`;

const Charge = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
`;

const DayChargeWrapper = styled.div`
  display: flex;
`;
const DayCharge = styled.p`
  font-size: ${({ theme: { fontSize } }) => fontSize.small};
  font-weight: ${({ theme: { fontWeight } }) => fontWeight.bold};
  color: ${({ theme: { colors } }) => colors.grey1};
`;
const Day = styled.p`
  font-size: ${({ theme: { fontSize } }) => fontSize.small};
  font-weight: ${({ theme: { fontWeight } }) => fontWeight.medium};
  color: ${({ theme: { colors } }) => colors.grey1};
`;

const TotalCost = styled.div`
  margin-top: 4px;
  text-decoration: underline;
  font-size: ${({ theme: { fontSize } }) => fontSize.xSmall};
  font-weight: ${({ theme: { fontWeight } }) => fontWeight.normal};
  color: ${({ theme: { colors } }) => colors.grey3};
`;

export {
  TotalCost,
  Day,
  DayCharge,
  DayChargeWrapper,
  Charge,
  PointWrapper,
  Review,
  Rating,
  InfoWrapper,
  Description,
  Point,
  Option,
  RoomTitle,
  Location,
  Info,
  Thumbnail,
  RoomWrapper,
};
