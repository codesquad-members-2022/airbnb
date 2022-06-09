import styled from 'styled-components';
import { useState } from 'react';
import PrevButton from '@calender/PrevButton';
import NextButton from '@calender/NextButton';
import { ModalContainer } from '@/styled-component/ModalContainer';
import CalenderCarousel from '@calender/CalenderCarousel';

function Calender({ page = 1 }) {
  const [calenderPosition, setCalenderPosition] = useState(0);

  return (
    <StyledContainer page={page}>
      <PrevButton calenderPosition={calenderPosition} setCalenderPosition={setCalenderPosition} />
      <NextButton calenderPosition={calenderPosition} setCalenderPosition={setCalenderPosition} />
      <CalenderCarousel page={page} calenderPosition={calenderPosition} setCalenderPosition={setCalenderPosition} />
    </StyledContainer>
  );
}

const StyledContainer = styled(ModalContainer)`
  position: relative;
  ${({ page }) =>
    `width: ${page === 1 ? 370 : 818}px;
    height: ${382 * Math.ceil(page / 2)}px;
    padding: ${page === 1 ? `65px 44px` : `65px 88px`};
   `}
`;

export default Calender;
