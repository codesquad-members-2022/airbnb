type DateType = {
  today: Date;
  year: number;
  month: number;
  week: number;
  day: number;
};

type MonthInfo = {
  lastDay: number;
  startDayOfWeek: number;
};

const getDateInfo = (year: number, month: number): DateType => {
  const today = new Date(year, month + 1);
  return {
    today,
    year: today.getFullYear(),
    month: today.getMonth() + 1,
    day: today.getDate(),
    week: today.getDay(),
  };
};

const getTodayDateInfo = (): DateType => {
  const today = new Date();
  return {
    today,
    year: today.getFullYear(),
    month: today.getMonth() + 1,
    day: today.getDate(),
    week: today.getDay(),
  };
};

const getLastDay = (year: number, month: number): number => new Date(year, month, 0).getDate();
const getStartDayOfWeek = (year: number, month: number): number => new Date(year, month - 1, 1).getDay();

const getCurrentMonthInfo = (year: number, month: number): MonthInfo => {
  return {
    lastDay: getLastDay(year, month),
    startDayOfWeek: getStartDayOfWeek(year, month),
  };
};

const getMovedDate = (year: number, month: number, movedCount: number) => {
  let currentMonth = month - 1;
  return (isNext: boolean): { year: number; month: number } => {
    currentMonth += isNext ? movedCount : -movedCount;
    const newDate = new Date(year, currentMonth);
    return {
      year: newDate.getFullYear(),
      month: newDate.getMonth() + 1,
    };
  };
};

export { getDateInfo, getTodayDateInfo, getMovedDate, getCurrentMonthInfo };
