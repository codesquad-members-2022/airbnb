import styled from "styled-components";

interface CalendarContainerType {
  columnCount?: number;
  calendarModalStyle?: string;
}

export const CalendarContainer = styled.div<CalendarContainerType>`
  display: grid;
  ${({ columnCount }) => {
    return `grid-template-columns: repeat(${columnCount || 2}, 1fr)`;
  }};

  grid-template-rows: repeat(1, 1fr);
  grid-auto-rows: 1fr;
  ${({ calendarModalStyle }) => {
    return calendarModalStyle ? calendarModalStyle : "";
  }};
`;
