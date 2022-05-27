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
  border: 1px solid ${({ theme }) => theme.colors.gray1};

  :nth-child(7n + 1) {
    color: ${({ theme }) => theme.colors.red};
  }

  :nth-child(7n) {
    color: ${({ theme }) => theme.colors.blue};
  }
`;

const DateNum = styled.div`
  cursor: pointer;

  ${({ idx, lastDate }) => idx < lastDate && `color: #BDBDBD;`};

  ${({ idx, firstDate }) =>
    firstDate > 0 && idx > firstDate - 1 && `color: #BDBDBD;`};
`;

export default CalendarDates;
