import React from 'react';
import styled from 'styled-components';

import theme from './theme';

interface Props {
  cell: number | boolean;
  cellIdx: number;
}

function DayCell({ cell, cellIdx }: Props) {
  return <S.CellLayer>{cell && <S.Cell>{cell}</S.Cell>}</S.CellLayer>;
}

const S = {
  CellLayer: styled.td`
    width: 48px;
    height: 48px;

    // NOTE: 체크인, 체크아웃 모두 선택된 경우

    // NOTE: 체크인 <= CellLayer <= 체크아웃인 경우
    //background-color: ${theme.color.gray6};
    
    // NOTE: CellLayer가 firstDayOfMonth인 경우
    //background: linear-gradient(to left, ${theme.color.gray6}, ${theme.color.white});

    // NOTE: CellLayer가 lastDayOfMonth인 경우
    //background: linear-gradient(to right, ${theme.color.gray6}, ${theme.color.white});

    // NOTE: 체크인 버튼인 경우
      //border-top-left-radius: 50%;
      //border-bottom-left-radius: 50%;
    // NOTE: 체크아웃 버튼인 경우
      //border-top-right-radius: 50%;
      //border-bottom-right-radius: 50%;
      * /;
  `,

  Cell: styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100%;
    border: 1px solid transparent;
    border-radius: 50%;
    cursor: pointer;
    transition: all 100ms;

    &:hover {
      border-color: ${theme.color.gray1};
    }

    /* NOTE: 클릭시
    background-color: ${theme.color.gray1};
    color: ${theme.color.white};
    */
  `,
};

export default DayCell;
