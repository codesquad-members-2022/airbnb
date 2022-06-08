import React, { useContext, useState } from 'react';

import { CalendarContext, CalenderContextTypes } from '@context/Provider';

export interface Calendertypes {
  year: number;
  month: number;
}

const Day = ({ year, month }: Calendertypes) => {
  const date = new Date();
  const lastDay = new Date(year, month + 1, 0).getDate();
  const firstDayIndex = new Date(year, month, 1).getDay();
  const lastDayIndex = new Date(date.getFullYear(), month + 1, 0).getDay();
  const nextDays = 7 - lastDayIndex - 1;

  const [isCheckIn, setIsCheckIn] = useState(false);

  const { setCheckIn, setCheckOut } = useContext<CalenderContextTypes>(CalendarContext);

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
