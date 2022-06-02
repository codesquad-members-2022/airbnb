import * as S from './Schedule.style';

interface HeaderProps {
  year: number;

  month: number;
}

export function CalendarHeader({ year, month }: HeaderProps): JSX.Element {
  return (
    <S.Date>
      {year}년 {month + 1}월{' '}
    </S.Date>
  );
}
