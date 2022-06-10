import { DAY_OF_WEEK_DATA } from "Helpers/constant";
import { createKey, getTodayDate } from "Helpers/utils";
import { DateType, EventType } from "Helpers/interface";
import { Button, DayArea, MonthDataArea, Monthly, YearMonthArea } from "./Month.styled";
import Day from "./Day/Day";

interface ButtonType {
  prev?: boolean;
  next?: boolean;
}

interface CalendarTypeSkeleton {
  year: number;
  month: number;
  checkIn?: DateType;
  checkOut?: DateType;
}

interface CalendarType extends CalendarTypeSkeleton {
  button: ButtonType;
  handlePrevButton?: () => void;
  handleNextButton?: () => void;
  handleClickDate?: (event: EventType) => void;
}

interface MonthComponentType extends CalendarTypeSkeleton {
  handleClickDate?: (event: EventType) => void;
}

export default function Month({
  year,
  month,
  checkIn,
  checkOut,
  button,
  handlePrevButton,
  handleNextButton,
  handleClickDate,
}: CalendarType) {
  const dayOfWeekComponent = DAY_OF_WEEK_DATA.map((day, idx) => (
    <DayArea key={createKey(day, idx)}>{day}</DayArea>
  ));
  const monthComponent = getMonthComponent({ year, month, checkIn, checkOut, handleClickDate });

  return (
    <Monthly>
      <YearMonthArea flex justify="center">
        {button.prev && (
          <Button type="prev" onClick={handlePrevButton}>
            {"<"}
          </Button>
        )}
        {`${year}년 ${month}월`}
        {button.next && (
          <Button type="next" onClick={handleNextButton}>
            {">"}
          </Button>
        )}
      </YearMonthArea>

      <MonthDataArea>
        {dayOfWeekComponent}
        {monthComponent}
      </MonthDataArea>
    </Monthly>
  );
}

const getMonthComponent = ({ year, month, checkIn, checkOut, handleClickDate }: MonthComponentType) => {
  const today = getTodayDate();

  const firstDayDateNumber = calculateDayOfWeekDate(year, month);
  const monthLastDay = getMonthEndDay(year, month);
  const monthData = new Array(firstDayDateNumber).fill(null);
  for (let i = 1; i <= monthLastDay; i++) {
    monthData.push(i);
  }
  return monthData.map((day, idx) => {
    return (
      <DayArea key={createKey(day, idx)}>
        <Day
          year={year}
          month={month}
          day={day}
          checkIn={checkIn}
          checkOut={checkOut}
          today={today}
          handleClickDate={handleClickDate}
        ></Day>
      </DayArea>
    );
  });
};

const calculateDayOfWeekDate = (year: number, month: number, day: number = 1) => {
  return new Date(year, --month, day).getDay();
};

const getMonthEndDay = (year: number, month: number) => {
  const feb = year % 4 === 0 && (year % 400 === 0 || year % 100 !== 0) ? 29 : 28;
  const [jan, mar, apr, may, jun, jul, aug, sep, oct, nov, dec] = [
    31, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31,
  ];
  const allMonth = [0, jan, feb, mar, apr, may, jun, jul, aug, sep, oct, nov, dec];
  return allMonth[month];
};
