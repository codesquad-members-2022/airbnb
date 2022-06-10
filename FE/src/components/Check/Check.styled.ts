import styled, { css } from 'styled-components';
import { ClearBtn } from 'common/util.styled';

export const CheckContainer = styled.div`
  position: relative;
  display: flex;
  gap: 2.4rem;
  cursor: pointer;
`;

export const CheckClearBtn = styled.button<{ checkIn: string }>`
  display: none;

  ${({ checkIn }) =>
    checkIn &&
    css`
      ${ClearBtn}
    `}
`;
