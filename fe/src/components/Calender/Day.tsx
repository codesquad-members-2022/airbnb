import { usePeriodDispatch } from 'contexts/periodContext';
import styled from 'styled-components';

type DayProps = {
  isClicked: boolean;
  date: Date;
  isThisMonth: boolean;
};

function Day({ isClicked, date, isThisMonth }: DayProps) {
  const { setCheckIn, setCheckOut, setDate } = usePeriodDispatch();
  return !isThisMonth ? (
    <DayWrap isClicked={false} />
  ) : (
    <DayWrap isClicked={isClicked}>{date.getDate()}</DayWrap>
  );
}
const DayWrap = styled.div<{ isClicked: boolean }>`
  background: ${({ isClicked }) => (isClicked ? `black` : `none`)};
  color: ${({ isClicked }) => (isClicked ? 'white' : 'black')};
  display: flex;
  justify-content: center;
  align-items: center;
  width: 48px;
  height: 48px;
  border-radius: 999px;
`;
export default Day;
