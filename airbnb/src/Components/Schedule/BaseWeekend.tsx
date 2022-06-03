import * as S from './Schedule.style';

interface BaseWeekendProps {
  weekend: string[];
}

export function BaseWeekend({ weekend }: BaseWeekendProps): JSX.Element {
  return (
    <S.WeekDay>
      {weekend.map((weekOfDay, idx) => (
        <li key={`${String(idx)}주`}>{weekOfDay}</li>
      ))}
    </S.WeekDay>
  );
}
