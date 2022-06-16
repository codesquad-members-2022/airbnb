import React, { useState } from 'react';
import styled, { css } from 'styled-components';
import PeriodInfo from './PeriodInfo';
import PersonnelInfo from './PersonnelInfo';
import CustomModal from '@UI/Modal';
import { ModalType } from '../../types/types';
import CalendarModal from '../calendar/CalendarModal';
import PersonnelModal from '../Personnel/PersonnelModal';
import Portal from '../../util/portal';

const ReservationInfos = () => {
  const [openedModal, setOpenedModal] = useState<ModalType>(null);
  const ModalStyles = {
    CALENDAR: CalendarModalStyle,
    PERSONNEL: PersonnelModalStyle,
  };

  const ModalContents = {
    CALENDAR: <CalendarModal />,
    PERSONNEL: <PersonnelModal />,
  };

  return (
    <ReservationInfoContainer>
      <PeriodInfo setOpenedModal={setOpenedModal} />
      <Border />
      <PersonnelInfo setOpenedModal={setOpenedModal} />
      {openedModal && (
        <Portal elementId='modal-root'>
          <CustomModal
            style={ModalStyles[openedModal]}
            backdropStyle={backdropStyle}
            closeModal={() => setOpenedModal(null)}
          >
            {ModalContents[openedModal]}
          </CustomModal>
        </Portal>
      )}
    </ReservationInfoContainer>
  );
};
export default ReservationInfos;

const ReservationInfoContainer = styled.div`
  ${({ theme }) => theme.mixin.flexMixin('column', 'center', 'center')}
  border: 1px solid ${({ theme }) => theme.colors.lightGrey};
  border-radius: 10px;
  margin-top: 24px;
`;

const Border = styled.div`
  width: 100%;
  border: 1px solid ${({ theme }) => theme.colors.lightGrey};
`;

const CommonModalStyle = css`
  background: ${({ theme }) => theme.colors.white};
  border-radius: 40px;
  box-shadow: ${({ theme }) => theme.boxShadow.normal};
`;

const CalendarModalStyle = css`
  top: 50vh;
  left: 25vw;
  ${CommonModalStyle};
`;

const PersonnelModalStyle = css`
  top: 25vh;
  left: 60vw;
  ${CommonModalStyle};
`;

const backdropStyle = css`
  background: transparent;
`;