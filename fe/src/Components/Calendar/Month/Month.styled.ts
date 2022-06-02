import { FlexType } from "Helpers/interface";
import { applyFlex } from "Helpers/utils";
import styled from "styled-components";

interface ButtonType {
  type: string;
}

export const Monthly = styled.div`
  position: relative;
`;

export const YearMonthArea = styled.div`
  ${({ flex, justify }: FlexType) => applyFlex({ flex, justify })};
  width: 90%;
  height: 40px;
  margin-bottom: 40px;
  font-weight: 700;
  font-size: 24px;
`;

export const MonthDataArea = styled.div`
  display: grid;
  width: 90%;
  height: 90%;
  grid-template-rows: repeat(5, 48px);
  grid-template-columns: repeat(7, 1fr);
  grid-auto-rows: 48px;
`;

export const DayArea = styled.div`
  ${() => applyFlex({ flex: true, justify: "center", align: "center" })};
  cursor: pointer;
`;

export const Button = styled.div`
  ${({ type }: ButtonType) =>
    type && type === "prev" ? `position:absolute; left:10px; ` : `position:absolute;right:10px;`};
  cursor: pointer;
`;
