import styled, { css } from 'styled-components';

import { IInputTextStyle } from 'contexts/searchcontext/searchContext.types';

import { FlexCenterSort } from 'common/util.styled';

export const Container = styled.section<IInputTextStyle>`
  ${({ isSearchShowing }) =>
    isSearchShowing &&
    css`
      ${FlexCenterSort}
    `}
`;

export const SearchBarTitle = styled.h2<IInputTextStyle>`
  ${({ isSearchShowing }) =>
    isSearchShowing
      ? css`
          display: none;
        `
      : css`
          display: block;
          font-weight: ${({ theme: { fontWeights } }) => fontWeights.bold};
          font-size: ${({ theme: { fontSizes } }) => fontSizes.sm};
          line-height: ${({ theme: { lineHeights } }) => lineHeights.shorter};
          cursor: pointer;
        `}
`;

export const SearchBarInputText = styled.input<IInputTextStyle>`
  font-weight: ${({ theme: { fontWeights } }) => fontWeights.normal};
  border: none;
  background-color: transparent;
  cursor: pointer;

  &:focus {
    outline: none;
  }

  ${({ isSearchShowing }) =>
    isSearchShowing
      ? css`
        text-align: center;
        font-size: ${({ theme: { fontSizes } }) => fontSizes.md}
        line-height: ${({ theme: { lineHeights } }) => lineHeights.base}
      `
      : css`
          margin-top: 0.4rem;
          font-size: ${({ theme: { fontSizes } }) => fontSizes.md};
          line-height: ${({ theme: { lineHeights } }) => lineHeights.base};
          color: ${({ theme: { colors } }) => colors.grey2};
        `}
`;
