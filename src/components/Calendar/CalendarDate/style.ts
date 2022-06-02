import styled, { css } from "styled-components";

import { CalendarDay, DayItem } from "@components/Calendar/CalendarPage/style";

export const CalendarDate = styled(CalendarDay)``;

export const DateItem = styled(DayItem)<{ date: number }>`
  ${({ date }) =>
    date &&
    css`
      cursor: pointer;
      &:hover {
        border: 1px ${({ theme }) => theme.color.black} solid;
        border-radius: 30px;
      }
    `}

  /* 과거와 checkin checkout between 구분 */
  color: ${({ theme }) => theme.color.black};
`;
