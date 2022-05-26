import React from 'react';
import styled from 'styled-components';

import MonthTable from './MonthTable';
import theme from './theme';

function Calendar() {
  return (
    <S.CalendarLayer>
      <MonthTable year={2021} month={12} />
      <MonthTable year={2022} month={1} />
    </S.CalendarLayer>
  );
}

const S = {
  CalendarLayer: styled.div`
    display: inline-block;
    font-size: 12px;
    padding: 64px 88px;
    box-shadow: 0 4px 10px rgba(51, 51, 51, 0.1), 0 0 4px rgba(51, 51, 51, 0.05);
    margin: 10px;
    background-color: ${theme.color.white};
    border-radius: 40px;
  `,
};

export default Calendar;
