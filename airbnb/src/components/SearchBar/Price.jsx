import React from 'react';
import styled from 'styled-components';
import { Btn, ContentBox, BarTitle, BarContent } from './SearchBar_styled.jsx';

function Price() {
  return (
    <Btn>
      <ContentBox>
        <BarTitle>요금</BarTitle>
        <BarContent>금액대 설정</BarContent>
      </ContentBox>
    </Btn>
  );
}

export default Price;
