import * as S from '@components/Calender/Calender.style';

export interface Calendertypes {
  year: number;
  month: number;
}
const Month = ({ year, month }: Calendertypes) => {
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
