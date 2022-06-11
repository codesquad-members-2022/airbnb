import styled from 'styled-components';
import Day from 'components/Calender/Day';

import { ReactComponent as LeftIcon } from 'images/FE_숙소예약서비스/Property 1=chevron-left.svg';
import { ReactComponent as RightIcon } from 'images/FE_숙소예약서비스/Property 1=chevron-right.svg';

import { usePeriodDispatch } from 'hooks/usePeriod';
import { getDays, keyMaker } from 'utils/util';
import { useMemo } from 'react';

type CalendarProps = {
  date: Date;
};

function CalendarData(date: Date) {
  const DAYS: Array<string> = ['일', '월', '화', '수', '목', '금', '토'];
  const month: number = date.getMonth();
  const thisMonth: number = date.getMonth() + 1;
  const nextMonth: number = thisMonth === 12 ? 1 : thisMonth + 1;
  const thisYear: number = date.getFullYear();
  const nextYear: number = thisMonth === 12 ? thisYear + 1 : thisYear;
  const nextDate: Date = new Date(thisYear, month + 1);
  const monthAfterNext: number = 2;
  return { DAYS, month, thisMonth, nextMonth, thisYear, nextYear, nextDate, monthAfterNext };
}

function Calendar({ date }: CalendarProps) {
  const { DAYS, month, thisMonth, nextMonth, thisYear, nextYear, nextDate, monthAfterNext } =
    CalendarData(date);

  const daysComp = useMemo(() => {
    return DAYS.map((day: string) => <WeekDay key={day}>{day}</WeekDay>);
  }, [DAYS]);
  const { setDate } = usePeriodDispatch();
  function increaseMonth() {
    setDate(new Date(thisYear, month + monthAfterNext));
  }
  function decreaseMonth() {
    if (date > new Date()) setDate(new Date(thisYear, month - monthAfterNext));
  }

  const thisCalendarDays = getDays(month).map((day) => {
    const key: string = keyMaker();
    const dateInfo: Date = day.date;
    return <Day key={key} date={dateInfo} isThisMonth={day.isThisMonth} />;
  });
  const nextCalendarDays = getDays(nextDate.getMonth()).map((day) => {
    const key: string = keyMaker();
    const dateInfo: Date = day.date;
    return <Day key={key} date={dateInfo} isThisMonth={day.isThisMonth} />;
  });
  return (
    <>
      <SlideBtnWrap>
        <PrevBtn
          onClick={() => {
            decreaseMonth();
          }}
        />
        <MonthTitle>
          {thisYear}년 {thisMonth}월
        </MonthTitle>
        <MonthTitle>
          {nextYear}년 {nextMonth}월
        </MonthTitle>
        <NextBtn
          onClick={() => {
            increaseMonth();
          }}
        />
      </SlideBtnWrap>
      <CalendarWrap>
        <Month>
          <WeekDays>{daysComp}</WeekDays>
          <DaysWrap>{thisCalendarDays}</DaysWrap>
        </Month>
        <Month>
          <WeekDays>{daysComp}</WeekDays>
          <DaysWrap>{nextCalendarDays}</DaysWrap>
        </Month>
      </CalendarWrap>
    </>
  );
}

const SlideBtnWrap = styled.div`
  width: 100%;
  height: 24px;
  display: flex;
  justify-content: space-between;
  position: relative;
  margin-bottom: 24px;
`;
const PrevBtn = styled(LeftIcon)`
  position: absolute;
`;
const MonthTitle = styled.div`
  width: 336px;
  display: flex;
  justify-content: center;
  ${({ theme }) => theme.fontStyles.bold16px};
`;
const NextBtn = styled(RightIcon)`
  position: absolute;
  right: 0;
  cursor: pointer;
`;
const CalendarWrap = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
`;
const Month = styled.div`
  width: 336px;
  height: 336px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;
const WeekDays = styled.div`
  width: 100%;
  display: flex;
`;
const WeekDay = styled.div`
  width: 48px;
  height: 24px;
  display: flex;
  justify-content: center;
  align-items: center;
  ${({ theme }) => theme.fontStyles.normal12px}
  color : ${({ theme }) => theme.colors.grey3}
`;
const DaysWrap = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: repeat(7, 1fr);
  grid-template-rows: repeat(7, 1fr);
`;
export default Calendar;
