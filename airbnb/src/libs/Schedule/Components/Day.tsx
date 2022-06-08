import {
  isBetweenSelected,
  isStartDate,
  isEndDate,
  isSelected,
} from '@/Services/Date';
import * as S from './Schedule.style';
import { useScheduleContext } from '../Hooks/ScheduleHooks';

interface DayProps {
  day: Date | null;
}

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
