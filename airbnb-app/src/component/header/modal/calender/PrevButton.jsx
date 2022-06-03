import styled from 'styled-components';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';

function PrevButton({ calenderPosition, setCalenderPosition }) {
  function handleClick() {
    if (calenderPosition !== 0) return;
    setCalenderPosition(prev => prev + 1);
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
`;

export default PrevButton;
