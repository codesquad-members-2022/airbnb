import React from 'react';
import styled from 'styled-components';

import DayCell from './DayCell';

interface Props {
  dayList: Array<boolean | number>;
  rowIdx: number;
  year: number;
  month: number;
}

function DayRow({ dayList, rowIdx, year, month }: Props) {
  return (
    <S.Row>
      {dayList.map((day, cellIdx) => (
        <DayCell
          key={String(cellIdx)}
          day={day}
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
