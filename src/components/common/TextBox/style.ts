import styled, { css } from "styled-components";

export const TextBox = styled.div<{ styles?: string }>`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 112px;
  height: 44px;
  margin-right: 24px;
  gap: 10px;

  ${({ styles }) =>
    styles &&
    css`
      ${styles}
    `}
`;

export const TextBoxLabel = styled.div`
  font-size: ${({ theme }) => theme.fontSize.small};
  font-weight: ${({ theme }) => theme.fontWeight.bold};
  color: ${({ theme }) => theme.color.black};
`;

export const TextBoxText = styled.div<{ textContent?: string | null }>`
  font-size: ${({ theme }) => theme.fontSize.base};
  color: ${({ theme }) => theme.color.gray2};
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;

  ${({ textContent }) =>
    textContent &&
    css`
      color: ${({ theme }) => theme.color.black};
      font-weight: ${({ theme }) => theme.fontWeight.base};
    `};
`;
