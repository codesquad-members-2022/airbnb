import { FlexType } from "Helpers/interface";
import { applyFlex } from "Helpers/utils";
import styled from "styled-components";

export const TicketContainer = styled.div<FlexType>`
  ${({ flex, justify }) => applyFlex({ flex, justify })};
  padding: 24px 0;
  border-bottom: 1px solid #c4c4c4;
  :first-child {
    padding-top: 0;
  }
  :last-child {
    padding-bottom: 0;
    border-bottom: none;
  }
`;

export const ContentArea = styled.div<FlexType>`
  ${({ flex, direction }) => applyFlex({ flex, direction })};
`;

export const ContentTitle = styled.div`
  font-weight: 700;
  margin-bottom: 10px;
`;

export const ContentDescription = styled.div`
  font-weight: 400;
  font-size: 14px;
  color: #828282;
`;

export const CountArea = styled.div<FlexType>`
  ${({ flex, align }) => applyFlex({ flex, align })};
`;

export const Button = styled.button<FlexType>`
  ${({ flex, justify, align }) => applyFlex({ flex, justify, align })};
  padding: 10px;
  width: 30px;
  height: 30px;
  border: 1px solid #828282;
  border-radius: 50%;
  font-size: 20px;
  font-weight: 700;
  cursor: pointer;
`;

export const Count = styled.div`
  width: 20px;
  text-align: center;
  margin: 0 19px;
  font-weight: 700;
`;
