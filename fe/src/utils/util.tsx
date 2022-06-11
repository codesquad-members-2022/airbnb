export function getDays(month: number) {
  type DateObject = {
    date: Date;
    isThisMonth: boolean;
  };
  const thisYear: number = 2022;
  const daysArr: Array<DateObject> = [];
  const weekDay: number = new Date(thisYear, month, 1).getDay();
  const sunday: number = 6;
  if (weekDay !== sunday) {
    for (let i: number = 0; i < weekDay; i += 1) {
      daysArr.push({ date: new Date(thisYear, month, i), isThisMonth: false });
    }
  }
  const firstDay = new Date(thisYear, month, 1).getDate();
  const lastDay = new Date(thisYear, month + 1, 0).getDate();
  for (let i: number = firstDay; i < lastDay + 1; i += 1) {
    daysArr.push({ date: new Date(thisYear, month, i), isThisMonth: true });
  }
  return daysArr;
}

export function keyMaker() {
  return Math.random().toString(36).substring(2, 11);
}

export function makeDateString(date: Date | string): string {
  let dateString: string = '';

  if (typeof date !== 'string') {
    const year = date.getFullYear();
    const month = date.getMonth() + 1;
    const day = date.getDate();

    const monthDayCheck = (date: number) => {
      if (date < 10) {
        return `0${String(date)}`;
      }

      return date;
    };

    dateString = `${year}-${monthDayCheck(month)}-${monthDayCheck(day)}`;
  }
  return dateString;
}

const today = new Date();
export const mockDate = new Date(today.setDate(today.getDate() - 1));
