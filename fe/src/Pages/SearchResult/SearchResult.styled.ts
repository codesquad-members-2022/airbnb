import { PRICE_CHART_WIDTH } from "Helpers/constant";
import { FlexType } from "Helpers/interface";
import { applyFlex } from "Helpers/utils";
import styled from "styled-components";

interface SearchResultContainerType {
  isMini?: boolean;
}

export const miniSearchBarStyle = `
  width: 700px;
  height: 50px;
  background-color: #fff;
  border-radius: 30px;
  border:1px solid #000;
  padding: 16px;
`;

export const searchBarStyle = `
  width: 916px;
  height: 76px;
  margin-top: 20px;
  margin-left: 262px;
  background-color: #fff;
  border-radius: 30px;
  border:1px solid #000;
  padding: 16px;
`;

export const calendarStyle = `
  background-color:#fff;
  box-shadow: 0px 4px 10px rgba(51, 51, 51, 0.1), 0px 0px 4px rgba(51, 51, 51, 0.05);
  width: 916px;
  margin-left: 262px;
  margin-top: 40px;
  padding: 88px;
  border-radius: 40px;
`;

export const priceChartStyle = `
  width: ${PRICE_CHART_WIDTH};
  height:100px;
`;

export const headCountStyle = `
  width:400px;
  height:355px;
  background-color:#fff;
  box-shadow: 0px 4px 10px rgba(51, 51, 51, 0.1), 0px 0px 4px rgba(51, 51, 51, 0.05);
  border-radius:40px;
  margin-top:40px;
  margin-left:778px;
  padding:64px;
`;

export const SearchResultHeader = styled.header`
  height: 30px;
  display: flex;
  flex-direction: column;
`;

export const SearchResultHeaderContainer = styled.div`
  ${({ isMini }: SearchResultContainerType) => `height:${!isMini ? "120" : "240"}px`};
  box-shadow: 0px 0px 4px rgba(204, 204, 204, 0.5), 0px 2px 4px rgba(0, 0, 0, 0.25);
  backdrop-filter: blur(4px);
`;

export const SearchResultHeaderArea = styled.div`
  width: 1440px;
  margin: 0 auto;
`;

export const SearchResultArea = styled.div`
  ${({ flex }: FlexType) => applyFlex({ flex })};
`;

export const Tourist = styled.div`
  flex: 2;
  height: 1024px;
  background-color: white;
  overflow: auto;
  z-index: -1;
`;

export const MapArea = styled.div`
  flex: 3;
  height: 1024px;
  background-color: green;
  z-index: -1;
`;

export const accommodationStyle = `
  width:732px;
  height:248px;
  padding:24px;
  border-bottom:1px solid #E0E0E0;
`;

export const photoStyle = `
  width:330px;
  height:200px;
  margin-right:24px;
`;

export const SearchConditions = styled.div<FlexType>`
  margin: 32px 0 8px 24px;
  div {
    font-size: 0.75rem;
  }
  ${({ flex }) => applyFlex({ flex })};
`;

export const Title = styled.div`
  font-size: 1.5rem;
  font-weight: 700;
  margin: 0 0 32px 24px;
`;
