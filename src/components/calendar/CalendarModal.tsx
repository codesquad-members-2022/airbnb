import React, { useState } from 'react';
import styled from 'styled-components';
import { v4 as uuid } from 'uuid';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import DayLabel from './DayLabel';
import MonthTable from './MonthTable';
import Container from '../../UI/Container';

import {
  YearMonthType,
  getCurrentYearMonth,
  calYearMonth,
} from '../../util/calenderUtil';
import { calendarConstants } from '../../constants/constants';

type DirectionType = 'FORWARD' | 'BACKWARD' | null;

type TransformInfoType = {
  translateX: number;
  direction: DirectionType;
};

const CalendarModal = () => {
  const currYearMonth = getCurrentYearMonth();
  const initialTransformInfo: TransformInfoType = {
    translateX: -calendarConstants.CALENDAR_WIDTH,
    direction: null,
  };
  const [baseYearMonth, setBaseYearMonth] = useState(currYearMonth);
  const [transformInfo, setTransformInfo] = useState(initialTransformInfo);
  const [isTransitionEnd, setTransitionEnd] = useState(true);
  const calYearMonthByBaseYearMonth = calYearMonth(baseYearMonth);

  const getSlideYearMonthArr = (
    rangeMin: number,
    rangeMax: number,
  ): YearMonthType[] => {
    const rangeArr = Array.from(
      { length: rangeMax - rangeMin + 1 },
      (_, i) => rangeMin + i,
    );
    return rangeArr.map((n) => calYearMonthByBaseYearMonth(n));
  };

  const onClickArrowHandler = (direction: DirectionType) => {
    if (!isTransitionEnd) return;
    setTransformInfo((prev) => ({
      translateX:
        direction === 'FORWARD'
          ? prev.translateX - calendarConstants.CALENDAR_WIDTH
          : prev.translateX + calendarConstants.CALENDAR_WIDTH,
      direction,
    }));
    setTransitionEnd(false);
  };

  const onTransitionEndHandler = () => {
    const direction = transformInfo.direction === 'FORWARD' ? 1 : -1;
    setBaseYearMonth(calYearMonthByBaseYearMonth(direction));
    setTransformInfo({
      translateX: -calendarConstants.CALENDAR_WIDTH,
      direction: null,
    });
    setTransitionEnd(true);
  };

  return (
    <Container
      width="943px"
      height="452px"
      flexInfo={['row', 'center', 'center', 'wrap']}
    >
      <DayLabel side="LEFT" />
      <DayLabel side="RIGHT" />
      <BackwardArrow
        onClick={() => onClickArrowHandler('BACKWARD')}
        fontSize="small"
      />
      <ForwardArrow
        onClick={() => onClickArrowHandler('FORWARD')}
        fontSize="small"
      />
      <Slide>
        <Items
          translateX={transformInfo.translateX}
          direction={transformInfo.direction}
          onTransitionEnd={onTransitionEndHandler}
        >
          {getSlideYearMonthArr(
            calendarConstants.CALENDAR_MIN,
            calendarConstants.CALENDAR_MAX,
          ).map((yearMonth) => (
            <MonthTable key={uuid()} {...yearMonth} />
          ))}
        </Items>
      </Slide>
    </Container>
  );
};

export default CalendarModal;

const Items = styled.div<TransformInfoType>`
  display: flex;
  ${({ theme }) => theme.mixin.flexMixin('row', 'flex-start', 'space-around')};
  transform: translateX(${({ translateX }) => `${translateX}px`});
  ${({ direction }) => direction && 'transition: 0.2s'};
  height: 100%;
  width: calc(100% * 2);
  margin-top: 5px;
  z-index: -1;
`;

const ForwardArrow = styled(ArrowForwardIosIcon)`
  position: absolute;
  top: 10%;
  right: 10%;
  cursor: pointer;
  z-index: 2;
`;

const BackwardArrow = styled(ArrowBackIosIcon)`
  position: absolute;
  top: 10%;
  left: 10%;
  cursor: pointer;
  z-index: 2;
`;

const Slide = styled.div`
  position: absolute;
  top: 10%;
  width: 760px;
  height: 420px;
  overflow: hidden;
`;
