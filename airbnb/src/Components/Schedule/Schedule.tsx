import { useState } from 'react';
import * as S from './Schedule.style';
import { CalendarHeader } from './CalendarHeader';
import { BaseWeekend } from './BaseWeekend';
import { CalendarDate } from './CalendarDate';

const WEEKDAY: string[] = ['일', '월', '화', '수', '목', '금', '토'];

const getMonthDate = (year: number, month: number) => {
  const fullDate: number = 32 - new Date(year, month, 32).getDate(); // 해달 달이 총 몇일인지
  const firstDate: number = new Date(year, month, 1).getDay(); // 1일이 몇요일인지
  const addDate = fullDate + firstDate;

  const firstWeek = Array.from(
    { length: WEEKDAY.length },
    (_, idx) => idx - firstDate + 1,
  );

  const currentMonth = Array.from(
    {
      length: Math.floor(addDate / WEEKDAY.length + 1),
    },

    (_, i) =>
      firstWeek.map(v => {
        const day = v + i * 7;
        return day < 1 || day > fullDate ? null : day;
      }),
  );
  return currentMonth;
};

export function Schedule(): JSX.Element {
  const [currentDate, setCurrentDate] = useState(new Date());
  const testFullDate = getMonthDate(
    currentDate.getFullYear(),
    currentDate.getMonth(),
  );
  const testNextFullDate = getMonthDate(
    currentDate.getFullYear(),
    currentDate.getMonth() + 1,
  );
  return (
    <S.ScheduleWrapper>
      <S.Calendar>
        <CalendarHeader
          year={currentDate.getFullYear()}
          month={currentDate.getMonth() + 1}
        />
        <BaseWeekend weekend={WEEKDAY} />
        <CalendarDate whloeDate={testFullDate} />
      </S.Calendar>

      <S.Calendar>
        <CalendarHeader
          year={currentDate.getFullYear()}
          month={currentDate.getMonth() + 1 + 1}
        />
        <BaseWeekend weekend={WEEKDAY} />
        <CalendarDate whloeDate={testNextFullDate} />
      </S.Calendar>
    </S.ScheduleWrapper>
  );
}
