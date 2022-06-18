import styled from 'styled-components';
import { CALENDER_HEIGHT } from 'components/calender/constants/size';

const ContentsWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

const Calender = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
  height: ${`${CALENDER_HEIGHT}px`};
`;

export { ContentsWrapper, Calender };
