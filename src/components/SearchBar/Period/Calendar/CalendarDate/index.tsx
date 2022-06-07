import React, { useState } from "react";

import { CalendarInfoType } from "_types/calendar";

import { useCalendarDispatch, useCalendarState } from "@contexts/CalendarProvider";
import { getDate, isSameTime, isBetweenTime, getStyleDateTarget } from "@utils/calendar";

import * as S from "./style";

const CalendarDate = ({ calendarInfo }: { calendarInfo: CalendarInfoType }) => {
  const { calendarArray, year, month } = calendarInfo;
  const { checkIn, checkOut, checkHover } = useCalendarState();
  const { onCheckIn, onCheckOut, onCheckHover, onCheckRemove } = useCalendarDispatch();

  const handleCheckDate = (dateData: Date) => {
    if (isPast(dateData)) {
      return;
    }

    switch (true) {
      case !checkIn:
        onCheckIn(dateData);
        break;

      case !!checkIn && dateData < checkIn:
        onCheckRemove();
        onCheckIn(dateData);
        break;

      case !!checkIn:
        onCheckOut(dateData);
        break;

      default:
        throw new Error("Invalid dateClick");
    }
  };

  const handleHoverDate = (dateData: Date) => {
    if (!checkIn || checkOut) {
      return;
    }

    onCheckHover(dateData);
  };

  const isPast = (dateData: number | Date): boolean => {
    const today = new Date();
    return dateData < today;
  };

  return (
    <S.CalendarDate>
      {calendarArray.map((date: number, index) => {
        const currDate = getDate(year, month, date);

        return (
          <S.DateItem
            onClick={() => date && handleCheckDate(currDate)}
            onMouseEnter={() => date && handleHoverDate(currDate)}
            key={currDate.getTime() + index}
            date={date}
            dateData={getDate(year, month, date)}
            dateTarget={getStyleDateTarget({ min: checkIn, currDate: currDate, max: checkOut || checkHover })}
            isPast={date ? isPast(currDate) : false}
          >
            {date || ""}
          </S.DateItem>
        );
      })}
    </S.CalendarDate>
  );
};

export default React.memo(CalendarDate);
