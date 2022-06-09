import styled from 'styled-components';

import CalendarDates from './CalendarDates';

type CalendarBodyProps = {
  totalDate: number[] | string[];
  year: number;
  month: number;
};

function CalendarBody({ totalDate, year, month }: CalendarBodyProps) {
  return (
    <DateContainer>
      {totalDate.map((date: string | number, idx: number) => {
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
