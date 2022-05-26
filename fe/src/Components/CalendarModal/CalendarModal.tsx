import { getTodayDate } from "Helpers/utils";
import { useState } from "react";
import Calendar from "./Calendar/Calendar";
import { CalenderContainer } from "./CalendarModal.styled";

interface calenderType {
  year?: number;
  month?: number;
  width?: string;
  height?: string;
  backgroundColor?: string;
}

const { year: initYear, month: initMonth } = getTodayDate();

export default function CalendarModal({ width, height, backgroundColor }: calenderType) {
  const checkIn = { year: 2022, month: 5, day: 27 };
  const checkOut = { year: 2022, month: 6, day: 4 };

  const [calendarData, setCalendarData] = useState({ year: initYear, month: initMonth });
  const { year, month } = calendarData;

  const nextMonth = month === 12 ? 1 : month + 1;
  const nextMonthYear = nextMonth === 1 ? year + 1 : year;
  const displayCalendarLength = 2;

  const handlePrevButton = () => {
    const newCalendarData = { year: calendarData.year, month: 0 };
    newCalendarData.month = calendarData.month - displayCalendarLength;
    if (newCalendarData.month < 0) {
      newCalendarData.month = 12 - -newCalendarData.month;
      newCalendarData.year--;
    }
    setCalendarData(newCalendarData);
  };

  const handleNextButton = () => {
    const newCalendarData = { year: calendarData.year, month: 0 };
    newCalendarData.month = calendarData.month + displayCalendarLength;
    if (newCalendarData.month > 12) {
      newCalendarData.month -= 12;
      newCalendarData.year++;
    }
    setCalendarData(newCalendarData);
  };

  return (
    <CalenderContainer
      flex={true}
      justify="space-between"
      width={width}
      height={height}
      backgroundColor={backgroundColor}
    >
      <Calendar
        year={year}
        month={month}
        checkIn={checkIn}
        checkOut={checkOut}
        button={{ prev: true }}
        handlePrevButton={handlePrevButton}
      />
      <Calendar
        year={nextMonthYear}
        month={nextMonth}
        checkIn={checkIn}
        checkOut={checkOut}
        button={{ next: true }}
        handleNextButton={handleNextButton}
      />
    </CalenderContainer>
  );
}
