import styled from 'styled-components';

import { BtnBackgroundBorderRemove } from 'common/util.styled';

export const Button = styled.button`
  ${BtnBackgroundBorderRemove}
  position: absolute;
  top: 7rem;

  &.left {
    left: 9.7rem;
  }

  &.right {
    right: 9.7rem;
  }
`;
