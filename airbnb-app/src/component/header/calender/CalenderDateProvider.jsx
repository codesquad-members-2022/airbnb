import { createContext, useEffect, useState } from 'react';
import { CALENDER_MODE } from '@/constants/calenderText';

const today = new Date();
const initialCurDateState = { year: today.getFullYear(), month: today.getMonth() + 1 };

export const CalenderDateContext = createContext({});

export function CalenderDateProvider({ children }) {
  const [curDate, setCurDate] = useState(initialCurDateState);
  // 체크인 모드에서 클릭하면 체크인 날짜가 선택, 체크아웃 모드에서 클릭하면 체크아웃 날짜가 선택.
  const [mode, setMode] = useState(CALENDER_MODE.CHECKIN);
  const [checkInInfo, setCheckInInfo] = useState(null);
  const [checkOutInfo, setCheckOutInfo] = useState(null);

  const [checkInTime, setCheckInTime] = useState(0);
  const [checkOutTime, setCheckOutTime] = useState(0);

  useEffect(() => {
    const newCheckInTime =
      checkInInfo === null
        ? new Date(0).getTime()
        : new Date(`${checkInInfo.year}-${checkInInfo.month}-${checkInInfo.date}`).getTime();
    setCheckInTime(newCheckInTime);
  }, [checkInInfo]);

  useEffect(() => {
    const newCheckOutTime =
      checkOutInfo === null
        ? new Date(0).getTime()
        : new Date(`${checkOutInfo.year}-${checkOutInfo.month}-${checkOutInfo.date}`).getTime();
    setCheckOutTime(newCheckOutTime);
  }, [checkOutInfo]);

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
      }}
    >
      {children}
    </CalenderDateContext.Provider>
  );
}
