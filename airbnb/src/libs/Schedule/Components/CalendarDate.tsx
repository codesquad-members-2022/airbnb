import * as S from './Schedule.style';
import { Day } from './Day';

interface CalendarDateProps {
  whloeDate: (Date | null)[][];
}

export function CalendarDate({ whloeDate }: CalendarDateProps): JSX.Element {
  return (
    <>
      {whloeDate.map((week, weekIdx) => (
        <S.WeekDate key={`${weekIdx + 1}-week`}>
          {week.map((day, dayIdx) => (
            <Day key={`${weekIdx * week.length + dayIdx}`} day={day} />
          ))}
        </S.WeekDate>
      ))}
    </>
  );
}
