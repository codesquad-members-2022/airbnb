import React from 'react';
import styled from 'styled-components';
import { Btn, ContentBox, BarTitle, BarContent } from './SearchBar_styled.jsx';

function Personnel() {
  return (
    <Btn>
      <ContentBox>
        <BarTitle>인원</BarTitle>
        <BarContent>게스트 추가</BarContent>
      </ContentBox>
    </Btn>
  );
}

export default Personnel;
