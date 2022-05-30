export const changeDate = (year, month) => {
  const localLastMonthDate = new Date(year, month - 1, 0);
  const localThisMonthDate = new Date(year, month, 0);

  //이전 날짜
  const PVLastDate = localLastMonthDate.getDate();
  const PVLastDay = localLastMonthDate.getDay();

  //다음 날짜
  const ThisLastDay = localThisMonthDate.getDay();
  const ThisLastDate = localThisMonthDate.getDate();

  //이전 날짜 만들기
  const PREVIOUSDATE_ARR = [];
  if (PVLastDay !== 6) {
    for (let i = 0; i < PVLastDay + 1; i++) {
      PREVIOUSDATE_ARR.unshift(PVLastDate - i);
    }
  }

  //다음 날짜 만들기
  let NEXTDATE_ARR = [];
  if (ThisLastDay === 6) {
    NEXTDATE_ARR = Array(7)
      .fill()
      .map((el, idx) => idx + 1);
  } else {
    for (let i = 1; i < 7 - ThisLastDay; i++) {
      NEXTDATE_ARR.push(i);
    }
  }

  //현재날짜
  const CURRENTDATE_ARR = [...Array(ThisLastDate + 1).keys()].slice(1);

  return PREVIOUSDATE_ARR.concat(CURRENTDATE_ARR, NEXTDATE_ARR);
};
