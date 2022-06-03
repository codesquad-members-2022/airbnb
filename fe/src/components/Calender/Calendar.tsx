import { usePeriodDispatch, usePeriodState } from 'contexts/periodContext';
import { ReactComponent as LeftIcon } from 'images/FE_숙소예약서비스/Property 1=chevron-left.svg';
import { ReactComponent as RightIcon } from 'images/FE_숙소예약서비스/Property 1=chevron-right.svg';
import { useState } from 'react';
import styled from 'styled-components';
import { getDays, keyMaker } from 'utils/util';
import Day from './Day';

type CalendarProps = {
  date: Date;
};

// type DayProps = {
//   isClicked?: boolean;
// };

function Calendar({ date }: CalendarProps) {
  const days: Array<string> = ['일', '월', '화', '수', '목', '금', '토'];
  const month = date.getMonth();
  const thisMonth = date.getMonth() + 1;
  const [isClicked, setIsClicked] = useState(false);
  const nextMonth = thisMonth === 12 ? 1 : thisMonth + 1;
  const thisYear = date.getFullYear();
  const nextYear = thisMonth === 12 ? thisYear + 1 : thisYear;
  const nextDate = new Date(thisYear, month + 1);
  const daysComp = days.map((day: string) => <WeekDay key={day}>{day}</WeekDay>); // useMemo 사용시 오류 발생, 타입스크립트문제? airbnb 디자인 페턴 문제?
  const thisCalendarDays = getDays(month).map((day) => {
    const key: string = keyMaker();
    const dateInfo: Date = day.date;
    return <Day key={key} isClicked={isClicked} date={dateInfo} isThisMonth={day.isThisMonth} />;
  });
  const nextCalendarDays = getDays(nextDate.getMonth()).map((day) => {
    const key: string = keyMaker();
    const dateInfo: Date = day.date;
    return <Day key={key} isClicked={isClicked} date={dateInfo} isThisMonth={day.isThisMonth} />;
  });
  const { setCheckIn, setCheckOut, setDate } = usePeriodDispatch();
  const monthAfterNext: number = 2;
  function increaseMonth() {
    setDate(new Date(thisYear, month + monthAfterNext));
  }
  function decreaseMonth() {
    if (date > new Date()) setDate(new Date(thisYear, month - monthAfterNext));
  }
  function showCircle(e: React.MouseEvent<HTMLElement>) {
    setIsClicked(!isClicked);
  }
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
          <DaysWrap
            onClick={(e: React.MouseEvent<HTMLDivElement>) => {
              showCircle(e);
            }}
          >
            {thisCalendarDays}
          </DaysWrap>
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
/* const Day = styled.div<DayProps>`
  background: ${(props) => (props.isClicked ? `black` : `none`)};
  color: ${(props) => (props.isClicked ? 'white' : 'black')};
  display: flex;
  justify-content: center;
  align-items: center;
  width: 48px;
  height: 48px;
  border-radius: 999px;
`; */
export default Calendar;
