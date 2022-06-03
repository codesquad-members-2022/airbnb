import { useState, useContext } from 'react';
import { ScheduleContext } from '../Contexts';

// TODO: 함수, 변수 네이밍 컨벤션 체크
export const useCurrentDate = () => {
  const [currentDate, setCurrentDate] = useState(new Date());

  const changeCurrentDate = (monthIncome: number) => () => {
    setCurrentDate(
      new Date(
        currentDate.getFullYear(),
        currentDate.getMonth() + monthIncome,
        1,
      ),
    );
  };

  return { changeCurrentDate, currentDate };
};

export const useScheduleContext = () => {
  const { setDate, startDate, endDate } = useContext(ScheduleContext);

  const setReservationDate = (day: Date | null) => () => {
    if (!day) return;
    setDate(day);
  };

  return { setReservationDate, startDate, endDate };
};
