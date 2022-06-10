import React from 'react';

import { DateElement } from 'components/DateElement';

import { IDateInfo, ICalendarInfo } from 'components/Dates/Dates.types';

const classifyPast = (calendarInfo: ICalendarInfo): boolean => {
  const date = new Date(
    `${calendarInfo.year}-${calendarInfo.month}-${calendarInfo.date}`,
  );
  const now = new Date(Date.now());
  const cur = new Date(
    `${now.getFullYear()}-${now.getMonth() + 1}-${now.getDate()}`,
  );

  return cur <= date;
};

export function Dates({
  dateInfo,
  calendarClickCount,
}: IDateInfo): JSX.Element {
  if (dateInfo.date === 0)
    return (
      <DateElement key={dateInfo.id} calendarClickCount={calendarClickCount} />
    );

  const past = classifyPast(dateInfo);

  return (
    <DateElement
      key={dateInfo.id}
      dateInfo={dateInfo}
      past={past}
      calendarClickCount={calendarClickCount}
    />
  );
}
