import { Dispatch } from 'react';
import styled from 'styled-components';

type props = {
  year: number;
  month: number;
  setYear: Dispatch<number>;
  setMonth: Dispatch<(month: number) => void>;
  position: string;
};

const DAY: string[] = ['일', '월', '화', '수', '목', '금', '토'];

function CalendarHead({ year, month, setYear, setMonth, position }: props) {
  function slideLeftDirection() {
    if (month - 1 === 0) {
      setYear(year - 1);
      setMonth((month: number) => month + 11);
      return;
    }
    setMonth((month: number) => month - 1);
  }

  function slideRightDirection() {
    if (month + 1 > 12) {
      setYear(year + 1);
      setMonth((month: number) => month - 10);
      return;
    }
    setMonth((month: number) => month + 1);
  }

  return (
    <DayHeader>
      <HeaderInfo>
        {position === 'leftBtn' && (
          <ArrowBtn onClick={slideLeftDirection} position={position}>
            &lt;
          </ArrowBtn>
        )}
        <Year>
          {year}년 {month}월
        </Year>
        {position === 'rightBtn' && (
          <ArrowBtn onClick={slideRightDirection} position={position}>
            &gt;
          </ArrowBtn>
        )}
      </HeaderInfo>
      <Days>
        {DAY.map((day) => {
          return <Day key={day}>{day}</Day>;
        })}
      </Days>
    </DayHeader>
  );
}

const DayHeader = styled.section`
  display: flex;
  flex-direction: column;
  position: relative;
  width: 400px;
`;

const HeaderInfo = styled.nav`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 25px;
`;

const Year = styled.div`
  font-size: ${({ theme }) => theme.fontSizes.xl};
  font-weight: bold;
`;

const Days = styled.ul`
  display: flex;
  margin-bottom: 10px;
  font-size: ${({ theme }) => theme.fontSizes.l};
  font-weight: 500;
`;

const Day = styled.li`
  width: calc(95% / 7);
  text-align: center;
  margin-left: 25px;

  :nth-child(7n + 1) {
    color: ${({ theme }) => theme.colors.red};
  }

  :nth-child(7n) {
    color: ${({ theme }) => theme.colors.blue};
  }
`;

const ArrowBtn = styled.button<{ position: string }>`
  position: absolute;
  top: 25px;
  border: 0.5px solid ${({ theme }) => theme.colors.black};
  border-radius: 5px;
  width: 10%;
  cursor: pointer;

  font-size: ${({ theme }) => theme.fontSizes.s};
  font-weight: bold;
  left: ${({ position }) => (position === 'leftBtn' ? 10 : '')}px;

  right: ${({ position }) => (position === 'rightBtn' ? 10 : '')}px;
`;

export default CalendarHead;
