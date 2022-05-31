import { v4 } from 'uuid';
import * as S from './Schedule.style';
import { Day } from './Day';

interface CalendarDateProps {
  whloeDate: (number | null)[][];
}

export function CalendarDate({ whloeDate }: CalendarDateProps): JSX.Element {
  return (
    <>
      {whloeDate.map(week => (
        <S.WeekDate key={v4()}>
          {week.map(day => (
            <Day key={v4()} day={day} />
          ))}
        </S.WeekDate>
      ))}
    </>
  );
}
