import React, { useCallback, useRef, useState } from "react";

import { DirectionType } from "_types/calendar";

import NEXT_BUTTON from "@assets/nextButton.svg";
import PREV_BUTTON from "@assets/prevButton.svg";
import Icon from "@components/common/Icon";
import CalendarPage from "@components/SearchBar/Period/Calendar/CalendarPage";
import { CALENDAR_PAGE, HALF_MOVE_POINT } from "@constants/calendar";
import { getDirectionValue } from "@utils/calendar";

import * as S from "./style";

const today = new Date();

const initSlideInfo: { translateX: number; direction: DirectionType } = {
  translateX: -HALF_MOVE_POINT,
  direction: null,
};

const Calendar = () => {
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
    (CALENDAR_PAGE: number) =>
      Array.from({ length: CALENDAR_PAGE + 2 }, (_, i) => getTodayDatePassByMonth(pageIndex + i - 1)),
    [getTodayDatePassByMonth, pageIndex],
  );

  return (
    <S.Calendar>
      <Icon onClick={() => handleMoveCalendar(HALF_MOVE_POINT, "FORWARD")} iconName={PREV_BUTTON} iconSize="small" />
      <S.SlideList translateX={slideInfo.translateX} direction={slideInfo.direction} onTransitionEnd={handleMoveEnd}>
        {getCalendarPageArr(CALENDAR_PAGE).map((currDate) => (
          <CalendarPage key={currDate.getTime()} currDate={currDate} />
        ))}
      </S.SlideList>
      <Icon onClick={() => handleMoveCalendar(-HALF_MOVE_POINT, "BACKWARD")} iconName={NEXT_BUTTON} iconSize="small" />
    </S.Calendar>
  );
};

export default React.memo(Calendar);
