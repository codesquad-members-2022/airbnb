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
  const clickedDate = { year, month, day };

  const today = new Date();
  const dayInMonth = (year: number, month: number, day: number) => {
    return new Date(year, month, day).toLocaleDateString();
  };
  const comparedDay = dayInMonth(year, month, day);

  const getPrevDay = (today: Date, comparedDay: string) => {
    const daysInMonth = new Date(today);
    const prevDaysInMonth = new Date(comparedDay);
    return daysInMonth >= prevDaysInMonth;
  };
  const isDisabledDay = getPrevDay(today, comparedDay);

  const handleCalendar = () => {
    const strDay = getDaySize(checkIn);
    const isCompareDay = strDay <= new Date(year, month + 1, day).getTime();

    if (!checkIn) {
      setCheckIn(`${year}-${month + 1}-${day}`);
    }
    if (isCompareDay) {
      setCheckOut(`${year}-${month + 1}-${day}`);
    } else {
      setCheckIn(`${year}-${month + 1}-${day}`);
      setCheckOut('');
    }
  };

  const getDaySize = (date: string) => {
    const strDay = date.split('-');
    const strDaySize = new Date(+strDay[0], +strDay[1], +strDay[2]).getTime();
    return strDaySize;
  };

  const isClickedDay = (checkIn: string, clickedDate: DateTypes) => {
    const strDay = checkIn.split('-');
    if (+strDay[0] !== clickedDate.year) return false;
    if (+strDay[1] !== clickedDate.month + 1) return false;
    if (+strDay[2] !== clickedDate.day) return false;
    return true;
  };
  const isCheckIn = isClickedDay(checkIn, clickedDate);
  const isCheckOut = isClickedDay(checkOut, clickedDate);
  const isClicked: boolean = isCheckIn || isCheckOut;

  const checkInDate = getDaySize(checkIn);
  const checkOutDate = getDaySize(checkOut);
  const isBetweenDays =
    checkInDate <= new Date(year, month + 1, day).getTime() &&
    new Date(year, month + 1, day).getTime() <= checkOutDate;

  return day ? (
    <S.Day
      key={index}
      onClick={handleCalendar}
      disabled={isDisabledDay}
      isClicked={isClicked}
      isBetweenDays={isBetweenDays}
    >
      {day}
    </S.Day>
  ) : (
    <S.PrevDay key={index}>{}</S.PrevDay>
  );
};

export default Days;
