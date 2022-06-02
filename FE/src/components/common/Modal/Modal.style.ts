import styled, { css } from 'styled-components';

import { MODAL_POSITION } from '@components/common/Modal/index';

const positionStyles = css<{ position: string }>`
  ${({ position }) =>
    position === MODAL_POSITION.LEFT &&
    css`
      left: 0;
    `}

  ${({ position }) =>
    position === MODAL_POSITION.RIGHT &&
    css`
      right: 0;
    `}

  ${({ position }) =>
    position === MODAL_POSITION.CENTER &&
    css`
      left: 50%;
      transform: translateX(-50%);
    `}
`;

export const StoryContainer = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100px;
  background-color: ${({ theme }) => theme.color.grey5};
`;

export const Background = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  z-index: 2;
`;

export const ModalContainer = styled.div<{ position: string }>`
  position: absolute;
  top: calc(100% + 8px);
  min-width: 200px;
  min-height: 87px;
  background: ${({ theme }) => theme.color.white};
  box-shadow: 0 4px 10px rgba(51, 51, 51, 0.1), 0 0 4px rgba(51, 51, 51, 0.05);
  border-radius: 10px;
  z-index: 3;
  
  /* 포지션 */
  ${positionStyles}
`;
