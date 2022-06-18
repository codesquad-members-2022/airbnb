import React, { useContext, useEffect } from 'react';
import * as Styled from 'components/calender/components/Month/month.style';
import Day from 'components/calender/components/Day';
import { DateContext } from 'components/calender/context';

export interface MonthProps {
  year: number;
  month: number;
  lastDay: number;
  startDayOfWeek: number;
  filter: Set<number>;
}

const getDayInfo = (index: number, year: number, month: number, startDayOfWeek: number) => {
  return {
    year,
    month,
    day: index + 1,
    week: (startDayOfWeek + index) % 7,
  };
};

const getKey = (length: number, index: number) => {
  return length - (length - index);
};

const getDayState = (today: Date, period, filter: Set<number>) => {
  const { checkIn, checkOut } = period || {};

  return {
    isCheckIn: +checkIn === +today,
    isCheckOut: +checkOut === +today,
    isIncluded: checkIn <= today && checkOut >= today,
    isDisabled: filter?.has(today.getDate()) || false,
  };
};

function Month({ year, month, lastDay, startDayOfWeek, filter }: MonthProps) {
  const {
    state: { period },
  } = useContext(DateContext);
  return (
    <Styled.MonthContainer>
      {startDayOfWeek > 0 && <Styled.MonthItem startDayOfWeek={startDayOfWeek} />}
      {[...new Array(lastDay)].map((_, index) => (
        <Styled.MonthItem key={getKey(startDayOfWeek, index)}>
          <Day
            info={getDayInfo(index, year, month, startDayOfWeek)}
            {...getDayState(new Date(year, month - 1, index + 1), period, filter)}
          />
        </Styled.MonthItem>
      ))}
    </Styled.MonthContainer>
  );
}

export default Month;
