import { applyFlex } from "Helpers/utils";
import styled from "styled-components";

interface ActiveDayType {
  radius?: string;
}

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
  ${({ radius }: ActiveDayType) => `border-radius:${radius}`};
  width: 100%;
  height: 100%;
  background: #f5f5f7;
`;

export const InActiveDay = styled.div`
  color: #bdbdbd;
`;

export const DayArea = styled.div`
  ${() => applyFlex({ flex: true, justify: "center", align: "center" })};
  width: 100%;
  height: 100%;
  cursor: pointer;
`;
