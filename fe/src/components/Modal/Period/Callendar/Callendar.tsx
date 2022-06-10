import React, { Dispatch, useState } from 'react';
import { ReactComponent as LeftIcon } from 'img/svg/left.svg';
import { ReactComponent as RightIcon } from 'img/svg/right.svg';
import { addSearchType } from 'components/SearchBar/types';
import { StyledCallendar, CallendarTitle, DayOfWeek, PastDay, FutureDay } from './Callendar.styled';

interface CallendarType {
  callendarNum: number;
  checkIn: number;
  checkOut: number;
  addSearch: Dispatch<addSearchType>;
}

const getToday = () => {
  const date = new Date();
  const year = date.getFullYear();
  const month = date.getMonth() + 1;
  const today = date.getDate();
  return [year, month, today];
};

export default function Callendar({ callendarNum, checkIn, checkOut, addSearch }: CallendarType): JSX.Element {
  const firstWeekMaxNum = 7;
  const [year, month, today] = getToday();
  const [currentMonth, setCurrentMonth] = useState(month);

  const setdaysArray = (newYear: number, newMonth: number) => {
    let dayCount = 1;
    const daysArray: number[][] = [];
    const lastDate = new Date(newYear, newMonth, 0).getDate();
    const firstDay = new Date(newYear, newMonth - 1, 1).getDay();
    const weekCount = Math.ceil((firstDay + lastDate) / firstWeekMaxNum);

    for (let week = 0; week < weekCount; week += 1) {
      daysArray[week] = [];
      for (let day = 0; day < firstWeekMaxNum; day += 1) {
        const isPreviousMonth = week === 0 && firstDay > day;
        if (isPreviousMonth) {
          const prevMonthDay = new Date(year, newMonth - 1, -day).getDate();
          daysArray[week].unshift(prevMonthDay);
        } else if (dayCount > lastDate) {
          break;
        } else {
          daysArray[week].push(dayCount);
          dayCount += 1;
        }
      }
    }
    return daysArray;
  };

  const getPeriod = (selectedYear: number, selectedMonth: number, selectedDay: number) => {
    const numToString = (num) => (num < 10 ? `0${num.toString()}` : num.toString());
    const period = Number(numToString(selectedYear) + numToString(selectedMonth) + numToString(selectedDay));
    return period;
  };

  const checkPeriod = (callendarYear: number, callendarMonth: number, day: number, type: string) => {
    const currentPeriod = getPeriod(callendarYear, callendarMonth, day);

    switch (type) {
      case 'checkDate':
        return checkIn === currentPeriod || checkOut === currentPeriod;
      case 'period':
        return checkIn < currentPeriod && checkOut > currentPeriod;
      default:
        return false;
    }
  };

  const isPastDay = (index: number, callendarYear: number, callendarMonth: number, day: number) => {
    const isPreviousMonth = index === 0 && day > firstWeekMaxNum;
    const isBeforeToday = getPeriod(callendarYear, callendarMonth, day) < getPeriod(year, month, today);
    return isPreviousMonth || isBeforeToday;
  };

  const getDow = () => {
    const dow = ['일', '월', '화', '수', '목', '금', '토'];
    const dowRow = dow.map((day) => <DayOfWeek key={day}>{day}</DayOfWeek>);
    return dowRow;
  };

  const handlePeriod = (callendarYear: number, callendarMonth: number, day: number) => {
    const period = getPeriod(callendarYear, callendarMonth, day).toString();
    const isBeforeCheckIn = (newPeriod) => checkIn > Number(newPeriod);
    const type = !checkIn || isBeforeCheckIn(period) ? 'checkIn' : 'checkOut';

    addSearch({
      type: 'SET_PERIOD',
      value: {
        [type]: period,
      },
    });
  };

  const seperateDay = (index: number, callendarYear: number, callendarMonth: number, day: number) => {
    if (isPastDay(index, callendarYear, callendarMonth, day)) return <PastDay key={day}>{day}</PastDay>;
    return (
      <FutureDay
        key={day}
        isCheckDate={checkPeriod(callendarYear, callendarMonth, day, 'checkDate')}
        isPeriod={checkPeriod(callendarYear, callendarMonth, day, 'period')}
        onClick={() => handlePeriod(callendarYear, callendarMonth, day)}
      >
        {day}
      </FutureDay>
    );
  };

  const getCallendarArray = (num: number) => {
    const initArray = new Array(num).fill(true);

    const getCallendarDate = (newMonth: number) => {
      const newDate = new Date(year, newMonth);
      const callendarMonth = newDate.getMonth() || 12;
      const callendarYear = callendarMonth === 12 ? newDate.getFullYear() - 1 : newDate.getFullYear();
      return [callendarYear, callendarMonth];
    };

    const callendarArray = initArray.map((e, i) => getCallendarDate(currentMonth + i));
    return callendarArray;
  };

  const callendarArray = getCallendarArray(callendarNum);

  const handleCallendar = (type: string) => {
    const newMonth = type === 'prev' ? currentMonth - callendarNum : currentMonth + callendarNum;
    setCurrentMonth(newMonth);
  };

  return (
    <>
      {callendarArray.map(([callendarYear, callendarMonth], i) => (
        <StyledCallendar key={`${callendarYear}-${callendarMonth}`}>
          <thead>
            <tr>
              {i === 0 && (
                <td>
                  <button className="left" type="button" onClick={() => handleCallendar('prev')}>
                    <LeftIcon />
                  </button>
                </td>
              )}
              <th colSpan={firstWeekMaxNum - 1}>
                <CallendarTitle>{`${callendarYear}년 ${callendarMonth}월`}</CallendarTitle>
              </th>
              {i === callendarArray.length - 1 && (
                <td>
                  <button className="right" type="button" onClick={() => handleCallendar('next')}>
                    <RightIcon />
                  </button>
                </td>
              )}
            </tr>
          </thead>
          <tbody>
            <tr>{getDow()}</tr>
            {setdaysArray(callendarYear, callendarMonth).map((week, index) => (
              <tr key={`week-${week[index]}`}>
                {week.map((day) => seperateDay(index, callendarYear, callendarMonth, day))}
              </tr>
            ))}
          </tbody>
        </StyledCallendar>
      ))}
    </>
  );
}
