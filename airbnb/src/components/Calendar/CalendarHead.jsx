import styled from 'styled-components';

const DAY = ['일', '월', '화', '수', '목', '금', '토'];

function CalendarHead({ year, month, setYear, setMonth, position }) {
  function handleLeftBit() {
    if (month - 1 === 0) {
      setYear(year - 1);
      setMonth(12 - 1);
      return;
    }
    setMonth(month - 2);
  }

  function handleRightBtn() {
    if (month + 1 > 12) {
      setYear(year + 1);
      setMonth(1);
      return;
    }
    setMonth(month + 1);
  }

  return (
    <DayHeader>
      <HeaderInfo>
        {position === 'leftBtn' && (
          <ArrowBtn onClick={handleLeftBit} position={position}>
            &lt;
          </ArrowBtn>
        )}
        <Year>
          {year}년 {month}월
        </Year>
        {position === 'rightBtn' && (
          <ArrowBtn onClick={handleRightBtn} position={position}>
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
  margin: 10px;
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

const ArrowBtn = styled.button`
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
