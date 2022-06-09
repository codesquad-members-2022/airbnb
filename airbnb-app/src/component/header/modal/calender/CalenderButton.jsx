import styled from 'styled-components';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import { CALENDER_BUTTON } from '@/constants/calenderText';

function CalenderButton({ type, handleClick }) {
  const getInnerIcon = type => {
    if (type === CALENDER_BUTTON.PREV) {
      return <ArrowBackIosIcon onClick={() => handleClick(type)} sx={{ fontSize: 24, cursor: 'pointer' }} />;
    }
    if (type === CALENDER_BUTTON.NEXT) {
      return <ArrowForwardIosIcon onClick={() => handleClick(type)} sx={{ fontSize: 24, cursor: 'pointer' }} />;
    }
  };

  const innerIcon = getInnerIcon(type);

  return <StyledDiv type={type}>{innerIcon}</StyledDiv>;
}

const StyledDiv = styled.div`
  position: absolute;
  ${({ type }) => {
    if (type === CALENDER_BUTTON.PREV) return `left: 88px;`;
    if (type === CALENDER_BUTTON.NEXT) return `right: 88px;`;
  }}
  top: 64px;
`;

export default CalenderButton;
