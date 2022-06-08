import { PRICE_CHART_WIDTH } from "Helpers/constant";
import styled from "styled-components";

export const StyledRange = styled.input.attrs({ type: "range" })`
  position: absolute;
  top: 50px;
  width: ${PRICE_CHART_WIDTH}px;
  height: 100px;
  border-radius: 8px;
  background: none;
  pointer-events: none;
  -webkit-appearance: none;
  ::-webkit-slider-thumb {
    width: 24px;
    height: 24px;
    border-radius: 50%;
    border: 1px solid #000;
    pointer-events: all;
    -webkit-appearance: none;
    cursor: pointer;
  }
`;
