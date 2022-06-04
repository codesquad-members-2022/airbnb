import CalendarDate from "@components/Calendar/CalendarDate";
import { DAY_OF_WEEK } from "@constants/calendar";
import { getCalendarArray } from "@utils/calendar";

import * as S from "./style";

const CalendarPage = ({ currDate }: { currDate: Date }) => {
  const currYear = currDate.getFullYear();
  const currMonth = currDate.getMonth();

  const calendarTitle = `${currYear}년 ${currMonth + 1}월`;

  const calendarArray = getCalendarArray(currYear, currMonth);

  const calendarInfo = {
    calendarArray: calendarArray,
    year: currYear,
    month: currMonth,
  };

  return (
    <S.CalendarPage>
      <h2>{calendarTitle}</h2>
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
        <S.DayItem key={index}>{day}</S.DayItem>
      ))}
    </S.CalendarDay>
  );
};

export default CalendarPage;
