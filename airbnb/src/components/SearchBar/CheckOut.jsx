import React from 'react';
import styled from 'styled-components';
import { Btn, ContentBox, BarTitle, BarContent } from './SearchBar_styled.jsx';

function CheckOut() {
  return (
    <>
      <Btn>
        <ContentBox>
          <BarTitle>체크인</BarTitle>
          <BarContent>날짜입력</BarContent>
        </ContentBox>
      </Btn>
      <Btn>
        <ContentBox>
          <BarTitle>체크아웃</BarTitle>
          <BarContent>날짜입력</BarContent>
        </ContentBox>
      </Btn>
    </>
  );
}

export default CheckOut;
