import React from 'react';
import styled from 'styled-components';

const DAY = ['일', '월', '화', '수', '목', '금', '토'];

function CalendarHead(props) {
  const { year, month, setMonth, position } = props;

  return (
    <Form>
      <Nav>
        {position === 'leftBtn' && (
          <Btn onClick={() => setMonth(month - 1)} position={position}>
            &lt;
          </Btn>
        )}
        <Year>
          {year}년 {month}월
        </Year>
        {position === 'rightBtn' && (
          <Btn onClick={() => setMonth(month + 1)} position={position}>
            &gt;
          </Btn>
        )}
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
  position: relative;
  width: 400px;
  margin-left: 10px;
`;

const Nav = styled.nav`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 10px;
`;

const Year = styled.div`
  font-size: ${({ theme }) => theme.fontSizes.xl};
  font-weight: bold;
`;

const Days = styled.div`
  display: flex;
  margin-bottom: 10px;
`;

const Day = styled.li`
  width: calc(95% / 7);
  text-align: right;
  margin-left: 40px;

  :nth-child(7n + 1) {
    color: ${({ theme }) => theme.colors.red};
  }

  :nth-child(7n) {
    color: ${({ theme }) => theme.colors.blue};
  }
`;

const Btn = styled.button`
  position: absolute;
  top: 10px;
  padding: 5px;
  border: 0.5px solid #e4e3e6;
  border-radius: 5px;
  width: 10%;
  cursor: pointer;

  font-size: ${({ theme }) => theme.fontSizes.xs};

  left: ${({ position }) => (position === 'leftBtn' ? 10 : '')}px;

  right: ${({ position }) => (position === 'rightBtn' ? 10 : '')}px;
`;

export default CalendarHead;
