import { v4 } from 'uuid';
import * as S from './ScheduleStyle';

const WEEKDAY: string[] = ['일', '월', '화', '수', '목', '금', '토'];

const getMonthDate = (year: number, month: number) => {
  const fullDate: number = 32 - new Date(year, month, 32).getDate(); // 해달 달이 총 몇일인지
  const firstDate: number = new Date(year, month, 1).getDay(); // 1일이 몇요일인지
  const addDate = fullDate + firstDate;

  const firstWeek = Array.from(
    { length: WEEKDAY.length },
    (_, idx) => idx - firstDate + 1,
  );

  const currentMonth = Array.from(
    {
      length: Math.floor(addDate / WEEKDAY.length + 1),
    },
    (_, i) =>
      firstWeek.map(v => {
        const day = v + i * 7;
        return day < 1 || day > fullDate ? null : day;
      }),
  );
  return currentMonth;
};

export function Schedule(): JSX.Element {
  const testYear = 2022;
  const tesyMonth = 1;
  const testFullDate = getMonthDate(testYear, tesyMonth);
  const testNextFullDate = getMonthDate(testYear, tesyMonth + 1);
  return (
    <S.ScheduleWrapper>
      <S.Calendar>
        <S.Date>
          {testYear}년 {tesyMonth + 1}월
        </S.Date>
        <S.WeekDay>
          {WEEKDAY.map(value => (
            <li key={v4()}>{value}</li>
          ))}
        </S.WeekDay>

        {testFullDate.map(week => (
          <S.WeekDate key={v4()}>
            {week.map(day => (
              <li key={v4()}>{day}</li>
            ))}
          </S.WeekDate>
        ))}
      </S.Calendar>

      <S.Calendar>
        <S.WeekDay>
          {WEEKDAY.map(value => (
            <li key={v4()}>{value}</li>
          ))}
        </S.WeekDay>
        {testNextFullDate.map(week => (
          <S.WeekDate key={v4()}>
            {week.map(day => (
              <li key={v4()}>{day}</li>
            ))}
          </S.WeekDate>
        ))}
      </S.Calendar>
    </S.ScheduleWrapper>
  );
}
