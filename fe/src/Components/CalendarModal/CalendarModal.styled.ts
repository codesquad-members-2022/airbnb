import { applyFlex, flexBoxType } from "Helpers/utils";
import styled from "styled-components";

interface calenderContainerType extends flexBoxType {
  width?: string;
  height?: string;
  backgroundColor?: string;
}

export const CalenderContainer = styled.div`
  ${({ flex, justify }: calenderContainerType) => applyFlex({ flex, justify })};
  background-color: #352536;
  width: 912px;
  ${({ width }: calenderContainerType) => `width:${width}`};
  ${({ height }: calenderContainerType) => `height:${height}`};
  ${({ backgroundColor }: calenderContainerType) => `background-color:${backgroundColor}`};

  margin-left: 262px;
  margin-top: 40px;
  padding: 88px;
  border-radius: 40px;
`;
