import { createKey } from "Helpers/utils";
import Calendar from "./Calendar/Month";
import { CalendarContainer } from "./Calendar.styled";
import { dateType, eventType } from "Helpers/interface";

interface calendarDateType {
  year: number;
  month: number;
  day?: number;
}

interface calendarType {
  calendarShowCount?: number;
  columnCount?: number;
  calendarModalStyle?: string;
  checkIn?: dateType;
  checkOut?: dateType;
  calendarData: calendarDateType;
  handlePrevButton?: () => void;
  handleNextButton?: () => void;
  handleClickDate?: (event: eventType) => void;
}

interface monthInfoType {
  prevMonth: number;
  prevYear: number;
}

const DECEMBER = 12;
const JANUARY = 1;
const COLUMN_COUNT_IDX_OFFSET = 2;
const FIRST_IDX = 0;

const getNextMonthInfo = ({ prevMonth, prevYear }: monthInfoType) => {
  const nextMonth = prevMonth === DECEMBER ? JANUARY : prevMonth + 1;
  const nextMonthYear = nextMonth === JANUARY ? prevYear + 1 : prevYear;
  return { nextMonth, nextMonthYear };
};

export default function CalendarModal({
  calendarShowCount,
  columnCount,
  calendarModalStyle,
  checkIn,
  checkOut,
  calendarData,
  handlePrevButton,
  handleNextButton,
  handleClickDate,
}: calendarType) {
  const { year, month } = calendarData;
  const displayCalendarLength = calendarShowCount || 2;

  const firstCalendar = (
    <Calendar
      year={year}
      month={month}
      checkIn={checkIn}
      checkOut={checkOut}
      button={{ prev: true }}
      handlePrevButton={handlePrevButton}
      handleClickDate={handleClickDate}
    />
  );

  const monthInfo = new Array(displayCalendarLength - 1).fill({ month, year });
  const nextCalendar = monthInfo.map(({ month, year }, idx) => {
    const { nextMonth, nextMonthYear } = getNextMonthInfo({ prevMonth: month, prevYear: year });
    const idxOffset = 1;
    monthInfo[idx + idxOffset] = { month: nextMonth, year: nextMonthYear };

    if (
      (columnCount && columnCount - COLUMN_COUNT_IDX_OFFSET === idx) ||
      (!columnCount && idx === FIRST_IDX)
    ) {
      return (
        <Calendar
          key={createKey(month + year, idx)}
          year={nextMonthYear}
          month={nextMonth}
          checkIn={checkIn}
          checkOut={checkOut}
          button={{ next: true }}
          handleNextButton={handleNextButton}
          handleClickDate={handleClickDate}
        />
      );
    }

    return (
      <Calendar
        key={createKey(month + year, idx)}
        year={nextMonthYear}
        month={nextMonth}
        checkIn={checkIn}
        checkOut={checkOut}
        button={{}}
        handleClickDate={handleClickDate}
      />
    );
  });

  return (
    <CalendarContainer columnCount={columnCount} calendarModalStyle={calendarModalStyle}>
      {firstCalendar}
      {nextCalendar}
    </CalendarContainer>
  );
}
