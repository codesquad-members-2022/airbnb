import React, { useCallback } from "react";

import { useCalendarDispatch, useCalendarState } from "@contexts/CalendarProvider";
import { getStyleDateTarget, isPast, isSunday } from "@utils/calendar";

import * as S from "./style";

type DateItemProps = {
  currDate: Date;
  date: number;
};

const DateItem = ({ currDate, date }: DateItemProps) => {
  const { checkIn, checkOut, checkHover } = useCalendarState();
  const { onCheckIn, onCheckOut, onCheckHover, onCheckRemove } = useCalendarDispatch();

  const handleCheckDate = useCallback(
    (dateData: Date) => {
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
    },
    [checkIn, onCheckIn, onCheckOut, onCheckRemove],
  );

  const handleHoverDate = (dateData: Date) => {
    if (!checkIn || checkOut) {
      return;
    }

    onCheckHover(dateData);
  };

  return (
    <S.DateItem
      onClick={() => date && handleCheckDate(currDate)}
      onMouseEnter={() => date && handleHoverDate(currDate)}
      date={date}
      dateTarget={getStyleDateTarget({ min: checkIn, currDate: currDate, max: checkOut || checkHover })}
      isSunday={isSunday(currDate)}
      isPast={date ? isPast(currDate) : false}
    >
      {date || ""}
    </S.DateItem>
  );
};

export default React.memo(DateItem);
