import React from 'react';

import { DAYS } from 'constant';

import { Dates } from 'components/Dates';

import {
  ICalendarInfo,
  ICalendarInfos,
  ICalendarProps,
} from 'components/Calendar/Calendar.types';

import { CustomDate } from 'common/util';

import {
  CarouselItem,
  CalendarTitle,
  CalendarContent,
  Week,
  WeekCell,
  DatesContainer,
} from './Calendar.styled';

function createTotalDatesInfo(
  totalDate: number,
  firstDayOfMonth: number,
  dateInfo: ICalendarInfo,
): ICalendarInfos[] {
  const dates = Array.from(new Array(totalDate), (_, i) => {
    if (i <= firstDayOfMonth) return { id: i, year: 0, month: 0, date: 0 };

    return {
      id: i,
      year: dateInfo.year,
      month: dateInfo.month,
      date: i - firstDayOfMonth,
    };
  });

  return dates;
}

export function Calendar({
  calendarInfo,
  calendarClickCount,
}: ICalendarProps): JSX.Element {
  const myCustomDate = new CustomDate(calendarInfo.year, calendarInfo.month);
  const curMonthOneDateDay = myCustomDate.getFirstDayOfCurMonth();
  const curMonthTotalDate = myCustomDate.getDatesOfCurMonth();
  const totalDates = curMonthOneDateDay + curMonthTotalDate;
  const calendarDateInfos: ICalendarInfos[] = createTotalDatesInfo(
    totalDates,
    curMonthOneDateDay - 1,
    calendarInfo,
  );

  const week = DAYS.map(day => <WeekCell key={day}>{day}</WeekCell>);

  const datesCells = calendarDateInfos.map(dateInfo => (
    <Dates
      key={dateInfo.id}
      dateInfo={dateInfo}
      calendarClickCount={calendarClickCount}
    />
  ));

  return (
    <CarouselItem>
      <CalendarTitle>
        {calendarInfo.year}년 {calendarInfo.month}월
      </CalendarTitle>
      <CalendarContent>
        <Week>{week}</Week>
        <DatesContainer>{datesCells}</DatesContainer>
      </CalendarContent>
    </CarouselItem>
  );
}
