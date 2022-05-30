import { createContext, useState } from 'react';

const today = new Date();
const initialCurDateState = { year: today.getFullYear(), month: today.getMonth() + 1 };

export const CalenderDateContext = createContext({});

export function CalenderDateProvider({ children }) {
  const [curDate, setCurDate] = useState(initialCurDateState);
  // 체크인 모드에서 클릭하면 체크인 날짜가 선택, 체크아웃 모드에서 클릭하면 체크아웃 날짜가 선택.
  const [mode, setMode] = useState('checkIn');
  const [checkInDate, setCheckInDate] = useState(null);
  const [checkOutDate, setCheckOutDate] = useState(null);

  return (
    <CalenderDateContext.Provider
      value={{
        curDate,
        setCurDate,
        mode,
        setMode,
        checkInDate,
        setCheckInDate,
        checkOutDate,
        setCheckOutDate,
      }}
    >
      {children}
    </CalenderDateContext.Provider>
  );
}
