import React, { useContext } from 'react';
import { Btn, ContentBox, BarTitle, BarContent } from './SearchBar_styled.jsx';
import PriceRangeModal from '../PriceRange/PriceRange';

function PriceRange({ onClick }) {
  return (
    <Btn onClick={() => onClick('PRICE_RANGE')}>
      <ContentBox>
        <BarTitle>요금</BarTitle>
        <BarContent>금액대 설정</BarContent>
      </ContentBox>
    </Btn>
  );
}

export default PriceRange;
