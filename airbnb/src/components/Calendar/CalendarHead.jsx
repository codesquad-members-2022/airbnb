import React from 'react';
import styled from 'styled-components';

const DAY = ['일', '월', '화', '수', '목', '금', '토'];

function CalendarHead(props) {
  const { year, month, setMonth } = props;

  return (
    <Form>
      <Nav>
        <Btn onClick={() => setMonth(month - 1)}>&lt;</Btn>
        <Year>
          {year}년 {month}월
        </Year>
        <Btn onClick={() => setMonth(month + 1)}>&gt;</Btn>
      </Nav>
      <Days>
        {DAY.map((day) => {
          return <Day key={day}>{day}</Day>;
        })}
      </Days>
    </Form>
  );
}

const Form = styled.section`
  display: flex;
  flex-direction: column;
  width: 430px;
`;

const Nav = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0.7vw;
`;

const Year = styled.div`
  font-size: 2rem;
  font-weight: bold;
`;

const Days = styled.div`
  display: flex;
  margin-bottom: 0.5vw;
`;

const Day = styled.li`
  width: calc(95% / 7);
  text-align: right;
  margin-left: 40px;
  :nth-child(7n + 1) {
    color: red;
  }

  :nth-child(7n) {
    color: blue;
  }
`;

const Btn = styled.li`
  padding: 0.2vw 0.2vw 0.1vw;
  border: 0.5px solid #e4e3e6;
  border-radius: 5px;
  text-align: center;
  font-size: 0.78rem;
  cursor: pointer;
`;

export default CalendarHead;
