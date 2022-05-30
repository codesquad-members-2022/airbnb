import styled from 'styled-components';
import DateBox from '@/component/header/calender/DateBox';

function DatesOfMonth({ date }) {
  const year = date.year;
  const month = date.month;
  const firstDay = new Date(year, month - 1, 1).getDay();
  const lastDate = new Date(year, month - 1, 0).getDate();
  const dateArray = getDateArray({ firstDay, lastDate });

  return (
    <StyledDatesWrapper>
      {dateArray.map((date, idx) => (
        <DateBox key={idx} year={year} month={month} date={date} />
      ))}
    </StyledDatesWrapper>
  );
}

function getDateArray({ firstDay, lastDate }) {
  // 이전달 빈칸
  const blanks = Array(firstDay).fill(0);
  const dates = Array.from({ length: lastDate }, (_, idx) => idx + 1);

  return [...blanks, ...dates];
}

const StyledDatesWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(7, 1fr);
`;

export default DatesOfMonth;
