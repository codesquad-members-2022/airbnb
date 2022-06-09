import { createContext, useState } from 'react';

export const CalenderDateContext = createContext({});

export function CalenderDateProvider({ children }) {
  const today = new Date();
  const initialCurDateState = { year: today.getFullYear(), month: today.getMonth() + 1 };

  const [curDate, setCurDate] = useState(initialCurDateState);
  // 체크인 모드에서 클릭하면 체크인 날짜가 선택, 체크아웃 모드에서 클릭하면 체크아웃 날짜가 선택.
  const [mode, setMode] = useState(null);
  const [checkInInfo, setCheckInInfo] = useState(null);
  const [checkOutInfo, setCheckOutInfo] = useState(null);

  const checkInValue = checkInInfo ? `${checkInInfo.month}월 ${checkInInfo.date}일` : '';
  const checkOutValue = checkOutInfo ? `${checkOutInfo.month}월 ${checkOutInfo.date}일` : '';

  const resetCalenderInfos = () => {
    setCheckInInfo(null);
    setCheckOutInfo(null);
  };

  const resetCurDate = () => {
    if (checkInInfo) {
      setCurDate(checkInInfo);
    } else {
      setCurDate(initialCurDateState);
    }
  };

  const getTimeFromInfo = Info => {
    return Info === null ? 0 : new Date(`${Info.year}-${Info.month}-${Info.date}`).getTime();
  };

  const checkInTime = getTimeFromInfo(checkInInfo);
  const checkOutTime = getTimeFromInfo(checkOutInfo);

  const prevDate = {
    year: curDate.month === 1 ? curDate.year - 1 : curDate.year,
    month: curDate.month === 1 ? 12 : curDate.month - 1,
  };

  const nextDate = {
    year: curDate.month === 12 ? curDate.year + 1 : curDate.year,
    month: curDate.month === 12 ? 1 : curDate.month + 1,
  };

  return (
    <CalenderDateContext.Provider
      value={{
        curDate,
        setCurDate,
        prevDate,
        nextDate,
        mode,
        setMode,
        checkInInfo,
        setCheckInInfo,
        checkOutInfo,
        setCheckOutInfo,
        checkInTime,
        checkOutTime,
        checkInValue,
        checkOutValue,
        resetCalenderInfos,
        resetCurDate,
      }}
    >
      {children}
    </CalenderDateContext.Provider>
  );
}
