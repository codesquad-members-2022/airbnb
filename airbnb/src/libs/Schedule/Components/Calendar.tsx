import { getMonthDate } from '@/Services/Date';
import * as S from './Schedule.style';
import { CalendarHeader } from './CalendarHeader';
import { BaseWeekend } from './BaseWeekend';
import { CalendarDate } from './CalendarDate';

// TODO: 상수 리팩토링, 달력 관련 util 함수 분리
const WEEKDAY: string[] = ['일', '월', '화', '수', '목', '금', '토'];

interface CalendarProps {
  date: Date;
}

export function Calendar({ date }: CalendarProps): JSX.Element {
  const fullDate = getMonthDate(date.getFullYear(), date.getMonth(), WEEKDAY);
  return (
    <S.Calendar>
      <CalendarHeader year={date.getFullYear()} month={date.getMonth()} />
      <BaseWeekend weekend={WEEKDAY} />
      <CalendarDate whloeDate={fullDate} />
    </S.Calendar>
  );
}
