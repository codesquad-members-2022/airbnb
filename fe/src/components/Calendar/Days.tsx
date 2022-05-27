import React, { memo } from 'react';
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
      {days.map((dayList, rowIdx) => (
        <DayRow key={String(rowIdx)} dayList={dayList} year={year} month={month} />
      ))}
    </S.Tbody>
  );
}

const S = {
  Tbody: styled.tbody``,
};

export default memo(Days);
