import styled from 'styled-components';

import CalendarDates from './CalendarDates';

function CalendarBody({ totalDate, year, month }) {
  return (
    <DateContainer>
      {totalDate.map((date, idx) => {
        return (
          <CalendarDates
            key={`${month}-${date}-${idx}`}
            year={year}
            month={month}
            date={date}
          />
        );
      })}
    </DateContainer>
  );
}

const DateContainer = styled.ul`
  display: flex;
  flex-flow: row wrap;
  width: 400px;
  margin: 0 15px;
`;

export default CalendarBody;
