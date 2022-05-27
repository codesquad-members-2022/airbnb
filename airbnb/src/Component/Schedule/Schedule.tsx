import { v4 } from 'uuid';
import * as S from './ScheduleStyle';

const WEEKDAY: string[] = ['일', '월', '화', '수', '목', '금', '토'];

const getMonthDate = (year: number, month: number) => {
  const fullDate: number = 32 - new Date(year, month, 32).getDate(); // 해달 달이 총 몇일인지
  const firstDate: number = -new Date(year, month, 1).getDay(); // 1일이 몇요일인지
  const addDate = fullDate + firstDate;

  const firstWeek = new Array(WEEKDAY.length)
    .fill(0)
    .map((_, idx) => firstDate + idx);

  const currentMonth = Array.from(
    { length: Math.floor(addDate / WEEKDAY.length) },
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

        {/* week.map 돌때 {} 감싸고 ul 태그 더해주기 */}
        {testFullDate.map(week => (
          <S.WeekDate key={v4()}>
            {week.map(day => (
              <li key={v4()}>{day}</li>
            ))}
          </S.WeekDate>
        ))}

        <S.WeekDate>{}</S.WeekDate>
      </S.Calendar>
      <S.Calendar>d</S.Calendar>
    </S.ScheduleWrapper>
  );
}
