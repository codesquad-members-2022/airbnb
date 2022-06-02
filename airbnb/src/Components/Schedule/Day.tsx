import { useContext } from 'react';
import { ScheduleContext } from '@/Contexts/Schedule/context';
import * as S from './Schedule.style';

interface DayProps {
  day: Date | null;
  //   setReservationDate: Dispatch<{ year: number; month: number; day: number }>;
}

const isStartDate = (day: Date | null, startDate: Date | null) =>
  day !== null && startDate?.getTime() === day.getTime();

const isEndDate = (day: Date | null, endDate: Date | null) =>
  day !== null && endDate?.getTime() === day.getTime();

function isSelected(
  day: Date | null,
  startDate: Date | null,
  endDate: Date | null,
) {
  return (
    (day !== null && isStartDate(day, startDate)) || isEndDate(day, endDate)
  );
}

const isBetweenSelected = (
  day: Date | null,
  startDate: Date | null,
  endDate: Date | null,
) =>
  day !== null &&
  startDate !== null &&
  endDate !== null &&
  startDate <= day &&
  endDate >= day;

export function Day({ day }: DayProps): JSX.Element {
  // TODO: 최적화 리렌더링 막아야함
  const { setDate, startDate, endDate } = useContext(ScheduleContext);

  const onClick = () => {
    if (!day) return;
    setDate(day);
  };

  return (
    <S.CandarDayBackground
      isBetweenSelected={isBetweenSelected(day, startDate, endDate)}
      isStartDate={isStartDate(day, startDate)}
      isEndDate={isEndDate(day, endDate)}
    >
      {day && (
        <S.CalendarDay
          onClick={onClick}
          isSelected={isSelected(day, startDate, endDate)}
        >
          {day?.getDate()}
        </S.CalendarDay>
      )}
    </S.CandarDayBackground>
  );
}
