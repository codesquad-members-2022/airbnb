import styled, { css } from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const HeroContainer = styled.header<{ isSearchShowing: boolean }>`
  width: 144rem;

  ${({ isSearchShowing }) =>
    isSearchShowing
      ? css`
          max-height: 19rem;
          padding-bottom: 2.3rem;
        `
      : css`
          position: absolute;
          height: 64rem;
        `}
`;
