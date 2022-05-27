import styled, { css } from 'styled-components';

import { IMG_SIZE } from '@components/MainContent/constants';

const sizeStyles = css<{ size: string }>`
  ${({ size }) =>
    size === IMG_SIZE.SMALL &&
    css`
      align-items: center;
      width: 250px;
      gap: 16px;
      margin-bottom: 24px;
      
      ${ImgWrapper} {
        width: 80px;
        height: 80px;
      }
    `}

  ${({ size }) =>
    size === IMG_SIZE.LARGE &&
    css`
      flex-direction: column;

      ${ImgWrapper} {
        width: 308px;
        height: 308px;
        margin-bottom: 16px;
      }
    `}
`;

export const Container = styled.div`
  margin-bottom: 50px;
`;

export const Wrapper = styled.div`
  width: 1280px;
  margin: 80px auto 0;
`;

export const Section = styled.div`
  margin-bottom: 80px;
`;

export const SectionTitle = styled.h1`
  font-size: ${({ theme }) => theme.fontSize.display};
  font-weight: ${({ theme }) => theme.fontWeight.regular};
  color: ${({ theme }) => theme.color.grey1};
  margin-bottom: 34px;
`;

export const SectionContent = styled.div`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  gap: 15px;
`;

export const SectionItem = styled.div`
  display: flex;

  /* 크기 */
  ${sizeStyles}
`;

export const ImgWrapper = styled.img`
  border-radius: 20px;
`;

export const Name = styled.p`
  font-size: ${({ theme }) => theme.fontSize.large};
`;

export const Description = styled.p`
  font-size: ${({ theme }) => theme.fontSize.large};
  font-weight: ${({ theme }) => theme.fontWeight.regular};
  color: ${({ theme }) => theme.color.grey1};
`;
