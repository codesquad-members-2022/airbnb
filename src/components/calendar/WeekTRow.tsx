import React from 'react';
import styled, { css } from 'styled-components';
import {
  useCalendarStateContext,
  useCalendarDispatchContext,
} from '../../store/calendarStore/CalendarContext';
import { calendarActions } from '../../store/calendarStore/calendarReducer';
import { isTwoDateSame, getIsPastDate } from '../../util/calenderUtil';

type CalendarYearMonthType = {
  year: number;
  month: number;
};

type WeekRowInfoType = CalendarYearMonthType & {
  week: number[];
};

type DateStyleType = 'CHECK_IN' | 'CHECK_OUT' | 'BETWEEN' | null;

const WeekTableRow = ({ year, month, week }: WeekRowInfoType) => {
  const calendarState = useCalendarStateContext();
  const {
    checkInActionCreator,
    checkOutActionCreator,
    hoverActionCreator,
    deleteActionCreator,
  } = calendarActions;

  const dispatchCalendar = useCalendarDispatchContext();
  const onClickHandler = (event: React.MouseEvent) => {
    const clicked = (event.target as HTMLDivElement).dataset.date;
    if (!clicked) return;
    const clickedDate = new Date(clicked);
    if (!calendarState.checkIn || calendarState.checkIn > clickedDate) {
      dispatchCalendar(deleteActionCreator());
      dispatchCalendar(checkInActionCreator(clickedDate));
    } else {
      dispatchCalendar(checkOutActionCreator(clickedDate));
    }
  };

  const onMouseHandler = (event: React.MouseEvent) => {
    const { checkIn, checkOut } = calendarState;
    if (!checkIn) return;

    if (!checkOut) {
      const currHoveredString = (event.target as HTMLDivElement).dataset.date;
      if (!currHoveredString) return;
      const currHoveredDate = new Date(currHoveredString);
      dispatchCalendar(hoverActionCreator(new Date(currHoveredDate)));
      return;
    }
    dispatchCalendar(hoverActionCreator(checkOut));
  };

  const decideStyleType = (date: Date): DateStyleType => {
    const { checkIn, hoveredDate, checkOut } = calendarState;
    if (!checkIn) return null;
    if (isTwoDateSame(date, checkIn)) return 'CHECK_IN';

    if (!hoveredDate) return null;
    if (checkIn < date && hoveredDate > date) return 'BETWEEN';

    if (!checkOut) return null;
    if (isTwoDateSame(date, checkOut)) return 'CHECK_OUT';

    return null;
  };

  return (
    <WeekRow>
      {week.map((date) => {
        const currDateString = `${year}-${month}-${date}`;
        const currDateObj = new Date(currDateString);
        const styleType = decideStyleType(currDateObj);
        const isPast = getIsPastDate(new Date(), currDateObj);
        return (
          <DateBox date={date} key={currDateString} boxStyle={styleType}>
            <DateData
              data-date={currDateObj}
              dateStyle={styleType}
              isPast={isPast}
              onClick={onClickHandler}
              onMouseEnter={onMouseHandler}
            >
              {date}
            </DateData>
          </DateBox>
        );
      })}
    </WeekRow>
  );
};

const WeekRow = styled.tr`
  margin-bottom: 4px;
`;

const DateBox = styled.td<{ date: number; boxStyle: DateStyleType }>`
  visibility: ${({ date }) => (date <= 0 ? 'hidden' : 'visible')};
  width: 48px;
  height: 48px;
  background: ${({ boxStyle, theme }) => (boxStyle ? theme.colors.lightGrey2 : theme.colors.white)};
  border-radius: ${({ boxStyle }) => {
    if (boxStyle === 'CHECK_IN') return '50% 0 0 50%';
    if (boxStyle === 'CHECK_OUT') return '0 50% 50% 0';
    return '0';
  }};
`;

const DateData = styled.div<{
  dateStyle: DateStyleType;
  isPast: boolean;
}>`
  ${({ theme }) => theme.mixin.flexMixin('row', 'center', 'center')}
  width: 100%;
  height: 100%;
  font-weight: 800;
  font-size: 0.75rem;
  cursor: pointer;
  border-radius: 100%;

  ${({ dateStyle }) =>
    (dateStyle === 'CHECK_IN' || dateStyle === 'CHECK_OUT') &&
    css`
      background: ${({ theme }) => theme.colors.black};
      color: ${({ theme }) => theme.colors.white};
    `}
  ${({ isPast }) =>
    isPast &&
    css`
      color: ${({ theme }) => theme.colors.lightGrey2};
      pointer-events: none;
    `}
  :hover {
    border: 1px solid ${({ theme }) => theme.colors.black};
    box-sizing: border-box;
  }
`;

export default WeekTableRow;
