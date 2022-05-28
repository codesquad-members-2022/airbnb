import styled, { css } from 'styled-components';

import { SEARCH_BAR_SIZE } from '@components/SearchBar/constants';

const sizeStyles = css<{ size: string }>`
  ${({ size, theme }) =>
    size === SEARCH_BAR_SIZE.SMALL &&
    css`
      width: 410px;
      height: 48px;
      border-radius: 30px;

      ${SearchButton} {
        width: 32px;
        height: 32px;
      }

      ${Content} {
        font-size: ${theme.fontSize.xSmall};
      }

      ${PeriodArea}, ${PriceArea}, ${PersonnelArea} {
        padding: 0 16px;
      }
    `}

  ${({ size }) =>
    size === SEARCH_BAR_SIZE.LARGE &&
    css`
      width: 916px;
      height: 76px;
      border-radius: 60px;

      ${SearchButton} {
        width: 40px;
        height: 40px;
      }

      ${PeriodArea}, ${PriceArea}, ${PersonnelArea} {
        padding: 0 24px;
      }
    `}
}
`;

const areaStyles = css`
  position: relative;
  display: flex;
  gap: 24px;
  width: 296px;

  &:not(:last-of-type)::after {
    content: '';
    position: absolute;
    right: 0;
    display: block;
    width: 1px;
    height: 90%;
    background-color: ${({ theme }) => theme.color.grey5};
  }
`;

export const Container = styled.header<{ size: string }>`
  display: flex;
  background-color: ${({ theme }) => theme.color.white};
  border: 1px solid ${({ theme }) => theme.color.grey4};
  padding: 16px;
  cursor: pointer;

  /* 크기 */
  ${sizeStyles}
`;

export const ContentContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

export const PeriodArea = styled.div`
  ${areaStyles};

  width: 344px;

  ${ContentContainer} {
    min-width: 112px;
  }
`;

export const PriceArea = styled.div`
  ${areaStyles};

  width: 256px;

  ${ContentContainer} {
    min-width: 160px;
  }
`;

export const PersonnelArea = styled.div`
  ${areaStyles};
  width: 192px;

  ${ContentContainer} {
    width: 96px;
  }
`;

export const Label = styled.span`
  color: ${({ theme }) => theme.color.black};
  font-size: ${({ theme }) => theme.fontSize.xSmall};
  font-weight: ${({ theme }) => theme.fontWeight.bold};
  margin-bottom: 4px;
`;

export const Content = styled.p<{ isContentExist: boolean }>`
  ${({ isContentExist, theme }) => !isContentExist && `color: ${theme.color.grey3}`};
  word-break: keep-all;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;

export const SearchButton = styled.button<{ isContentWillShow: boolean }>`
  display: flex;
  gap: 8px;
  ${({ isContentWillShow }) => isContentWillShow && 'width: 90px !important;'}
  justify-content: center;
  align-items: center;
  background-color: ${({ theme }) => theme.color.primary};
  border-radius: 30px;
  margin-left: auto;
`;

export const ButtonContent = styled.span`
  position: relative;
  top: 1px;
  color: ${({ theme }) => theme.color.white};
`;
