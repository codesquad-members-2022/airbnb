import { PRICE_CHART_WIDTH } from "Helpers/constant";
import styled from "styled-components";

interface PriceChartType {
  priceChartStyle?: string;
}

export const PriceChartSVG = styled.svg<PriceChartType>`
  transform: scaleY(-1);
  height: 300px;
  width: ${PRICE_CHART_WIDTH}px;
  ${({ priceChartStyle }) => priceChartStyle};
`;
