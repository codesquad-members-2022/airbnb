import React from 'react';
import styled from 'styled-components';

const ReservationButton = () => (
  <ButtonContainer onClick={() => alert('예약기능을 기다려주세요!')}>예약하기</ButtonContainer>
);

export default ReservationButton;

const ButtonContainer = styled.div`
  margin-top: 16px;
  background: ${({ theme }) => theme.colors.black};
  color: ${({ theme }) => theme.colors.white};
  font-weight: 700;
  text-align: center;
  height: 16px;
  padding: 16px;
  border-radius: 10px;
`;
