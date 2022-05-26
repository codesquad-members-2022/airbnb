import React from 'react';
import styled from 'styled-components';

import DayCell from './DayCell';

interface Props {
  row: Array<boolean | number>;
  rowIdx: number;
  year: number;
  month: number;
}

function DayRow({ row, rowIdx, year, month }: Props) {
  return (
    <S.Row>
      {row.map((cell, cellIdx) => (
        <DayCell
          key={String(cellIdx)}
          cell={cell}
          rowIdx={rowIdx}
          cellIdx={cellIdx}
          year={year}
          month={month}
        />
      ))}
    </S.Row>
  );
}

const S = {
  Row: styled.tr``,
};

export default DayRow;
