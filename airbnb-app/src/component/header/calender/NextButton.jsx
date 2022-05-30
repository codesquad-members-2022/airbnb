import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import styled from 'styled-components';
import { useContext } from 'react';
import { CalenderDateContext } from '@/component/header/calender/CalenderDateProvider';

function NextButton() {
  const { curDate, setCurDate } = useContext(CalenderDateContext);

  function handleClick() {
    const newDate =
      curDate.month === 12 ? { year: curDate.year + 1, month: 1 } : { year: curDate.year, month: curDate.month + 1 };
    setCurDate(newDate);
  }

  return (
    <StyledDiv>
      <ArrowForwardIosIcon onClick={handleClick} sx={{ fontSize: 24, cursor: 'pointer' }} />
    </StyledDiv>
  );
}

const StyledDiv = styled.div`
  position: absolute;
  right: 88px;
  top: 64px;
  //right: 15%;
  //top: 13%;
`;

export default NextButton;
