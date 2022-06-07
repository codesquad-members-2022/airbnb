import { DirectionType } from "_types/calendar";

export const getDate = (year: number, month: number, date: number | undefined): Date => {
  return new Date(year, month, date);
};

// 달의 첫번째 날의 요일 구하기
export const getFirstDay = (year: number, month: number) => {
  const firstDay = new Date(year, month, 0).getDay() + 1;
  return firstDay === 7 ? 0 : firstDay;
};

// 달의 마지막 날 구하기
export const getLastDate = (year: number, month: number) => {
  const lastDate = new Date(year, month + 1, 0).getDate();
  return lastDate;
};

// 달력 배열 만들기
export const getCalendarArray = (year: number, month: number) => {
  const firstDay = getFirstDay(year, month);
  const lastDate = getLastDate(year, month);

  const calendarArray = Array.from({ length: lastDate + firstDay }, (_, index) => {
    return index < firstDay ? 0 : index - firstDay + 1;
  });
  return calendarArray;
};

// 방향에 따른 페이지 옮기기
export const getDirectionValue = (direction: DirectionType) => {
  switch (direction) {
    case "FORWARD":
      return -1;
    case "BACKWARD":
      return +1;
    default:
      return 0;
  }
};

export const getCheckInTemplate = (date: Date | null): string | null => {
  if (!date) {
    return null;
  }

  const month = Number(date?.getMonth()) + 1;
  const year = Number(date?.getDate());
  return `${month}월${year}일`;
};

export const isSameTime = (DATE_1: Date | null, DATE_2: Date | null): boolean => {
  return DATE_1?.getTime() === DATE_2?.getTime();
};

type IsBetweenTimeType = {
  min: Date | null;
  currDate: Date | null;
  max: Date | null;
};

export const isBetweenTime = ({ min, currDate, max }: IsBetweenTimeType) => {
  if (!min || !currDate || !max) {
    return false;
  }

  return min < currDate && max > currDate;
};

export const getStyleDateTarget = ({ min, currDate, max }: IsBetweenTimeType) => {
  if (isSameTime(currDate, min) || isSameTime(currDate, max)) {
    return "CHECK";
  }

  if (min && max && isBetweenTime({ min, currDate, max })) {
    return "BETWEEN";
  }

  return null;
};
