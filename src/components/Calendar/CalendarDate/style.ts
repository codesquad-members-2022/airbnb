import styled, { css } from "styled-components";

import { CalendarDay, DayItem } from "@components/Calendar/CalendarPage/style";

export const CalendarDate = styled(CalendarDay)``;

//           date: date,
//           dateData: getDate(year, month, date),
//           dateTarget: getDateTarget(),
//           isPast: isPast,

export const DateItem = styled(DayItem)<{ date: number; isPast: boolean }>`
  color: ${({ theme }) => theme.color.black};

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
`;
