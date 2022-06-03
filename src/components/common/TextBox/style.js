import styled, { css } from "styled-components";

export const TextBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 112px;
  height: 44px;
  margin-right: 24px;
  gap: 10px;
`;

export const TextBoxLabel = styled.div`
  font-size: ${({ theme }) => theme.fontSize.smaller};
  font-weight: ${({ theme }) => theme.fontWeight.bold};
  color: ${({ theme }) => theme.color.black};
`;

export const TextBoxText = styled.div`
  font-size: ${({ theme }) => theme.fontSize.base};
  color: ${({ theme }) => theme.color.gray2};
  font-weight: ${({ theme, text }) => (text ? theme.fontWeight.bold : theme.fontWeight.base)};
`;
