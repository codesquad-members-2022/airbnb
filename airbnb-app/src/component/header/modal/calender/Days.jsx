import styled from 'styled-components';

function Days() {
  const days = ['일', '월', '화', '수', '목', '금', '토'];

  return (
    <StyledDayWrapper>
      {days.map((day, idx) => (
        <StyledDay key={idx} day={day}>
          {day}
        </StyledDay>
      ))}
    </StyledDayWrapper>
  );
}

const StyledDayWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(7, 1fr);
`;

const StyledDay = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  width: 50px;
  height: 50px;
  font-weight: 400;
  font-size: 17px;
  line-height: 17px;
  ${({ day }) => {
    if (day === '토' || day === '일') {
      return `color: red;`;
    }
  }}
`;

export default Days;
