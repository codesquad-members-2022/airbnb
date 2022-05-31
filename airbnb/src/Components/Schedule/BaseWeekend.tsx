import { v4 } from 'uuid';
import * as S from './Schedule.style';

interface BaseWeekendProps {
  weekend: string[];
}

export function BaseWeekend({ weekend }: BaseWeekendProps): JSX.Element {
  return (
    <S.WeekDay>
      {weekend.map(weekOfDay => (
        <li key={v4()}>{weekOfDay}</li>
      ))}
    </S.WeekDay>
  );
}
