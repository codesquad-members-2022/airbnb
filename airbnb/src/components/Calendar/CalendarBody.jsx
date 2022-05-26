import React from 'react';
import styled from 'styled-components';
import CalendarDates from './CalendarDates';

function CalendarBody(props) {
  const { totalDate } = props;

  const lastDate = totalDate.indexOf(1);
  const firstDate = totalDate.indexOf(1, 7);

  return (
    <Form>
      {totalDate.map((elm, idx) => {
        return (
          <CalendarDates
            key={idx}
            idx={idx}
            lastDate={lastDate}
            firstDate={firstDate}
            elm={elm}
          ></CalendarDates>
        );
      })}
    </Form>
  );
}
const Form = styled.div`
  display: flex;
  flex-flow: row wrap;
  width: 430px;
  margin-left: 10px;
`;
export default CalendarBody;
