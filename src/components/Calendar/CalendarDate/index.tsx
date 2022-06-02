import { Key } from "react";

import { useCalendarState } from "@contexts/CalendarProvider";
import { CalendarInfoType, DateTarget } from "@utils/calendar";

import * as S from "./style";

const CalendarDate = ({ calendarInfo }: { calendarInfo: CalendarInfoType }) => {
  const { calendarArray, year, month } = calendarInfo;
  const { checkIn, checkOut } = useCalendarState();

  const handleClickDate = () => {
    // TODO 체크인일때, 체크아웃일 때 클릭
    if (!checkIn) {
      // dispatch-checkin

      // 색깔 칠하기
      ("안녕");
    }
    // && new Date(year, month, date)
  };

  const isPast = (): boolean => {
    return false;
  };

  const getDateTarget = (): DateTarget => {
    return 0;
  };

  return (
    <S.CalendarDate>
      {calendarArray.map((date: number, index: Key) => {
        const dateInfo = {
          date: date,
          dateData: new Date(year, month, date),
          dateTarget: getDateTarget(),
          isPast: isPast,
        };
        return (
          <S.DateItem onClick={handleClickDate} key={index} {...dateInfo}>
            {date || ""}
          </S.DateItem>
        );
      })}
    </S.CalendarDate>
  );
};

export default CalendarDate;
