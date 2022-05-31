import React, { useContext } from 'react';

import { CalendarContext } from 'contexts/CalendarProvider.jsx';
import { Btn, ContentBox, BarTitle, BarContent } from './SearchBar_styled.jsx';

function CheckInOut({ onClick, title }) {
  const { inputDate } = useContext(CalendarContext);

  const checkPoint =
    title === '체크인'
      ? inputDate.checkIn
      : title === '체크아웃'
      ? inputDate.checkOut
      : null;

  return (
    <Btn onClick={() => onClick('CHECK_IN_OUT')}>
      <ContentBox>
        <BarTitle>{title}</BarTitle>
        <BarContent>{checkPoint ? checkPoint : '날짜입력'}</BarContent>
      </ContentBox>
    </Btn>
  );
}

export default CheckInOut;
