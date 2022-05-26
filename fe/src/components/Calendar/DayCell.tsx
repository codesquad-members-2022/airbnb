import React, { useState } from 'react';
import styled from 'styled-components';

import { useDatePick } from '@/components/Calendar/context';

import theme from './theme';

interface Props {
  cell: number | boolean;
  rowIdx: number;
  cellIdx: number;
  year: number;
  month: number;
}

function DayCell({ cell, rowIdx, cellIdx, year, month }: Props) {
  const [pickedDates, setPickedDates] = useDatePick();
  const { firstPick, secondPick } = pickedDates;

  const onClickDayCell = () => {
    console.log(firstPick);

    // NOTE: 아무것도 선택되지 않은 경우 -> firstPick 업데이트
    // NOTE: 하나만 선택된 경우 -> secondPick 업데이트
    // NOTE: 두개 선택된 경우 -> 선택된 셀 클릭하는거 아니면 클릭 무시
    // NOTE: 선택된 셀을 다시 클릭한 경우 null로
    // NOTE: firstPick을 다시 클릭하면 secondPick이 firstPick이 된다.

    if (firstPick === null) {
      return;
    }

    if (secondPick === null) {
      return;
    }
  };

  return <S.CellLayer>{cell && <S.Cell onClick={onClickDayCell}>{cell}</S.Cell>}</S.CellLayer>;
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
