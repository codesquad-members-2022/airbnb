import styled, { css } from "styled-components";

import { DirectionType } from "@utils/calendar";

export const Calendar = styled.div`
  position: relative;
  overflow: hidden;
  display: flex;
`;

export const SlideList = styled.div<{ direction: DirectionType; translateX: number }>`
  position: relative;
  display: flex;
  width: 100%;

  ${({ direction }) =>
    direction &&
    css`
      transition-property: all;
      transition-duration: 0.3s;
    `}

  transform: translateX(${({ translateX }) => `${translateX}%`});
`;
