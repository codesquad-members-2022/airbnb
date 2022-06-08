import { CalendarTypes } from '@components/Calendar';
import * as S from '@components/Calendar/Calendar.style';

const Month = ({ year, month }: CalendarTypes) => {
  return (
    <S.Month>
      <S.Date>
        <h1>
          {year}년 {month + 1}월
        </h1>
      </S.Date>
    </S.Month>
  );
};

export default Month;
