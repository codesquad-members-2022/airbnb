import styled from 'styled-components';
import DateBox from '@calender/DateBox';

function DatesOfMonth({ date }) {
  const year = date.year;
  const month = date.month;
  const firstDay = new Date(year, month - 1, 1).getDay();
  const lastDate = new Date(year, month, 0).getDate();
  const dateArray = getDateArray({ firstDay, lastDate });

  return (
    <StyledDatesWrapper>
      {dateArray.map((date, idx) => {
        if (isBeforeToday({ year, month, date })) {
          return <DateBox key={idx} year={year} month={month} date={date} disabled={true} />;
        }
        return <DateBox key={idx} year={year} month={month} date={date} lastDate={lastDate} />;
      })}
    </StyledDatesWrapper>
  );
}

function getDateArray({ firstDay, lastDate }) {
  // 이전달 빈칸
  const blanks = Array(firstDay).fill(null);
  const dates = Array.from({ length: lastDate }, (_, idx) => idx + 1);

  return [...blanks, ...dates];
}

function isBeforeToday({ year, month, date }) {
  const today = new Date();
  const todayYear = today.getFullYear();
  const todayMonth = today.getMonth() + 1;
  const todayDate = today.getDate();
  if (todayYear > year) return true;
  if (todayYear === year && todayMonth > month) return true;
  if (todayYear === year && todayMonth === month && todayDate > date) return true;
  return false;
}

const StyledDatesWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(7, 1fr);
`;

export default DatesOfMonth;
