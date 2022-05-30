import React, { useContext } from 'react';

import { CalendarContext } from 'contexts/CalendarProvider.jsx';
import { Btn, ContentBox, BarTitle, BarContent } from './SearchBar_styled.jsx';

function CheckInOut({ onClick }) {
  const { inputDate } = useContext(CalendarContext);

  return (
    <>
      <Btn onClick={onClick}>
        <ContentBox>
          <BarTitle>체크인</BarTitle>
          <BarContent>
            {inputDate.checkIn ? inputDate.checkIn : '날짜입력'}
          </BarContent>
        </ContentBox>
      </Btn>
      <Btn onClick={onClick}>
        <ContentBox>
          <BarTitle>체크아웃</BarTitle>
          <BarContent>
            {inputDate.checkOut ? inputDate.checkOut : '날짜입력'}
          </BarContent>
        </ContentBox>
      </Btn>
    </>
  );
}

export default CheckInOut;
