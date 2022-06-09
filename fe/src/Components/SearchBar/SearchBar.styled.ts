import { FlexType, SearchBarContainerType } from "Helpers/interface";
import { applyFlex } from "Helpers/utils";
import styled from "styled-components";

interface ContentContainerType {
  width?: string;
}

export const Container = styled.div`
  ${({ flex, justify }: SearchBarContainerType) => applyFlex({ flex, justify })};
  position: relative;
  ${({ searchBarStyle }: SearchBarContainerType) => searchBarStyle};
  margin-bottom: 20px;
`;

export const DateArea = styled.div`
  ${({ flex, align }: FlexType) => applyFlex({ flex, align })};
  width: 330px;
  border-right: 1px solid #e0e0e0;
`;

export const PriceArea = styled.div`
  ${({ flex, justify, align }: FlexType) => applyFlex({ flex, justify, align })};
  width: 250px;
  border-right: 1px solid #e0e0e0;
`;

export const HeadCountArea = styled.div`
  ${({ flex, justify, align }: FlexType) => applyFlex({ flex, justify, align })};
  width: 298px;
`;

export const SearchButton = styled.div`
  width: 40px;
  height: 40px;
  background: #e84c60;
  border-radius: 30px;
  ${({ flex, align }: FlexType) => applyFlex({ flex, align })}
`;

export const ActiveContent = styled.div`
  width: 150%;
  font-size: 0.85rem;
  color: #010101;
`;
export const InActiveContent = styled.div`
  color: #4f4f4f;
`;

export const ContentContainer = styled.div<ContentContainerType>`
  margin-left: 24px;
  cursor: pointer;
  width: 112px;
  ${({ width }) => `width:${width}`};
`;
export const ContentHeader = styled.header`
  font-weight: 700;
  font-size: 12px;
  line-height: 17px;
  margin-bottom: 4px;
`;

export const SearchButtonArea = styled.div`
  position: absolute;
  right: 20px;
`;
