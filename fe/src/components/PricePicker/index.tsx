import React from 'react';

import * as S from './style';

function PricePicker() {
  return (
    <S.PricePickerLayer>
      <S.Header>
        <S.Title>가격 범위</S.Title>
      </S.Header>
      <S.PriceInfo>
        <S.Price>100,000 - 1,000,000</S.Price>
        <S.Average>평균 1박 요금은 165,556 입니다.</S.Average>
      </S.PriceInfo>
      <S.ChartLayer>차트 그림</S.ChartLayer>
    </S.PricePickerLayer>
  );
}

export default PricePicker;
