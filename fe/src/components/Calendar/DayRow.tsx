import React from 'react';
import styled from 'styled-components';

import DayCell from './DayCell';

interface Props {
  row: Array<boolean | number>;
  rowIdx: number;
}

function DayRow({ row, rowIdx }: Props) {
  return (
    <S.Row>
      {row.map((cell, cellIdx) => (
        <DayCell key={String(cellIdx)} cell={cell} cellIdx={cellIdx} />
      ))}
    </S.Row>
  );
}

const S = {
  Row: styled.tr``,
};

export default DayRow;
