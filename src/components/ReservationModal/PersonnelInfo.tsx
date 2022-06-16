import React, { Dispatch } from 'react';
import styled from 'styled-components';
import Container from '@UI/Container';
import { usePersonnelStateContext } from '../../store/personnelStore/PersonnelContext';
import InfoContainer from './InfoContainer';
import { ModalType } from '../../types/types';

const PersonnelInfo = ({
  setOpenedModal,
}: {
  setOpenedModal: Dispatch<React.SetStateAction<ModalType>>;
}) => {
  const personnelState = usePersonnelStateContext();
  const contentString = `게스트 ${personnelState.ADULT + personnelState.CHILD}명, 유아 ${
    personnelState.INFANT
  }명`;
  return (
    <Container
      onClick={() => setOpenedModal('PERSONNEL')}
      width='100%'
      height='53px'
      flexInfo={['row', 'center', 'space-bewteen', 'no-wrap']}
    >
      <InfoContainer title='인원' content={contentString} width='100%' />
    </Container>
  );
};

export default PersonnelInfo;
