import React, { Dispatch } from 'react';
import styled from 'styled-components';
import Container from '@UI/Container';
import { useCalendarStateContext } from '../../store/calendarStore/CalendarContext';
import InfoContainer from './InfoContainer';
import { ModalType } from '../../types/types';

const PeriodInfo = ({
  setOpenedModal,
}: {
  setOpenedModal: Dispatch<React.SetStateAction<ModalType>>;
}) => {
  const calendarState = useCalendarStateContext();

  return (
    <Container
      onClick={() => setOpenedModal('CALENDAR')}
      width='100%'
      height='53px'
      flexInfo={['row', 'center', 'space-bewteen', 'no-wrap']}
    >
      <InfoContainer
        title='체크인'
        content={calendarState.checkIn?.toLocaleDateString() || '미지정'}
        width='50%'
      />
      <Border />
      <InfoContainer
        title='체크아웃'
        content={calendarState.checkOut?.toLocaleDateString() || '미지정'}
        width='50%'
      />
    </Container>
  );
};

export default PeriodInfo;

const Border = styled.div`
  height: 100%;
  width: 1px;
  background: ${({ theme }) => theme.colors.lightGrey};
`;
