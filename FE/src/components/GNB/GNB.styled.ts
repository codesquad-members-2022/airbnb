import styled, { css } from 'styled-components';

export const GNBMenu = styled.menu<{ isSearchShowing: boolean }>`
  ${({ isSearchShowing }) =>
    isSearchShowing
      ? css`
          display: none;
        `
      : css`
          display: flex;
          gap: 2.4rem;
          font-weight: ${({ theme: { fontWeights } }) => fontWeights.normal};
          line-height: ${({ theme: { lineHeights } }) => lineHeights.base};
        `};
`;

export const GNBBtn = styled.button`
  cursor: pointer;
  background-color: transparent;
  border: none;
  font-family: 'Noto Sans KR', sans-serif;
  font-weight: ${({ theme: { fontWeights } }) => fontWeights.normal};
  font-size: ${({ theme: { fontSizes } }) => fontSizes.md};
  line-height: ${({ theme: { lineHeights } }) => lineHeights.base};
  color: ${({ theme: { colors } }) => colors.grey1};

  &:hover {
    font-weight: ${({ theme: { fontWeights } }) => fontWeights.bold};
    text-decoration: underline;
  }
`;
