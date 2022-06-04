import { useCallback, useEffect, useMemo, useRef, useState } from "react";

import NEXT_BUTTON from "@assets/nextButton.svg";
import PREV_BUTTON from "@assets/prevButton.svg";
import CalendarPage from "@components/Calendar/CalendarPage";
import Icon from "@components/common/Icon";
import { useCalendarState } from "@contexts/CalendarProvider";
import { DirectionType, getDirectionValue } from "@utils/calendar";

import * as S from "./style";

const initSlideInfo: { translateX: number; direction: DirectionType } = {
  translateX: -50,
  direction: null,
};

const Calendar = ({ today }: { today: Date }) => {
  // const { checkIn, checkOut } = useCalendarState();

  const todayYear = today.getFullYear();
  const todayMonth = today.getMonth();

  const [pageIndex, setPageIndex] = useState(0);
  const [slideInfo, setSlideInfo] = useState(initSlideInfo);
  const isMovePending = useRef(false);

  const handleMoveCalendar = useCallback((movePoint: number, direction: DirectionType) => {
    if (!isMovePending.current) {
      isMovePending.current = true;
      setSlideInfo(({ translateX }) => ({ translateX: translateX + movePoint, direction: direction }));
    }
  }, []);

  const handleMoveEnd = () => {
    setPageIndex((prev) => prev + getDirectionValue(slideInfo.direction));
    setSlideInfo(() => initSlideInfo);
    isMovePending.current = false;
  };

  const getTodayDatePassByMonth = useCallback(
    (passMonth: number) => new Date(todayYear, todayMonth + passMonth),
    [todayYear, todayMonth],
  );

  const getCalendarPageArr = useCallback(
    (pageLength: number) =>
      Array.from({ length: pageLength + 2 }, (_, i) => getTodayDatePassByMonth(pageIndex + i - 1)),
    [getTodayDatePassByMonth, pageIndex],
  );

  return (
    <S.Calendar>
      <Icon onClick={() => handleMoveCalendar(50, "FORWARD")} iconName={PREV_BUTTON} iconSize="small" />
      <S.SlideList translateX={slideInfo.translateX} direction={slideInfo.direction} onTransitionEnd={handleMoveEnd}>
        {getCalendarPageArr(2).map((currDate) => (
          <CalendarPage key={currDate.getTime()} currDate={currDate} />
        ))}
      </S.SlideList>
      <Icon onClick={() => handleMoveCalendar(-50, "BACKWARD")} iconName={NEXT_BUTTON} iconSize="small" />
    </S.Calendar>
  );
};

export default Calendar;
