import * as S from './Schedule.style';
import { CalendarHeader } from './CalendarHeader';
import { BaseWeekend } from './BaseWeekend';
import { CalendarDate } from './CalendarDate';

// TODO: 상수 리팩토링
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
        return day < 1 || day > fullDate ? null : new Date(year, month, day);
      }),
  );
  return currentMonth;
};

interface CalendarProps {
  date: Date;
}

export function Calendar({ date }: CalendarProps): JSX.Element {
  const fullDate = getMonthDate(date.getFullYear(), date.getMonth());
  return (
    <S.Calendar>
      <CalendarHeader year={date.getFullYear()} month={date.getMonth()} />
      <BaseWeekend weekend={WEEKDAY} />
      <CalendarDate whloeDate={fullDate} />
    </S.Calendar>
  );
}
