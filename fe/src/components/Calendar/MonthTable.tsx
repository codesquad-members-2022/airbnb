import React, { memo } from 'react';
import styled from 'styled-components';

import Days from './Days';
import { getMonthData } from './utils';
import Weekday from './Weekday';

interface Props {
  year: number;
  month: number;
}

function MonthTable({ year, month }: Props) {
  const days = getMonthData(year, month);
  console.log(year, month);

  return (
    <S.MonthTableLayer>
      <S.Header>
        <S.YearMonth>
          {year}년 {month}월
        </S.YearMonth>
      </S.Header>
      <S.Table>
        <Weekday />
        <Days days={days} year={year} month={month} />
      </S.Table>
    </S.MonthTableLayer>
  );
}

const S = {
  YearMonth: styled.h2`
    font-size: 16px;
    cursor: default;
  `,

  Header: styled.header`
    margin-bottom: 24px;
    text-align: center;
  `,

  Table: styled.table`
    border-collapse: separate;
    border-spacing: 0 2px;
    font-weight: bold;
  `,

  MonthTableLayer: styled.div`
    display: inline-block;
    padding: 0 32px;
  `,
};

export default memo(MonthTable);
