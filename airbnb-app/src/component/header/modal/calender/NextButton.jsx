import styled from 'styled-components';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';

function NextButton({ calenderPosition, setCalenderPosition }) {
  function handleClick() {
    if (calenderPosition !== 0) return;
    setCalenderPosition(prev => prev - 1);
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
`;

export default NextButton;
