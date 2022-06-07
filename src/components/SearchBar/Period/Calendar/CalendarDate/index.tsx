import React, { useState } from "react";

import { CalendarInfoType } from "_types/calendar";

import DateItem from "@components/SearchBar/Period/Calendar/DateItem";
import { getDate } from "@utils/calendar";

import * as S from "./style";

const CalendarDate = ({ calendarInfo }: { calendarInfo: CalendarInfoType }) => {
  const { calendarArray, year, month } = calendarInfo;

  return (
    <S.CalendarDate>
      {calendarArray.map((date: number, index) => {
        const currDate = getDate(year, month, date);

        return <DateItem currDate={currDate} date={date} key={currDate.getTime() + index} />;
      })}
    </S.CalendarDate>
  );
};

export default React.memo(CalendarDate);
