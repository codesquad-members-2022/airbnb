import { FlexType } from "Helpers/interface";
import { applyFlex } from "Helpers/utils";
import styled from "styled-components";

interface SearchResultContainerType {
  isMini?: boolean;
}

export const miniSearchBarStyle = `
width: 700px;
height: 76px;
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

export const headCountStyle = `
  width:400px;
  height:355px;
  background-color:#fff;
  border-radius:40px;
  margin-top:40px;
  margin-left:778px;
  padding:64px;
`;

export const calendarStyle = `
  background-color:#fff;
  width: 916px;
  margin-left: 262px;
  margin-top: 40px;
  padding: 88px;
  border-radius: 40px;
`;

export const SearchResultHeader = styled.header`
  height: 30px;
  display: flex;
  flex-direction: column;
`;

export const SearchResultHeaderContainer = styled.div`
  ${({ isMini }: SearchResultContainerType) => `height:${!isMini ? "120" : "240"}px`};
  border-bottom: 1px solid #000;
`;

export const SearchResultHeaderArea = styled.div`
  width: 1440px;
  margin: 0 auto;
`;

export const SearchResultArea = styled.div`
  ${({ flex }: FlexType) => applyFlex({ flex })};
`;

export const Tourist = styled.div`
  flex: 1;
  height: 1024px;
  background-color: blue;
`;

export const Map = styled.div`
  flex: 1;
  height: 1024px;
  background-color: green;
`;
