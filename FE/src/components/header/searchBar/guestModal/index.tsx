import React, { useContext } from 'react';
import Modal from 'react-modal';
import styled from 'styled-components';

import { Context } from 'components/context/ModalContext';
import GuestInfo from 'components/header/searchBar/guestModal/guestInfo';
import { guestCustomStyles } from 'components/header/searchBar/guestModal/guestModal.style';

function GuestModal() {
  const { isGuestOpen, setIsGuestOpen } = useContext(Context);
  const onCloseModal = () => {
    if (setIsGuestOpen) setIsGuestOpen(false);
  };
  return (
    <Modal isOpen={isGuestOpen} style={guestCustomStyles} onRequestClose={onCloseModal} ariaHideApp={false}>
      <ModalInfoWrapper>
        <GuestInfo type="성인" description="만 13세 이상" />
        <Line />
        <GuestInfo type="어린이" description="만 2세~12세" />
        <Line />
        <GuestInfo type="유아" description="만 2세 미만" />
      </ModalInfoWrapper>
    </Modal>
  );
}

const Line = styled.div`
  width: 272px;
  height: 1px;
  background: ${({ theme: { colors } }) => colors.grey7};
`;

const ModalInfoWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-content: center;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: 100%;
  padding: 64px 67px 64px 64px;
  line-height: 34px;
  background: ${({ theme: { colors } }) => colors.white};
  box-shadow: 0px 4px 10px rgba(51, 51, 51, 0.1), 0px 0px 4px rgba(51, 51, 51, 0.05);
  border-radius: 40px;
`;

export default GuestModal;
