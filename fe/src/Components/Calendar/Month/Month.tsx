import { DAY_OF_WEEK_DATA } from "Helpers/constant";
import { createKey, getTodayDate } from "Helpers/utils";
import { DateType, EventType } from "Helpers/interface";
import {
  ActiveDay,
  Button,
  Day,
  InActiveDay,
  MonthDataArea,
  Monthly,
  StyledCheckInOut,
  YearMonthArea,
} from "./Month.styled";

interface ButtonType {
  prev?: boolean;
  next?: boolean;
}

interface CheckInOutType extends DateType {
  checkIn: DateType;
  checkOut: DateType;
}

interface DateCheckType extends DateType {
  checkTarget: DateType;
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

interface DayComponentType extends CalendarTypeSkeleton {
  day: number;
  today: DateType;
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
  const dayOfWeekComponent = DAY_OF_WEEK_DATA.map((day, idx) => <Day key={createKey(day, idx)}>{day}</Day>);
  const monthComponent = getMonthComponent({ year, month, checkIn, checkOut, handleClickDate });

  return (
    <Monthly>
      <YearMonthArea flex={true} justify="center">
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
      <Day key={createKey(day, idx)}>
        {day && createDayComponent({ year, month, day, checkIn, checkOut, today, handleClickDate })}
      </Day>
    );
  });
};

const calculateDayOfWeekDate = (year: number, month: number, day: number = 1) => {
  const dayOfWeek = new Date(year, --month, day).getDay();
  return dayOfWeek;
};

const inspectInActiveCondition = ({ year, month, day, checkTarget }: DateCheckType) => {
  if (year < checkTarget.year) {
    return true;
  }
  if (year === checkTarget.year && month < checkTarget.month) {
    return true;
  }
  if (year === checkTarget.year && month === checkTarget.month && day < checkTarget.day) {
    return true;
  }
  return false;
};

const inspectCheckInOutDay = ({ year, month, day, checkTarget }: DateCheckType) => {
  return year === checkTarget.year && month === checkTarget.month && day === checkTarget.day;
};

const inspectActiveCondition = ({ year, month, day, checkIn, checkOut }: CheckInOutType) => {
  const afterCheckIn =
    year > checkIn.year ||
    (year === checkIn.year && ((month === checkIn.month && day >= checkIn.day) || month > checkIn.month));
  const beforeCheckOut =
    year < checkOut.year ||
    (year === checkOut.year && ((month === checkOut.month && day <= checkOut.day) || month < checkOut.month));
  return afterCheckIn && beforeCheckOut;
};

const createDayComponent = ({
  year,
  month,
  day,
  checkIn,
  checkOut,
  today,
  handleClickDate,
}: DayComponentType) => {
  if (!checkIn || !checkOut) {
    return day;
  }

  if (inspectInActiveCondition({ year, month, day, checkTarget: today })) {
    return <InActiveDay>{day}</InActiveDay>;
  }

  if (inspectCheckInOutDay({ year, month, day, checkTarget: checkIn })) {
    return (
      <ActiveDay radius="30px 0 0 30px" onClick={handleClickDate}>
        <StyledCheckInOut data-year={year} data-month={month} data-day={day}>
          {day}
        </StyledCheckInOut>
      </ActiveDay>
    );
  }
  if (inspectCheckInOutDay({ year, month, day, checkTarget: checkOut })) {
    return (
      <ActiveDay radius="0 30px 30px 0" onClick={handleClickDate}>
        <StyledCheckInOut data-year={year} data-month={month} data-day={day}>
          {day}
        </StyledCheckInOut>
      </ActiveDay>
    );
  }

  if (inspectActiveCondition({ year, month, day, checkIn, checkOut })) {
    return (
      <ActiveDay data-year={year} data-month={month} data-day={day} onClick={handleClickDate}>
        {day}
      </ActiveDay>
    );
  }

  return (
    <Day data-test="??" data-year={year} data-month={month} data-day={day} onClick={handleClickDate}>
      {day}
    </Day>
  );
};

const getMonthEndDay = (year: number, month: number) => {
  const feb = year % 4 === 0 && (year % 400 === 0 || year % 100 !== 0) ? 29 : 28;
  const [jan, mar, apr, may, jun, jul, aug, sep, oct, nov, dec] = [
    31, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31,
  ];
  const allMonth = [0, jan, feb, mar, apr, may, jun, jul, aug, sep, oct, nov, dec];
  return allMonth[month];
};
