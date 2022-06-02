import styled, { css } from 'styled-components';

import { SEARCH_BAR_SIZE } from '@components/SearchBar/constants';

const sizeStyles = css<{ size: string }>`
  ${({ size, theme }) =>
    size === SEARCH_BAR_SIZE.SMALL &&
    css`
      width: fit-content;
      height: 48px;
      border-radius: 30px;
      padding: 16px 8px;

      ${SearchButton} {
        width: 32px;
        height: 32px;
      }

      ${Content} {
        font-size: ${theme.fontSize.xSmall};
      }

      ${PeriodArea}, ${PriceArea}, ${PersonnelArea} {
        width: fit-content;
        padding: 0 16px;
      }
    `}

  ${({ size, theme }) =>
    size === SEARCH_BAR_SIZE.LARGE &&
    css`
      width: 916px;
      height: 76px;
      border-radius: 60px;

      ${SearchButton} {
        position: absolute;
        top: 50%;
        right: 16px;
        width: 40px;
        height: 40px;
        transform: translateY(-50%);
      }

      ${PeriodArea}, ${PriceArea}, ${PersonnelArea} {
        height: 100%;
        padding: 16px 24px;
        border-radius: 60px;

        &:hover {
          background-color: ${theme.color.grey5};

          &::before,
          & + div::before {
            display: none;
          }
        }
      }

      ${PeriodArea} {
        padding-left: 40px;
      }
    `}
}
`;

const areaStyles = css`
  position: relative;
  display: flex;
  align-items: center;
  gap: 12px;
  width: 296px;

  &:not(:first-of-type)::before {
    content: '';
    position: absolute;
    left: 0;
    display: block;
    width: 1px;
    height: 60%;
    background-color: ${({ theme }) => theme.color.grey5};
  }
`;

export const Container = styled.header<{ size: string }>`
  position: relative;
  display: flex;
  align-items: center;
  background-color: ${({ theme }) => theme.color.white};
  border: 1px solid ${({ theme }) => theme.color.grey4};
  cursor: pointer;

  /* 크기 */
  ${sizeStyles}
`;

export const ContentContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Label = styled.h3`
  color: ${({ theme }) => theme.color.black};
  font-size: ${({ theme }) => theme.fontSize.xSmall};
  font-weight: ${({ theme }) => theme.fontWeight.bold};
  margin-bottom: 4px;
`;

export const Content = styled.p<{ isContentExist: boolean }>`
  ${({ isContentExist, theme }) => !isContentExist && `color: ${theme.color.grey3}`};
  word-break: keep-all;
  white-space: nowrap;
`;

export const CloseButton = styled.button`
  position: relative;
  top: -2px;
  width: 24px;
  height: 24px;
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

  width: 280px;

  &:hover {
  }

  ${ContentContainer} {
    min-width: 185px;
  }

  ${CloseButton} {
    margin-left: auto;
  }
`;

export const PersonnelArea = styled.div`
  ${areaStyles};
  flex-grow: 1;
  width: 192px;

  ${ContentContainer} {
    width: 96px;
  }

  ${Content} {
    overflow: hidden;
    text-overflow: ellipsis;
  }
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
