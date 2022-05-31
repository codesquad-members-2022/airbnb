import { createKey } from "Helpers/utils";
import Month from "./Month/Month";
import { CalendarContainer } from "./Calendar.styled";
import { DateType, EventType } from "Helpers/interface";
import { MODAL_REF_IDX } from "Helpers/constant";

interface CalendarDateType {
  year: number;
  month: number;
  day?: number;
}

interface CalendarType {
  calendarShowCount?: number;
  columnCount?: number;
  calendarModalStyle?: string;
  checkIn?: DateType;
  checkOut?: DateType;
  calendarData: CalendarDateType;
  calendarRef?: React.MutableRefObject<HTMLElement[] | null[]>;
  handlePrevButton?: () => void;
  handleNextButton?: () => void;
  handleClickDate?: (event: EventType) => void;
}

interface MonthInfoType {
  prevMonth: number;
  prevYear: number;
}

const DECEMBER = 12;
const JANUARY = 1;
const COLUMN_COUNT_IDX_OFFSET = 2;
const FIRST_IDX = 0;

const getNextMonthInfo = ({ prevMonth, prevYear }: MonthInfoType) => {
  const nextMonth = prevMonth === DECEMBER ? JANUARY : prevMonth + 1;
  const nextMonthYear = nextMonth === JANUARY ? prevYear + 1 : prevYear;
  return { nextMonth, nextMonthYear };
};

export default function Calendar({
  calendarShowCount,
  columnCount,
  calendarModalStyle,
  checkIn,
  checkOut,
  calendarData,
  handlePrevButton,
  handleNextButton,
  handleClickDate,
  calendarRef,
}: CalendarType) {
  const { year, month } = calendarData;
  const displayCalendarLength = calendarShowCount || 2;

  const firstCalendar = (
    <Month
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
        <Month
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
      <Month
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
    <CalendarContainer
      ref={(el) => calendarRef && (calendarRef.current[MODAL_REF_IDX] = el)}
      columnCount={columnCount}
      calendarModalStyle={calendarModalStyle}
    >
      {firstCalendar}
      {nextCalendar}
    </CalendarContainer>
  );
}
