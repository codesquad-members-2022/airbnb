import styled, { css } from 'styled-components';

export const BtnBackgroundBorderRemove = css`
  cursor: pointer;
  background-color: transparent;
  border: none;
`;

export const FlexCenterSort = css`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Stick = styled.span`
  width: 0.1rem;
  height: 4.4rem;
  background-color: ${({ theme: { colors } }) => colors.grey5};
`;

export const FooterTitle = css`
  font-weight: ${({ theme }) => theme.fontWeights.normal};
  font-size: ${({ theme }) => theme.fontSizes.xxl};
  line-height: ${({ theme }) => theme.lineHeights.logo};
  color: ${({ theme }) => theme.colors.grey1};
`;

export const FooterText = css`
  font-weight: ${({ theme }) => theme.fontWeights.normal};
  font-size: ${({ theme }) => theme.fontSizes.lg};
  line-height: ${({ theme }) => theme.lineHeights.tall};
  color: ${({ theme }) => theme.colors.grey1};
`;

export const Backdrop = styled.div`
  position: fixed;
  width: 100%;
  height: 100%;
`;

export const ModalStyle = css`
  z-index: 1;
  position: fixed;
  border-radius: 4rem;
  background-color: ${({ theme: { colors } }) => colors.white};
  box-shadow: 0px 4px 10px rgba(51, 51, 51, 0.1),
    0px 0px 4px rgba(51, 51, 51, 0.05);
  box-sizing: border-box;
`;

export const ClearBtn = css`
  display: block;
  position: absolute;
  top: 50%;
  right: 0;
  transform: translateY(-50%);
  ${BtnBackgroundBorderRemove}
  cursor: pointer;
`;
