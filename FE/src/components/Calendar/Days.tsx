import * as S from '@components/Calendar/Calendar.style';
import { useCalendarState } from '@lib/hooks/useContext';

interface DayTypes {
  year: number;
  month: number;
  day: number;
  index: number;
}

interface DateTypes {
  year: number;
  month: number;
  day: number;
}

const Days = ({ year, month, day, index }: DayTypes) => {
  const { checkIn, setCheckIn, checkOut, setCheckOut } = useCalendarState();

  const handleCalendar = () => {
    const test = changeTypeCheckIn(checkIn);
    const dem = test <= new Date(year, month + 1, day).getTime();

    if (!checkIn) {
      setCheckIn(`${year}-${month + 1}-${day}`);
    }
    if (dem) {
      setCheckOut(`${year}-${month + 1}-${day}`);
    } else {
      setCheckIn(`${year}-${month + 1}-${day}`);
      setCheckOut('');
    }
  };

  const changeTypeCheckIn = (date: string) => {
    const test = date.split('-');
    const wek = new Date(+test[0], +test[1], +test[2]).getTime();
    return wek;
  };

  //리턴
  return day ? (
    <S.Day key={index} onClick={handleCalendar}>
      {day}
    </S.Day>
  ) : (
    <S.PrevDay key={index}>{}</S.PrevDay>
  );
};

export default Days;
