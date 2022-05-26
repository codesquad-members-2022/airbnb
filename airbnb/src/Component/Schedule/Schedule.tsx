import { v4 } from 'uuid';
import * as S from './ScheduleStyle';

const WEEKDAY: string[] = ['일', '월', '화', '수', '목', '금', '토'];

const getMonthDate = (year: number, month: number): [number[]] => {
  let fullDate: number = 32 - new Date(year, month, 32).getDate();
  let firstDate: number = new Date(year, month, 1).getDay();
  const isFeburary: number = fullDate % 7;
  const DateArr: object[] = new Array(isFeburary ? 5 : 4).fill([]);
  let flag = 1;

  // TODO: 리팩토링
  const result = DateArr.map(week => {
    for (let i = 0; i < WEEKDAY.length; i += 1) {
      if (firstDate > 0 || fullDate <= 0) {
        firstDate -= 1;
        week = [...week, 0];
      } else {
        week = [...week, flag];
        flag += 1;
        fullDate -= 1;
      }
    }
    return week;
  });
  return result;
};

export function Schedule(): JSX.Element {
  const testYear = 2022;
  const tesyMonth = 4;

  const testFullDate = getMonthDate(testYear, tesyMonth);

  return (
    <S.ScheduleWrapper>
      <S.Calendar>
        <S.WeekDay>
          {WEEKDAY.map(value => (
            <li key={v4()}>{value}</li>
          ))}
        </S.WeekDay>

        <S.WeekDate>{testFullDate[]}</S.WeekDate>
      </S.Calendar>
      <S.Calendar>d</S.Calendar>
    </S.ScheduleWrapper>
  );
}
