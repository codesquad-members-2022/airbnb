import React from 'react';
import Callendar from 'components/Modal/Period/Callendar/Callendar';
import { ModalProps, PeriodType } from 'components/SearchBar/types';
import StyledCallendarModal from './Period.styled';

export default function Period({ search, addSearch }: ModalProps<PeriodType>): JSX.Element {
  const checkIn = Number(search.checkIn);
  const checkOut = Number(search.checkOut);
  const callendarNum = 2;

  return (
    <StyledCallendarModal callendarNum={callendarNum}>
      <Callendar callendarNum={callendarNum} checkIn={checkIn} checkOut={checkOut} addSearch={addSearch} />
    </StyledCallendarModal>
  );
}
