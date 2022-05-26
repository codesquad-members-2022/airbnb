import React from 'react';
import styled from 'styled-components';

import DayRow from './DayRow';

interface Props {
  days: Array<Array<number | boolean>>;
  year: number;
  month: number;
}

function Days({ days, year, month }: Props) {
  return (
    <S.Tbody>
      {days.map((row, rowIdx) => (
        <DayRow key={String(rowIdx)} row={row} rowIdx={rowIdx} year={year} month={month} />
      ))}
    </S.Tbody>
  );
}

const S = {
  Tbody: styled.tbody``,
};

export default Days;
