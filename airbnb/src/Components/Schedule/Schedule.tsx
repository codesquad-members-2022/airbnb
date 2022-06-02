import React, { useState } from 'react';
import { ScheduleProps, ScheduleProvider } from '@/Contexts/Schedule/context';
import * as S from './Schedule.style';
import { Calendar } from './Calendar';

export function Schedule({
  startDate,
  endDate,
  setStartDate,
  setEndDate,
}: ScheduleProps): JSX.Element {
  const [currentDate, setCurrentDate] = useState(new Date());

  return (
    <ScheduleProvider
      startDate={startDate}
      endDate={endDate}
      setStartDate={setStartDate}
      setEndDate={setEndDate}
    >
      <S.ScheduleWrapper>
        <button
          type="button"
          onClick={() => {
            setCurrentDate(
              new Date(
                currentDate.getFullYear(),
                currentDate.getMonth() - 1,
                1,
              ),
            );
          }}
        >
          {'<'}
        </button>
        <button
          type="button"
          onClick={() => {
            setCurrentDate(
              new Date(
                currentDate.getFullYear(),
                currentDate.getMonth() + 1,
                1,
              ),
            );
          }}
        >
          {'>'}
        </button>
        <Calendar date={currentDate} />
        <Calendar
          date={
            new Date(currentDate.getFullYear(), currentDate.getMonth() + 1, 1)
          }
        />
      </S.ScheduleWrapper>
    </ScheduleProvider>
  );
}
