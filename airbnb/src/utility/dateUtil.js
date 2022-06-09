export const makeDate = (year, month) => {
  const localLastMonthDate = new Date(year, month - 1, 0);
  const localThisMonthDate = new Date(year, month, 0);

  //이전 날짜
  const PVLastDay = localLastMonthDate.getDay();

  //다음 날짜
  const ThisLastDay = localThisMonthDate.getDay();
  const ThisLastDate = localThisMonthDate.getDate();

  //이전 날짜 만들기
  const PREVIOUSDATE_ARR = [];
  if (PVLastDay !== 6) {
    for (let i = 0; i < PVLastDay + 1; i++) {
      PREVIOUSDATE_ARR.unshift('');
    }
  }

  //다음 날짜 만들기
  let NEXTDATE_ARR = [];
  if (ThisLastDay === 6) {
    NEXTDATE_ARR = Array(7).fill('');
  } else {
    for (let i = 1; i < 7 - ThisLastDay; i++) {
      NEXTDATE_ARR.push('');
    }
  }

  //현재날짜
  const CURRENTDATE_ARR = [...Array(ThisLastDate + 1).keys()].slice(1);

  return PREVIOUSDATE_ARR.concat(CURRENTDATE_ARR, NEXTDATE_ARR);
};

export function compareDate(firstDate, secondDate) {
  const date1 = new Date(firstDate);
  const date2 = new Date(secondDate);

  if (date1 >= date2) return true;
  else return false;
}

export function changeLocalDateStr(year, month, date) {
  return new Date(year, month, date).toLocaleDateString();
}

export function changeTimeDate(date) {
  return new Date(date).getTime();
}

export function checkMonth(nowMonth) {
  const totalMonth = 11;
  if (nowMonth === 13) return nowMonth - 1 - totalMonth;
  else return nowMonth;
}

export function checkYear(nowYear, nowMonth) {
  if (nowMonth === 13) return nowYear + 1;
  else return nowYear;
}
