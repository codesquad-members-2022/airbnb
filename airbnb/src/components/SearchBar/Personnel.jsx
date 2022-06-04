import React from 'react';
import { Btn, ContentBox, BarTitle, BarContent } from './SearchBar_styled.jsx';

function Personnel({ onClick }) {
  return (
    <Btn>
      <ContentBox onClick={() => onClick('TOTAL_GUESTS')}>
        <BarTitle>인원</BarTitle>
        <BarContent>게스트 추가</BarContent>
      </ContentBox>
    </Btn>
  );
}

export default Personnel;
