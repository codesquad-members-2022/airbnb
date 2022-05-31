import * as S from './Schedule.style';

interface DayProps {
  day: number | null;
  //   setReservationDate: Dispatch<{ year: number; month: number; day: number }>;
}

export function Day({ day }: DayProps): JSX.Element {
  return <S.CalendarDay>{day}</S.CalendarDay>;
}
