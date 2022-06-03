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

const prevMonthInfo = (year: number, month: number) => {
  let currentMonth = month;
  return (): MonthInfo => {
    currentMonth -= 1;
    return {
      lastDay: getLastDay(year, currentMonth),
      startDayOfWeek: getStartDayOfWeek(year, currentMonth),
    };
  };
};

const nextMonthInfo = (year: number, month: number) => {
  let currentMonth = month;
  return (): MonthInfo => {
    currentMonth += 1;
    return {
      lastDay: getLastDay(year, currentMonth),
      startDayOfWeek: getStartDayOfWeek(year, currentMonth),
    };
  };
};

export { getTodayDateInfo, getCurrentMonthInfo, prevMonthInfo, nextMonthInfo };
