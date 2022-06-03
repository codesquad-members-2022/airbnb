import CalenderPage from '@calender/CalenderPage';
import styled from 'styled-components';
import { useContext } from 'react';
import { CalenderDateContext } from '@/context/CalenderDateProvider';

function CalenderCarousel({ page, calenderPosition, setCalenderPosition }) {
  const { curDate, setCurDate, prevDate, nextDate } = useContext(CalenderDateContext);

  const displayPageArray = getDisplayPageArray({ curDate, page });
  const previousDisplayPageArray = getDisplayPageArray({ curDate: prevDate, page });
  const nextDisplayPageArray = getDisplayPageArray({ curDate: nextDate, page });

  function handleTransitionEnd() {
    if (calenderPosition === 1) {
      setCurDate(prevDate);
    } else if (calenderPosition === -1) {
      setCurDate(nextDate);
    }
    setCalenderPosition(0);
  }

  return (
    <StyledCalenderDisplay page={page}>
      <StyledMoveArea page={page} calenderPosition={calenderPosition} onTransitionEnd={handleTransitionEnd}>
        <StyledCalenderPageWrapper page={page}>
          {previousDisplayPageArray.map((date, idx) => (
            <CalenderPage key={idx} date={date} />
          ))}
        </StyledCalenderPageWrapper>
        <StyledCalenderPageWrapper page={page}>
          {displayPageArray.map((date, idx) => (
            <CalenderPage key={idx} date={date} />
          ))}
        </StyledCalenderPageWrapper>
        <StyledCalenderPageWrapper page={page}>
          {nextDisplayPageArray.map((date, idx) => (
            <CalenderPage key={idx} date={date} />
          ))}
        </StyledCalenderPageWrapper>
      </StyledMoveArea>
    </StyledCalenderDisplay>
  );
}

function getDisplayPageArray({ curDate, page }) {
  const displayPageArray = [curDate];
  for (let i = 1; i < page; i++) {
    const prevYear = displayPageArray[i - 1].year;
    const prevMonth = displayPageArray[i - 1].month;
    const newDate = prevMonth === 12 ? { year: prevYear + 1, month: 1 } : { year: prevYear, month: prevMonth + 1 };
    displayPageArray.push(newDate);
  }
  return displayPageArray;
}

const StyledCalenderDisplay = styled.div`
  margin: 0 auto;
  display: flex;
  justify-content: center;
  ${({ page }) =>
    `width: ${page === 1 ? 350 : 720}px;
   `}
  overflow-x: hidden;
`;

const StyledMoveArea = styled.div`
  display: flex;
  ${({ page, calenderPosition }) => {
    if (calenderPosition === 0) return ``;
    const diff = page === 1 ? 350 : 720;
    return `transform: translateX(${calenderPosition * diff}px);
      transition: transform 0.5s linear;`;
  }};
`;

const StyledCalenderPageWrapper = styled.div`
  display: grid;
  justify-items: center;
  ${({ page }) =>
    `grid-template-columns: ${page > 1 ? `repeat(2, 1fr)` : ``};
    column-gap: ${page > 1 ? 20 : 0}px;
    row-gap: ${page > 2 ? 40 : 0}px;
   `};
`;

export default CalenderCarousel;
