import React from 'react';
import styled from 'styled-components';
import CalendarDates from './CalendarDates';

function CalendarBody(props) {
  const { totalDate } = props;

  const lastDate = totalDate.indexOf(1);
  const firstDate = totalDate.indexOf(1, 7);

  return (
    <Form>
      {totalDate.map((date, idx) => {
        return (
          <CalendarDates
            key={date}
            idx={idx}
            lastDate={lastDate}
            firstDate={firstDate}
            date={date}
          ></CalendarDates>
        );
      })}
    </Form>
  );
}
const Form = styled.div`
  display: flex;
  flex-flow: row wrap;
  width: 400px;
  margin: 0 15px;
`;
export default CalendarBody;
