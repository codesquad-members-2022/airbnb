import styled from 'styled-components';

import ReservationInfo from 'components/Modals/Reservation/ReservationInfo';
import CostInfo from 'components/Modals/Reservation/Cost';
import { useModal } from 'hooks/useModal';

function Reservation() {
  const { clickReservationModal, reservationFocusModal } = useModal();
  const hotelInfo = {
    feePerOneNight: 70000,
    cleaningFee: 25000,
    discountRate: 0.04,
  };

  const onClickEvent = (e: React.MouseEvent<HTMLDivElement>) => {
    e.stopPropagation();
    clickReservationModal(reservationFocusModal);
  };

  return (
    <>
      <Background onClick={onClickEvent} />
      <ReservationBox>
        <TopInfo>
          <span className="info_charge">
            <strong>₩70,000</strong> / 박
          </span>
          <span className="info_review">후기 127개</span>
        </TopInfo>
        <ReservationInfo />
        <ReservationButton>예약하기</ReservationButton>
        <span className="info_caption">예약 확정 전에는 요금이 청구되지 않습니다.</span>
        <CostInfo info={hotelInfo} />
      </ReservationBox>
    </>
  );
}

const Background = styled.div`
  z-index: 5;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 100vw;
  height: 100vh;
  background: #333333b3;
`;

const ReservationBox = styled.div`
  z-index: 5;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 400px;
  padding: 24px;
  border-radius: 10px;
  background: white;
  text-align: center;

  .info_caption {
    color: ${({ theme }) => theme.colors.grey2};
    ${({ theme }) => theme.fontStyles.normal12px};
  }
`;

export const FlexBox = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const TopInfo = styled(FlexBox)`
  margin-bottom: 24px;
  cursor: default;

  .info_charge {
    ${({ theme }) => theme.fontStyles.normal14px};

    strong {
      ${({ theme }) => theme.fontStyles.bold20px};
    }
  }

  .info_review {
    ${({ theme }) => theme.fontStyles.bold12px};
    color: ${({ theme }) => theme.colors.grey3};
    text-decoration: underline;
    cursor: pointer;
  }
`;

const ReservationButton = styled.button`
  width: 100%;
  margin: 16px 0;
  padding: 16px;
  border-radius: 10px;
  background: ${({ theme }) => theme.colors.grey1};
  color: ${({ theme }) => theme.colors.white};
  ${({ theme }) => theme.fontStyles.bold16px};
`;

export default Reservation;
