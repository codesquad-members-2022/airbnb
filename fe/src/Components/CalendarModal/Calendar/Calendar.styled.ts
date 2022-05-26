import { applyFlex, flexBoxType } from "Helpers/utils";
import styled from "styled-components";

interface activeDayType {
  radius?: string;
}

interface buttonType {
  type: string;
}

export const Monthly = styled.div`
  position: relative;
`;

export const YearMonthArea = styled.div`
  ${({ flex, justify }: flexBoxType) => applyFlex({ flex, justify })};
  width: 336px;
  margin-bottom: 40px;
  font-weight: 700;
  font-size: 24px;
`;

export const MonthDataArea = styled.div`
  display: grid;
  width: 336px;
  grid-template-rows: repeat(5, 48px);
  grid-template-columns: repeat(7, 1fr);
  grid-auto-rows: 48px;
`;

export const Day = styled.div`
  ${() => applyFlex({ flex: true, justify: "center", align: "center" })};
  cursor: pointer;
`;

export const StyledCheckInOut = styled.div`
  ${() => applyFlex({ flex: true, justify: "center", align: "center" })};

  width: 48px;
  height: 48px;
  color: #fff;

  background: #333333;
  border-radius: 30px;
`;

export const ActiveDay = styled.div`
  ${() => applyFlex({ flex: true, justify: "center", align: "center" })};
  ${({ radius }: activeDayType) => `border-radius:${radius}`};
  width: 100%;
  height: 100%;
  background: #f5f5f7;
`;

export const InActiveDay = styled.div`
  color: #bdbdbd;
`;

export const Button = styled.div`
  ${({ type }: buttonType) =>
    type && type === "prev" ? `position:absolute; left:10px; ` : `position:absolute;right:10px;`};
  cursor: pointer;
`;
