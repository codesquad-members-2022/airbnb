import React from 'react';
import styled from 'styled-components';

import Days from './Days';
import Weekday from './Weekday';

interface Props {
  year: number;
  month: number;
}

function getDays(year: number, month: number) {
  const e = false;

  return [
    [e, e, e, 1, 2, 3, 4],
    [5, 6, 7, 8, 9, 10, 11],
    [12, 13, 14, 15, 16, 17, 18],
    [19, 20, 21, 22, 23, 24, 25],
    [26, 27, 28, 29, 30, 31, e],
    [e, e, e, e, e, e, e],
  ];
}

function MonthTable({ year, month }: Props) {
  const days = getDays(year, month);

  return (
    <S.MonthTableLayer>
      <S.Header>
        <S.YearMonth>
          {year}년 {month}월
        </S.YearMonth>
      </S.Header>
      <S.Table>
        <Weekday />
        <Days days={days} />
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

export default MonthTable;
