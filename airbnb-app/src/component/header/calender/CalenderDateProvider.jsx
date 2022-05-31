import { createContext, useEffect, useState } from 'react';

export const CalenderDateContext = createContext({});

export function CalenderDateProvider({ children }) {
  const today = new Date();
  const initialCurDateState = { year: today.getFullYear(), month: today.getMonth() + 1 };

  const [curDate, setCurDate] = useState(initialCurDateState);
  // 체크인 모드에서 클릭하면 체크인 날짜가 선택, 체크아웃 모드에서 클릭하면 체크아웃 날짜가 선택.
  const [mode, setMode] = useState(null);
  const [checkInInfo, setCheckInInfo] = useState(null);
  const [checkOutInfo, setCheckOutInfo] = useState(null);

  const [checkInTime, setCheckInTime] = useState(0);
  const [checkOutTime, setCheckOutTime] = useState(0);

  useEffect(() => {
    const newCheckInTime =
      checkInInfo === null ? 0 : new Date(`${checkInInfo.year}-${checkInInfo.month}-${checkInInfo.date}`).getTime();
    setCheckInTime(newCheckInTime);
  }, [checkInInfo]);

  useEffect(() => {
    const newCheckOutTime =
      checkOutInfo === null ? 0 : new Date(`${checkOutInfo.year}-${checkOutInfo.month}-${checkOutInfo.date}`).getTime();
    setCheckOutTime(newCheckOutTime);
  }, [checkOutInfo]);

  const checkInValue = checkInInfo ? `${checkInInfo.month}월 ${checkInInfo.date}일` : '';
  const checkOutValue = checkOutInfo ? `${checkOutInfo.month}월 ${checkOutInfo.date}일` : '';

  const resetInfos = () => {
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

  return (
    <CalenderDateContext.Provider
      value={{
        curDate,
        setCurDate,
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
        resetInfos,
        resetCurDate,
      }}
    >
      {children}
    </CalenderDateContext.Provider>
  );
}
