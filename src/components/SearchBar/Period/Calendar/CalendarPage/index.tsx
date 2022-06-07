import React from "react";

import CalendarDate from "@components/SearchBar/Period/Calendar/CalendarDate";
import { DAY_OF_WEEK } from "@constants/calendar";
import { getCalendarArray } from "@utils/calendar";

import * as S from "./style";

const CalendarPage = ({ currDate }: { currDate: Date }) => {
  const currYear = currDate.getFullYear();
  const currMonth = currDate.getMonth();

  const calendarInfo = {
    calendarArray: getCalendarArray(currYear, currMonth),
    year: currYear,
    month: currMonth,
  };

  return (
    <S.CalendarPage>
      <h2>{`${currYear}년 ${currMonth + 1}월`}</h2>
      <S.CalendarContent>
        <CalendarDay />
        <CalendarDate calendarInfo={calendarInfo} />
      </S.CalendarContent>
    </S.CalendarPage>
  );
};

const CalendarDay = () => {
  return (
    <S.CalendarDay>
      {DAY_OF_WEEK.map((day, index) => (
        <S.DayItem key={day + index} day={day}>
          {day}
        </S.DayItem>
      ))}
    </S.CalendarDay>
  );
};

export default React.memo(CalendarPage);
