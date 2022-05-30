import styled from 'styled-components';

function CalendarDates({ lastDate, firstDate, date, idx }) {
  return (
    <DateList>
      <DateNum
        idx={idx}
        lastDate={lastDate}
        firstDate={firstDate}
        active={idx > firstDate - 1 || idx < lastDate}
      >
        {date}일
      </DateNum>
    </DateList>
  );
}

const DateList = styled.li`
  position: relative;
  width: calc(94% / 7);
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
  ${({ active }) => active && `color: #BDBDBD;`};
`;

export default CalendarDates;
