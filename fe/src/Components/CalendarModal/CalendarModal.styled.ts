import styled from "styled-components";

interface calendarContainerType {
  columnCount?: number;
  calendarModalStyle?: string;
}

export const CalendarContainer = styled.div<calendarContainerType>`
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
