import React, { useContext } from 'react';

import { CalendarContext } from 'contexts/CalendarProvider.jsx';
import { Btn, ContentBox, BarTitle, BarContent } from './SearchBar_styled.jsx';
import { ReactComponent as DeleteIcon } from 'assets/svg/deleteBtn.svg';

function CheckInOut({ onClick, title }) {
  const {
    inputDate: { checkIn, checkOut },
    handelResetEvent,
  } = useContext(CalendarContext);

  const checkPoint =
    title === '체크인' ? checkIn : title === '체크아웃' ? checkOut : null;

  const deleteBtn =
    title === '체크아웃' && checkIn && checkOut ? (
      <DeleteIcon
        onClick={handelResetEvent}
        style={{ position: 'absolute', top: '25px', left: '350px' }}
      />
    ) : undefined;

  return (
    <>
      <Btn onClick={() => onClick('CHECK_IN_OUT')}>
        <ContentBox>
          <BarTitle>{title}</BarTitle>
          <BarContent>{checkPoint ? checkPoint : '날짜입력'}</BarContent>
        </ContentBox>
      </Btn>
      {deleteBtn}
    </>
  );
}

export default CheckInOut;
