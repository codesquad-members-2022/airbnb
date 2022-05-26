import React from 'react';
import styled from 'styled-components';

import * as I from '@/styles/icons';

import MonthTable from './MonthTable';
import theme from './theme';

function Calendar() {
  return (
    <S.CalendarLayer>
      <MonthTable year={2021} month={12} />
      <MonthTable year={2022} month={1} />
      <I.Prev />
      <I.Next />
    </S.CalendarLayer>
  );
}

const S = {
  CalendarLayer: styled.div`
    position: relative;
    display: inline-block;
    font-size: 12px;
    padding: 64px;
    box-shadow: 0 4px 10px rgba(51, 51, 51, 0.1), 0 0 4px rgba(51, 51, 51, 0.05);
    margin: 10px;
    background-color: ${theme.color.white};
    border-radius: 40px;

    ${I.Prev}, ${I.Next} {
      cursor: pointer;
      position: absolute;
      padding: 8px;
      font-size: 16px;
      border-radius: 50%;

      &:hover {
        background-color: ${theme.color.gray6};
      }
    }

    ${I.Prev} {
      left: 88px;
    }

    ${I.Next} {
      right: 88px;
    }
  `,
};

export default Calendar;
