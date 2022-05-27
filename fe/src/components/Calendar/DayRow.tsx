import React, { memo } from 'react';
import styled from 'styled-components';

import DayCell from './DayCell';

interface Props {
  dayList: Array<false | number>;
  year: number;
  month: number;
}

function DayRow({ dayList, year, month }: Props) {
  return (
    <S.Row>
      {dayList.map((day, cellIdx) => (
        <DayCell key={String(cellIdx)} year={year} month={month} day={day} />
      ))}
    </S.Row>
  );
}

const S = {
  Row: styled.tr``,
};

export default memo(DayRow);
