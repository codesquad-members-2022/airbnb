import { useScheduleContext } from '../Hooks/ScheduleHooks';
import * as S from './Schedule.style';

interface DayProps {
  day: Date | null;
}

const isStartDate = (day: Date | null, startDate: Date | null): boolean =>
  !!day && startDate?.getTime() === day.getTime();

const isEndDate = (day: Date | null, endDate: Date | null) =>
  !!day && endDate?.getTime() === day.getTime();

function isSelected(
  day: Date | null,
  startDate: Date | null,
  endDate: Date | null,
) {
  return (!!day && isStartDate(day, startDate)) || isEndDate(day, endDate);
}

const isBetweenSelected = (
  day: Date | null,
  startDate: Date | null,
  endDate: Date | null,
) => !!day && !!startDate && !!endDate && startDate <= day && endDate >= day;

export function Day({ day }: DayProps): JSX.Element {
  // TODO: 최적화 리렌더링 막아야함
  const { setReservationDate, startDate, endDate } = useScheduleContext();

  return (
    <S.CandarDayBackground
      isBetweenSelected={isBetweenSelected(day, startDate, endDate)}
      isStartDate={isStartDate(day, startDate)}
      isEndDate={isEndDate(day, endDate)}
    >
      {day && (
        <S.CalendarDay
          onClick={setReservationDate(day)}
          isSelected={isSelected(day, startDate, endDate)}
        >
          {day?.getDate()}
        </S.CalendarDay>
      )}
    </S.CandarDayBackground>
  );
}
