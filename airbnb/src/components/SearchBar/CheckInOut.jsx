import React from 'react';
import { Btn, ContentBox, BarTitle, BarContent } from './SearchBar_styled.jsx';

function CheckInOut({ onClick }) {
  return (
    <>
      <Btn onClick={onClick}>
        <ContentBox>
          <BarTitle>체크인</BarTitle>
          <BarContent>날짜입력</BarContent>
        </ContentBox>
      </Btn>
      <Btn onClick={onClick}>
        <ContentBox>
          <BarTitle>체크아웃</BarTitle>
          <BarContent>날짜입력</BarContent>
        </ContentBox>
      </Btn>
    </>
  );
}

export default CheckInOut;
