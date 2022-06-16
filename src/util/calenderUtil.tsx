export type YearMonthType = {
  year: number;
  month: number;
};

const isTwoDateSame = (d1: Date, d2: Date) => d1.toLocaleDateString() === d2.toLocaleDateString();

const getCurrentYearMonth = (): YearMonthType => {
  const year = new Date().getFullYear();
  const month = new Date().getMonth() + 1;
  return { year, month };
};

const getFirstDayIdx = (year: number, month: number): number => {
  const firstDate = new Date(year, month - 1, 1);
  return firstDate.getDay();
};

const getLastDate = (year: number, month: number): number => {
  const lastDate = new Date(year, month, 0);
  return lastDate.getDate();
};

const splitDatesToWeeks = (firstDayIdx: number, lastDate: number) => {
  const weeks = [];
  let week = [];

  for (let i = 1 - firstDayIdx; i <= lastDate; i += 1) {
    week.push(i);
    if ((firstDayIdx + i) % 7 === 0) {
      weeks.push(week);
      week = [];
    }
    if (i === lastDate) weeks.push(week);
  }
  return weeks;
};

const calYearMonth = (baseYearMonth: YearMonthType) => (changedMonth: number) => {
  let tempYear = baseYearMonth.year;
  let tempMonth = baseYearMonth.month + changedMonth;
  if (tempMonth <= 0) {
    tempYear -= 1;
    tempMonth += 12;
  } else if (tempMonth >= 13) {
    tempMonth -= 12;
    tempYear += 1;
  }

  return { year: tempYear, month: tempMonth };
};

const getIsPastDate = (now: Date, target: Date) => target < now && !isTwoDateSame(target, now);

const getMonthDateString = (date: Date) => `${date.getMonth() + 1}월 ${date.getDate()}일`;

const calDifferenceDate = (date1: Date, date2: Date) => {
  return Math.abs((date1 - date2) / (1000 * 3600 * 24));
};
export {
  getCurrentYearMonth,
  getFirstDayIdx,
  getLastDate,
  splitDatesToWeeks,
  calYearMonth,
  isTwoDateSame,
  getIsPastDate,
  getMonthDateString,
  calDifferenceDate,
};
