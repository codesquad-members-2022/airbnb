import styled, { css } from "styled-components";

type DateItemProps = { date: number; dateTarget: string | null; isPast: boolean; isSunday: boolean };

export const DateItem = styled.div<DateItemProps>`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 48px;
  height: 48px;
  background-color: ${({ theme }) => theme.color.white};
  color: ${({ theme }) => theme.color.black};
  margin: 1px;

  ${({ date }) =>
    date &&
    css`
      cursor: pointer;
      &:hover {
        border: 1px ${({ theme }) => theme.color.black} solid;
        border-radius: 30px;
        z-index: 2;
      }
    `}

  ${({ dateTarget }) => {
    switch (dateTarget) {
      case "CHECK":
        return css`
          border: 1px ${({ theme }) => theme.color.black} solid;
          border-radius: 30px;
          color: ${({ theme }) => theme.color.white} !important ;
          background-color: ${({ theme }) => theme.color.black};
          z-index: 1;
        `;

      case "BETWEEN":
        return css`
          background-color: ${({ theme }) => theme.color.gray6};
        `;

      default:
        return null;
    }
  }}

  ${({ isSunday }) =>
    isSunday &&
    css`
      color: ${({ theme }) => theme.color.pink};
    `}

  ${({ isPast }) =>
    isPast &&
    css`
      color: ${({ theme }) => theme.color.gray4};
      pointer-events: none;
    `}
`;
