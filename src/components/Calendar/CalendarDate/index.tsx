import { DateTarget } from "@constants/calendar";
import { useCalendarDispatch, useCalendarState } from "@contexts/CalendarProvider";
import { CalendarInfoType, getDate } from "@utils/calendar";

import * as S from "./style";

const CalendarDate = ({ calendarInfo }: { calendarInfo: CalendarInfoType }) => {
  const { calendarArray, year, month } = calendarInfo;
  const { checkIn, checkOut } = useCalendarState();
  const { onCheckIn, onCheckOut, onCheckRemove } = useCalendarDispatch();

  const handleClickDate = (dateData: Date) => {
    // TODO 체크인일때, 체크아웃일 때 구분
    if (!checkIn) {
      onCheckIn(dateData);
    }

    if (checkIn) {
      onCheckOut(dateData);
    }
  };

  const isPast = (dateData: number | Date): boolean => {
    const today = new Date();
    return dateData < today;
  };

  const getDateTarget = (): DateTarget => {
    return 0;
  };

  return (
    <S.CalendarDate>
      {calendarArray.map((date: number, index) => {
        const dateInfo = {
          date: date,
          dateData: getDate(year, month, date),
          dateTarget: getDateTarget(),
          isPast: date ? isPast(getDate(year, month, date)) : false,
        };

        return (
          <S.DateItem
            onClick={() => !dateInfo.isPast && handleClickDate(dateInfo.dateData)}
            key={dateInfo.dateData.getTime() + index}
            {...dateInfo}
          >
            {date || ""}
          </S.DateItem>
        );
      })}
    </S.CalendarDate>
  );
};

export default CalendarDate;
