import styled from 'styled-components';

import CalendarDates from './CalendarDates';

function CalendarBody({ totalDate }) {
  const lastDate = totalDate.indexOf(1);
  const firstDate = totalDate.indexOf(1, 7);

  return (
    <DateContainer>
      {totalDate.map((date, idx) => {
        return (
          <CalendarDates
            key={`${date}${idx}`}
            idx={idx}
            lastDate={lastDate}
            firstDate={firstDate}
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
