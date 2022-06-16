import Container from '@UI/Container';
import React from 'react';
import styled from 'styled-components';
import { calDifferenceDate } from '../../util/calenderUtil';
import { useCalendarStateContext } from '../../store/calendarStore/CalendarContext';
import { usePersonnelStateContext } from '../../store/personnelStore/PersonnelContext';
import FeeInfo from './FeeInfo';

const ReservationFeeInfo = ({ accomInfo }) => {
  const { checkIn, checkOut } = useCalendarStateContext();
  const { ADULT, CHILD } = usePersonnelStateContext();
  const stayDateLength = calDifferenceDate(checkIn, checkOut);
  const baseFee = accomInfo.price * stayDateLength;
  const feeInfoArr = [
    {
      label: `${accomInfo.price.toLocaleString()} x ${stayDateLength}박`,
      value: baseFee,
    },
    {
      label: '4% 주 단위 요금 할인',
      value: stayDateLength >= 7 ? baseFee * -0.04 : 0,
    },
    {
      label: '청소비',
      value: baseFee * accomInfo.cleaningCostRatio,
    },
    {
      label: '서비스 수수료',
      value: baseFee * accomInfo.cleaningCostRatio,
    },
    {
      label: '숙박세와 수수료',
      value: baseFee * accomInfo.taxRatio,
    },
  ];

  const isOrderValidate = () => checkIn && checkOut && ADULT + CHILD;

  return (
    <Container flexInfo={['column', 'center', 'center', 'no-wrap']}>
      <Message>예약 확정 전에는 요금이 청구되지 않습니다.</Message>
      <FeeInfoContainer>
        {isOrderValidate()
          ? feeInfoArr.map(({ label, value }) => <FeeInfo key={label} label={label} fee={value} />)
          : '예약 정보를 모두 입력해야 예상 금액을 확인할 수 있습니다.'}
      </FeeInfoContainer>
      <FeeInfo label='총 합계' fee={feeInfoArr.reduce((acc, { value }) => acc + value, 0)} />
    </Container>
  );
};

export default ReservationFeeInfo;

const Message = styled.div`
  font-size: 0.75rem;
  color: ${({ theme }) => theme.colors.lightGrey};
  margin-top: 16px;
`;

const FeeInfoContainer = styled.div`
  width: 100%;
  padding: 30px 0px 16px 0px;
  margin-bottom: 16px;
  border-bottom: 1px solid ${({ theme }) => theme.colors.lightGrey};
`;

const TotalFee = styled.div``;
