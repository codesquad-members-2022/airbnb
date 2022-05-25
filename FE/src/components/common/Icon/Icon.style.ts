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
`;

const Icon = styled.img`
  ${sizeStyles}
`;

export { Icon };
