import Calendar from "Components/Calendar/Calendar";
import { getTodayDate } from "Helpers/utils";
import { useState } from "react";
import { DateType, EventType } from "Helpers/interface";
import { useOutsideClick } from "Hook/useOutsideClick";
import { useCalendar } from "Context/CalendarProvider";

interface compareCheckInType extends DateType {
  checkIn: DateType;
}

interface dispatchType extends DateType {
  type: string;
}

const { year: initYear, month: initMonth } = getTodayDate();

export default function CalendarModal({ calendarRef, calendarStyle }: any) {
  const [calendarData, setCalendarData] = useState({ year: initYear, month: initMonth });
  const [calendarState, dispatchCalendar] = useCalendar();

  const { checkIn, checkOut, isCalendarOpen } = calendarState;
  const calendarShowCount = 2;

  const runDispatchCalendar = ({ year, month, day, type }: dispatchType) => {
    dispatchCalendar({
      type: `${type}`,
      year: Number(year),
      month: Number(month),
      day: Number(day),
    });
  };

  const handlePrevButton = () => {
    const newCalendarData = { year: calendarData.year, month: 0 };
    newCalendarData.month = calendarData.month - calendarShowCount;
    if (newCalendarData.month < 0) {
      newCalendarData.month = 12 - -newCalendarData.month;
      newCalendarData.year--;
    }
    setCalendarData(newCalendarData);
  };

  const handleNextButton = () => {
    const newCalendarData = { year: calendarData.year, month: 0 };
    newCalendarData.month = calendarData.month + calendarShowCount;
    if (newCalendarData.month > 12) {
      newCalendarData.month -= 12;
      newCalendarData.year++;
    }
    setCalendarData(newCalendarData);
  };

  const handleClickDate = ({ target }: EventType) => {
    const { year, month, day } = target.dataset;

    if (checkIn.day === 0) {
      runDispatchCalendar({ type: "SET_CHECK_IN", year, month, day });
      return;
    }

    if (isFasterThanCheckIn({ year, month, day, checkIn })) {
      runDispatchCalendar({ type: "SET_CHECK_IN", year, month, day });
      return;
    }

    runDispatchCalendar({ type: "SET_CHECK_OUT", year, month, day });
  };

  const handleOutsideClick = () => {
    dispatchCalendar({
      type: "CLOSE",
    });
  };

  useOutsideClick(calendarRef, handleOutsideClick);

  return (
    isCalendarOpen && (
      <Calendar
        calendarRef={calendarRef}
        calendarShowCount={calendarShowCount}
        columnCount={2}
        calendarStyle={calendarStyle}
        checkIn={checkIn}
        checkOut={checkOut}
        calendarData={calendarData}
        handlePrevButton={handlePrevButton}
        handleNextButton={handleNextButton}
        handleClickDate={handleClickDate}
      />
    )
  );
}

const isFasterThanCheckIn = ({ year, day, month, checkIn }: compareCheckInType) => {
  [year, day, month] = [year, day, month].map(Number);
  if (year < checkIn.year) {
    return true;
  }
  if (year === checkIn.year && month < checkIn.month) {
    return true;
  }
  if (year === checkIn.year && month === checkIn.month && day <= checkIn.day) {
    return true;
  }
  return false;
};
