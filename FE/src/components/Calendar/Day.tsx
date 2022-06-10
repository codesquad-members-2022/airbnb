import React from 'react';

import { CalendarTypes } from '@components/Calendar';
import Test from '@components/Calendar/Test';

const Day = ({ year, month }: CalendarTypes) => {
  const date = new Date();
  const daysInCurMonth = new Date(year, month + 1, 0).getDate();
  const daysInPrevMonth = new Date(year, month, 1).getDay();
  const lastDayIndex = new Date(date.getFullYear(), month + 1, 0).getDay();
  const daysInNextMonth = 7 - lastDayIndex - 1;

  const days = [];
  for (let prevDay = daysInPrevMonth; prevDay > 0; prevDay--) {
    days.push(0);
  }
  for (let i = 1; i <= daysInCurMonth; i++) {
    days.push(i);
  }
  for (let nextDay = 1; nextDay <= daysInNextMonth; nextDay++) {
    days.push(0);
  }
  return (
    <>
      {days.map((day, index) => (
        <Test year={year} month={month} day={day} index={index} />
      ))}
    </>
  );
};

export default Day;
