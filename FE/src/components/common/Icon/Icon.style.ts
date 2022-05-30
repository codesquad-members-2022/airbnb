import styled, { css } from 'styled-components';

import { ICON_SIZE } from '@components/common/Icon';

type StyledIconProps = {
  size: string;
};

const sizeStyles = css<StyledIconProps>`
  ${({ size }) =>
    size === ICON_SIZE.MEDIUM &&
    css`
      width: 1rem;
    `}

  ${({ size }) =>
    size === ICON_SIZE.LARGE &&
    css`
      width: 1.5rem;
    `}
`;

export const Icon = styled.img`
  ${sizeStyles}
`;
