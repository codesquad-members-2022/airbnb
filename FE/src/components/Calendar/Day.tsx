import React, { useState } from 'react';

import { CalendarTypes } from '@components/Calendar';
import { useCalendarState } from '@lib/hooks/useContext';

const Day = ({ year, month }: CalendarTypes) => {
  const date = new Date();
  const lastDay = new Date(year, month + 1, 0).getDate();
  const firstDayIndex = new Date(year, month, 1).getDay();
  const lastDayIndex = new Date(date.getFullYear(), month + 1, 0).getDay();
  const nextDays = 7 - lastDayIndex - 1;

  const [isCheckIn, setIsCheckIn] = useState(false);

  const { setCheckIn, setCheckOut } = useCalendarState();

  const [isSelected, setIsSelected] = useState(false);

  const onClick = ({ target }: any) => {
    if (!isCheckIn) {
      setIsSelected(!isSelected);

      setCheckIn(`${month + 1}월 ${target.innerText}일`);
      setIsCheckIn(!isCheckIn);
    } else {
      setCheckOut(`${month + 1}월 ${target.innerText}일`);
    }
  };

  const days = [];

  for (let prev = firstDayIndex; prev > 0; prev--) {
    days.push('');
  }

  for (let i = 1; i <= lastDay; i++) {
    days.push(i);
  }

  for (let j = 1; j <= nextDays; j++) {
    days.push('');
  }

  return (
    <>
      {days.map((day, index) =>
        day != '' ? (
          <button key={index} onClick={onClick}>
            {day}
          </button>
        ) : (
          <button key={index} disabled>
            {}
          </button>
        ),
      )}
    </>
  );
};

export default Day;
