import { useState } from 'react';

export const useCurrentDate = () => {
  const [currentDate, setCurrentDate] = useState(new Date());

  const changeCurrentDate = (monthIncome: number) => () => {
    setCurrentDate(
      new Date(
        currentDate.getFullYear(),
        currentDate.getMonth() - monthIncome,
        1,
      ),
    );
  };

  return { changeCurrentDate, currentDate };
};
