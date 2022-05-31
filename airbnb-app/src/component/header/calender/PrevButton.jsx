import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import styled from 'styled-components';
import { useContext } from 'react';
import { CalenderDateContext } from '@/component/header/calender/CalenderDateProvider';

function PrevButton() {
  const { curDate, setCurDate } = useContext(CalenderDateContext);

  function handleClick() {
    const newDate =
      curDate.month === 1 ? { year: curDate.year - 1, month: 12 } : { year: curDate.year, month: curDate.month - 1 };
    setCurDate(newDate);
  }

  return (
    <StyledDiv>
      <ArrowBackIosIcon onClick={handleClick} sx={{ fontSize: 24, cursor: 'pointer' }} />
    </StyledDiv>
  );
}

const StyledDiv = styled.div`
  position: absolute;
  left: 88px;
  top: 64px;
  //left: 16%;
  //top: 13%;
`;

export default PrevButton;
