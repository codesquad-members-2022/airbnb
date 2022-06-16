import React from 'react';
import styled, { css } from 'styled-components';
import CustomModal from '@UI/Modal';
import PricePerDay from './PricePerDay';
import ReservationInfos from './ReservationInfos';
import ReservationButton from './ReservationButton';
import ReservationFeeInfo from './ReservationFeeInfo';
import Portal from '../../util/portal';

const ReservationModal = ({ accommInfo, closeModal }) => (
  <Portal elementId="modal-root">
    <CustomModal
      style={reservationModalStyle}
      backdropStyle={backDropStyle}
      closeModal={closeModal}
    >
      <PricePerDay priceData={accommInfo.price} />
      <ReservationInfos />
      <ReservationButton />
      <ReservationFeeInfo accomInfo={accommInfo} />
    </CustomModal>
  </Portal>
);

export default ReservationModal;

const reservationModalStyle = css`
  width: calc(400px - 24px);
  left: calc(50vw - 188px);
  top: 25vh;
  border: 2px solid black;
  border-radius: 10px;
  padding: 24px;
  background: ${({ theme }) => theme.colors.white};
`;

const backDropStyle = css`
  background-color: #e5e5e5;
  opacity: 0.5;
`;
