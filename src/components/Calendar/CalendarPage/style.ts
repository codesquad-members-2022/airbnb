import styled, { css } from "styled-components";

export const CalendarPage = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1 0 calc(318px);
  gap: 24px;
  margin: 0 32px;
  font-weight: ${({ theme }) => theme.fontWeight.bold};

  h2 {
    text-align: center;
  }
`;

export const CalendarContent = styled.div`
  display: flex;
  flex-direction: column;
  font-size: ${({ theme }) => theme.fontSize.smaller};
  color: ${({ theme }) => theme.color.black};
`;

export const CalendarDay = styled.div`
  display: grid;
  grid-auto-flow: row;
  grid-template-columns: repeat(7, minmax(0, 1fr));
  color: ${({ theme }) => theme.color.gray3};
`;

export const DayItem = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 48px;
  height: 48px;
`;
