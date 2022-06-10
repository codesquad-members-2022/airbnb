import styled, { css } from 'styled-components';
import { ClearBtn } from 'common/util.styled';

export const FareContainer = styled.div`
  display: flex;
  position: relative;
  cursor: pointer;
`;

export const FareClearBtn = styled.button<{
  isSet: boolean;
}>`
  display: none;
  ${({ isSet }) =>
    isSet &&
    css`
      ${ClearBtn}
    `}
`;
