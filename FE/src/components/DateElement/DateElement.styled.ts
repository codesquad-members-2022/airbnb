import styled, { css } from 'styled-components';
import { FlexCenterSort } from 'common/util.styled';
import {
  IDateElementContentStyle,
  IDateElementCircleStyle,
} from 'components/DateElement/DateElement.types';

export const DateElementContent = styled.li<IDateElementContentStyle>`
  margin-top: 0.4rem;
  width: 4.8rem;
  height: 4.8rem;
  font-weight: ${({ theme: { fontWeights } }) => fontWeights.bold};
  font-size: ${({ theme: { fontSizes } }) => fontSizes.xs};
  line-height: ${({ theme: { lineHeights } }) => lineHeights.shorter};
  color: ${({ past, theme: { colors } }) =>
    past ? colors.grey1 : colors.grey4};

  ${({ isRange }) =>
    isRange &&
    css`
      background-color: ${({ theme: { colors } }) => colors.grey6};
    `};

  ${({ isSelcet }) =>
    isSelcet &&
    css`
      border-radius: 3rem;
      background-color: ${({ theme: { colors } }) => colors.grey1};
      color: ${({ theme: { colors } }) => colors.white};
    `};

  &:hover {
    ${({ isRange, past, dateInfo }) =>
      !isRange &&
      dateInfo &&
      past &&
      css`
        background-color: ${({ theme: { colors } }) => colors.grey1};
        border-radius: 3rem;
        color: ${({ theme: { colors } }) => colors.white};
        cursor: pointer;
      `}
  }
`;

export const DateElementCircle = styled.div<IDateElementCircleStyle>`
  ${FlexCenterSort}
  width: 100%;
  height: 100%;

  &:hover {
    ${({ isRange, past, dateInfo }) =>
      isRange &&
      dateInfo &&
      past &&
      css`
        border-radius: 3rem;
        border: 2px solid ${({ theme: { colors } }) => colors.black};
        cursor: pointer;
      `}
  }
`;
