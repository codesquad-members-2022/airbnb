import styled from 'styled-components';
import IconButton from 'components/IconButton';
import FONT from 'styles/font';
import COLOR from 'styles/colors';
import { useContext } from 'react';
import { ReservationContext } from 'store/ReservationContext';

function AccommodationItem({ imageURL, name, option, price, grade, reviewCnt }) {
  const { setIsActiveReservationModal, setReservationInfomation } = useContext(ReservationContext);
  const reservationInfomation = {
    price,
    reviewCnt,
  };
  return (
    <Wrap
      onClick={() => {
        setIsActiveReservationModal(true);
        setReservationInfomation(reservationInfomation);
      }}
    >
      <Thumbnail src={imageURL} />
      <Contents>
        <Local>인천광역시</Local>
        <IconButton
          icon="heart"
          width="20.9px"
          height="18.23px"
          fill="none"
          stroke="#828282"
          css="position:absolute;top:0;right:0;"
        />
        <Desc>{name}</Desc>
        <Option>{option}</Option>
        <Price>
          <PerNightPrice>₩{Number(price).toLocaleString()} / 박</PerNightPrice>
          <TotalPrice>총액 ₩{Number(price * 7).toLocaleString()}</TotalPrice>
        </Price>
        <Review>
          <IconButton
            icon="star"
            width="13.33px"
            height="12.68px"
            fill="#E84C60"
            css="position:relative;bottom:6px;"
          />
          <Grade>{grade}</Grade>
          <ReviewCnt>(후기 {reviewCnt}개)</ReviewCnt>
        </Review>
      </Contents>
    </Wrap>
  );
}

const Wrap = styled.div`
  display: flex;
  padding-bottom: 24px;
  border-bottom: 1px solid ${COLOR.GREY[200]};
  gap: 24px;
  cursor: pointer;
  &:last-child {
    border-bottom: none;
  }
`;

const Contents = styled.div`
  width: 100%;
  position: relative;
`;

const Thumbnail = styled.img`
  width: 330px;
  height: 200px;
  background-color: pink;
  border-radius: 10px;
`;

const Local = styled.div`
  font-weight: ${FONT.WEIGHT.REGULAR};
  font-size: ${FONT.SIZE.X_SMALL};
  color: ${COLOR.GREY[400]};
  margin-bottom: 8px;
`;

const Desc = styled.div`
  font-weight: ${FONT.WEIGHT.REGULAR};
  font-size: ${FONT.SIZE.SMALL};
  line-height: 20px;
  color: ${COLOR.GREY[600]};
  margin-bottom: 8px;
`;

const Option = styled.div`
  width: 268px;
  height: 34px;
  font-weight: ${FONT.WEIGHT.REGULAR};
  font-size: ${FONT.SIZE.X_SMALL};
  color: ${COLOR.GREY[400]};
  word-break: keep-all;
  line-height: 17px;
`;

const Price = styled.div`
  display: flex;
  position: absolute;
  bottom: 12px;
  right: 0;
  flex-direction: column;
  gap: 11px;
`;

const PerNightPrice = styled.div`
  font-weight: ${FONT.WEIGHT.MEDIUM};
  font-size: ${FONT.SIZE.SMALL};
  color: ${COLOR.GREY[600]};
  text-align: end;
`;

const TotalPrice = styled.u`
  font-weight: ${FONT.WEIGHT.REGULAR};
  font-size: ${FONT.SIZE.X_SMALL};
  color: ${COLOR.GREY[400]};
  text-decoration: underline;
`;

const Review = styled.div`
  display: flex;
  gap: 5px;
  position: absolute;
  bottom: 0;
  left: 0;
`;

const Grade = styled.div`
  font-weight: ${FONT.WEIGHT.REGULAR};
  font-size: ${FONT.SIZE.X_SMALL};
  color: ${COLOR.GREY[600]};
`;

const ReviewCnt = styled.div`
  font-weight: ${FONT.WEIGHT.REGULAR};
  font-size: ${FONT.SIZE.X_SMALL};
  color: ${COLOR.GREY[400]};
`;

export default AccommodationItem;
