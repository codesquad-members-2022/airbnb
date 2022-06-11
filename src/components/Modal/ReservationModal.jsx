/* eslint-disable consistent-return */
import { convertPriceToLocaleString } from 'components/PriceModal/calculate';
import { useContext } from 'react';
import { Link } from 'react-router-dom';
import { getDiffDay } from 'store/AccommodationContext';
import { FilterContext } from 'store/FilterContext';
import { ReservationContext } from 'store/ReservationContext';
import styled from 'styled-components';
import COLOR from 'styles/colors';
import FONT from 'styles/font';
import { POSITION_CENTER, BOX_SHADOW } from 'styles/utils';
import { getGuestText } from 'utils/fromStateToString';

function ReservationModal() {
  const { reservationInfomation, setIsActiveReservationModal } = useContext(ReservationContext);
  const { schedule, guest } = useContext(FilterContext);
  const { price, reviewCnt } = reservationInfomation;
  const { checkIn, checkOut } = schedule;
  const guestText = getGuestText(guest);
  const stay = getDiffDay({ checkIn, checkOut });
  const totalStatyPrice = price * stay;
  const cleaningFee = Math.floor(totalStatyPrice * 0.03);
  const serviceFee = Math.floor(totalStatyPrice * 0.05);
  const accommodationTax = Math.floor(totalStatyPrice * 0.1);
  const totalPrice = totalStatyPrice + cleaningFee + serviceFee + accommodationTax;
  const convertTotalStayPrice = convertPriceToLocaleString(totalStatyPrice);
  const convertReservationPrice = convertPriceToLocaleString(price);
  const convertCleaningFee = convertPriceToLocaleString(cleaningFee);
  const convertServiceFee = convertPriceToLocaleString(serviceFee);
  const convertAccommodationTax = convertPriceToLocaleString(accommodationTax);
  const convertTotalPrice = convertPriceToLocaleString(totalPrice);

  return (
    <Wrap>
      <Contents>
        <Header>
          <Charge>
            <strong>₩{convertReservationPrice}</strong> / 박
          </Charge>
          <Review>후기 {reviewCnt}</Review>
        </Header>
        <Filter>
          <Schedule>
            <dt>체크인</dt>
            <dd>
              {checkIn.year}.{checkIn.month}.{checkIn.day}
            </dd>
          </Schedule>
          <Schedule>
            <dt>체크아웃</dt>
            <dd>
              {checkOut.year}.{checkOut.month}.{checkOut.day}
            </dd>
          </Schedule>
          <Guest>
            <dt>인원</dt>
            <dd>{guestText}</dd>
          </Guest>
        </Filter>
        <ReservationBtn to="/ReservationSuccess">예약하기</ReservationBtn>
        <Description>예약 확정 전에는 요금이 청구되지 않습니다.</Description>
        <Cost>
          <dt>
            ₩{convertReservationPrice} x {stay}박
          </dt>
          <dd>₩{convertTotalStayPrice}</dd>
        </Cost>
        <Cost>
          <dt>청소비</dt>
          <dd>₩{convertCleaningFee}</dd>
        </Cost>
        <Cost>
          <dt>서비스 수수료</dt>
          <dd>₩{convertServiceFee}</dd>
        </Cost>
        <Cost>
          <dt>숙박세와 수수료</dt>
          <dd>₩{convertAccommodationTax}</dd>
        </Cost>
        <TotalCost>
          <dt>총액</dt>
          <dd>₩{convertTotalPrice}</dd>
        </TotalCost>
      </Contents>
      <Dim onClick={() => setIsActiveReservationModal(false)} />
    </Wrap>
  );
}

export default ReservationModal;

const Wrap = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 10;
`;

const Dim = styled.div`
  position: absolute;
  left: 0;
  right: 0;
  width: 100%;
  height: 100%;
  background-color: ${COLOR.MODAL_DIM};
  z-index: -1;
`;

const Contents = styled.div`
  ${POSITION_CENTER}
  background: ${COLOR.WHITE};
  padding: 24px;
  border-radius: 10px;
  ${BOX_SHADOW[100]}
`;

const Header = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 24px;
`;

const Charge = styled.div`
  font-size: ${FONT.SIZE.SMALL};
  color: ${COLOR.GREY[600]};

  strong {
    font-size: ${FONT.SIZE.X_LARGE};
    font-weight: ${FONT.WEIGHT.MEDIUM};
  }
`;

const Review = styled.span`
  font-size: ${FONT.SIZE.X_SMALL};
  font-weight: ${FONT.WEIGHT.MEDIUM};
  color: ${COLOR.GREY[400]};
  text-decoration: underline;
`;

const Filter = styled.div`
  display: flex;
  flex-wrap: wrap;
  border: 1px solid ${COLOR.GREY[300]};
  border-radius: 10px;

  dl {
    padding: 8px 16px;

    dt {
      margin-bottom: 5px;
      font-size: ${FONT.SIZE.X_SMALL};
      font-weight: ${FONT.WEIGHT.MEDIUM};
    }
    dd {
      font-size: ${FONT.SIZE.SMALL};
      color: ${COLOR.GREY[500]};
    }
  }
`;

const Schedule = styled.dl`
  width: 50%;
  box-sizing: border-box;
  + dl {
    border-left: 1px solid ${COLOR.GREY[300]};
  }
`;

const Guest = styled.dl`
  width: 100%;
  border-top: 1px solid ${COLOR.GREY[300]};
`;

const ReservationBtn = styled(Link)`
  display: block;
  width: 100%;
  height: 55px;
  margin: 16px 0;
  border-radius: 10px;
  background: ${COLOR.GREY[600]};
  font-size: ${FONT.SIZE.MEDIUM};
  font-weight: ${FONT.WEIGHT.MEDIUM};
  text-align: center;
  line-height: 55px;
  color: ${COLOR.WHITE};
`;

const Description = styled.p`
  font-size: ${FONT.SIZE.X_SMALL};
  text-align: center;
  margin-bottom: 27px;
`;

const Cost = styled.dl`
  display: flex;
  justify-content: space-between;
  margin: 8px 0;

  font-size: ${FONT.SIZE.MEDIUM};
  font-weight: ${FONT.WEIGHT.REGULAR};
  color: ${COLOR.GREY[600]};
  dt {
    text-decoration: underline;
  }
`;

const TotalCost = styled.dl`
  display: flex;
  justify-content: space-between;
  margin-top: 16px;
  padding-top: 16px;
  border-top: 1px solid ${COLOR.GREY[200]};
  font-size: ${FONT.SIZE.MEDIUM};
  font-weight: ${FONT.WEIGHT.MEDIUM};

  dt {
    text-decoration: underline;
  }
`;
