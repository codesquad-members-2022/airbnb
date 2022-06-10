import styled, { css } from 'styled-components';

import { ClearBtn } from 'common/util.styled';

export const PersonnelContainer = styled.div`
  display: flex;
  position: relative;
  cursor: pointer;
`;

export const PersonnelInputClearBtn = styled.button<{
  isClearBtnShowing: boolean;
}>`
  display: none;

  ${({ isClearBtnShowing }) =>
    isClearBtnShowing &&
    css`
      ${ClearBtn}
    `}
`;
