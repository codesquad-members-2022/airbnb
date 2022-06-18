import styled from 'styled-components';
import { CALENDER_HEIGHT, CALENDER_WIDTH } from 'components/calender/constants/size';

interface countType {
  count: number;
}

const CalenderWrapper = styled.div<countType>`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  flex-wrap: wrap;
  width: ${({ count }) => `${CALENDER_WIDTH * count}px`};
  height: ${`${CALENDER_HEIGHT}px`};
`;

export { CalenderWrapper };
