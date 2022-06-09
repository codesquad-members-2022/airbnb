import { CalendarTypes } from '@components/Calendar';
import * as S from '@components/Calendar/Calendar.style';
import Day from '@components/Calendar/Day';
import Month from '@components/Calendar/Month';
import Week from '@components/Calendar/Week';

const RenderCalendar = ({ year, month }: CalendarTypes) => {
  return (
    <>
      <S.CalendarWrapper>
        <S.Calendar>
          <Month year={year} month={month} />
        </S.Calendar>
        <Week />
        <S.Days>
          <Day year={year} month={month} />
        </S.Days>
      </S.CalendarWrapper>
    </>
  );
};

export default RenderCalendar;
