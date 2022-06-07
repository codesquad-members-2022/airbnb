import styled, { css } from "styled-components";

import { CalendarDay, DayItem } from "@components/SearchBar/Period/Calendar/CalendarPage/style";

export const CalendarDate = styled(CalendarDay)``;

//           date: date,
//           dateData: getDate(year, month, date),
//           dateTarget: getDateTarget(),
//           isPast: isPast,

// export enum DateTarget {
//   CHECK_IN,
//   CHECK_OUT,
//   BETWEEN,
// }

type DateItemProps = { date: number; dateData: Date; dateTarget: string | null; isPast: boolean };

export const DateItem = styled(DayItem)<DateItemProps>`
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
      }
    `}

  ${({ isPast }) =>
    isPast &&
    css`
      color: ${({ theme }) => theme.color.gray4};
      pointer-events: none;
    `}

    ${({ dateTarget }) => {
    switch (dateTarget) {
      case "CHECK":
        return css`
          border: 1px ${({ theme }) => theme.color.black} solid;
          border-radius: 30px;
          color: ${({ theme }) => theme.color.white};
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
`;
