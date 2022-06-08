import * as S from '@components/Calender/Calender.style';
import Day from '@components/Calender/Day';
import Month from '@components/Calender/Month';
import Week from '@components/Calender/Week';

export interface Calendertypes {
  year: number;
  month: number;
}

const RenderCalender = ({ year, month }: Calendertypes) => {
  return (
    <>
      <S.CalenderWrapper>
        <S.Calendar>
          <Month year={year} month={month} />
        </S.Calendar>
        <Week />
        <S.Days>
          <Day year={year} month={month} />
        </S.Days>
      </S.CalenderWrapper>
    </>
  );
};

export default RenderCalender;
