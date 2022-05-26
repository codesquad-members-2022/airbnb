import React from 'react';
import styled from 'styled-components';

function CalendarDates(props) {
  const { lastDate, firstDate, elm, idx } = props;

  return (
    <>
      <Form>
        <DateNum idx={idx} lastDate={lastDate} firstDate={firstDate}>
          {elm}일
        </DateNum>
      </Form>
    </>
  );
}

const Form = styled.li`
  position: relative;
  width: calc(95% / 7);
  height: 60px;
  text-align: right;
  border: 1px solid #3d246d;

  :nth-child(7n + 1) {
    color: red;
  }

  :nth-child(7n) {
    color: blue;
  }
`;

const DateNum = styled.div`
  ${(props) => props.idx < props.lastDate && `color: #969696;`};

  ${(props) =>
    props.firstDate > 0 &&
    props.idx > props.firstDate - 1 &&
    `color: #969696;`};
`;

export default CalendarDates;
