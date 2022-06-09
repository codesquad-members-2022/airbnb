import { FlexType } from "Helpers/interface";
import { applyFlex } from "Helpers/utils";
import styled from "styled-components";

export const PriceModalContainer = styled.div<FlexType>`
  position: absolute;
  width: 500px;
  height: 364px;
  background-color: #fff;
  box-shadow: 0px 4px 10px rgba(51, 51, 51, 0.1), 0px 0px 4px rgba(51, 51, 51, 0.05);
  margin-top: 40px;
  margin-left: 600px;
  border-radius: 40px;
  padding: 40px;
  ${({ flex, direction }) => applyFlex({ flex, direction })};
`;

export const PriceChartInfoArea = styled.div`
  margin: 20px 0 40px 0;
`;

export const PriceChartArea = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
`;

export const Title = styled.div`
  font-size: 1.5rem;
  margin-bottom: 10px;
`;
export const PriceChartInfo = styled.div`
  font-size: 1.25rem;
  margin-bottom: 10px;
`;
export const PriceChartAddInfo = styled.div`
  font-size: 1.25rem;
`;
