import styled from 'styled-components';
import { useState } from 'react';
import { ModalContainer } from '@/styled-component/ModalContainer';
import CalenderCarousel from '@calender/CalenderCarousel';
import CalenderButton from '@calender/CalenderButton';
import { CALENDER_BUTTON } from '@/constants/calenderText';

function Calender({ page = 1 }) {
  const [calenderPosition, setCalenderPosition] = useState(0);

  const handleCalenderButtonClick = type => {
    if (calenderPosition !== 0) return;
    if (type === CALENDER_BUTTON.PREV) {
      return setCalenderPosition(prev => prev + 1);
    }
    if (type === CALENDER_BUTTON.NEXT) {
      return setCalenderPosition(prev => prev - 1);
    }
  };
  return (
    <StyledContainer page={page}>
      <CalenderButton type={CALENDER_BUTTON.PREV} handleClick={handleCalenderButtonClick} />
      <CalenderButton type={CALENDER_BUTTON.NEXT} handleClick={handleCalenderButtonClick} />
      <CalenderCarousel page={page} calenderPosition={calenderPosition} setCalenderPosition={setCalenderPosition} />
    </StyledContainer>
  );
}

const StyledContainer = styled(ModalContainer)`
  ${({ page }) =>
    `width: ${page === 1 ? 370 : 818}px;
    height: ${382 * Math.ceil(page / 2)}px;
    padding: ${page === 1 ? `65px 44px` : `65px 88px`};
   `}
`;

export default Calender;
