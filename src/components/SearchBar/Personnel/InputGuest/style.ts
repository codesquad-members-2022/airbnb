import styled, { css } from "styled-components";

import { ReactComponent as MINUS_BUTTON } from "@assets/minus-icon.svg";
import { ReactComponent as PLUS_BUTTON } from "@assets/plus-icon.svg";

export const InputGuest = styled.div`
  display: flex;
  flex-direction: column;
  width: 280px;
`;

export const InputGuestBox = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 24px 0;

  &:first-child {
    padding-top: 0;
  }

  &:last-child {
    padding-bottom: 0;
  }

  & + & {
    border-top: 2px solid ${({ theme }) => theme.color.gray4};
  }
`;

export const GuestLabel = styled.div`
  display: flex;
  flex-direction: column;
  gap: 6px;

  h4 {
    font-size: ${({ theme }) => theme.fontSize.large};
    font-weight: ${({ theme }) => theme.fontWeight.bold};
  }
  span {
    font-size: ${({ theme }) => theme.fontSize.small};
    color: ${({ theme }) => theme.color.gray3};
  }
`;

export const GuestController = styled.div`
  display: flex;
  align-items: center;
  gap: 19px;

  span {
    width: 25px;
    text-align: center;
    font-size: ${({ theme }) => theme.fontSize.larger};
    font-weight: ${({ theme }) => theme.fontWeight.bold};
    color: ${({ theme }) => theme.color.gray1};
  }
`;

export const MinusButton = styled(MINUS_BUTTON)`
  cursor: pointer;
  width: 30px;
  height: 30px;

  path {
    stroke: ${({ theme }) => theme.color.gray3};
  }

  :hover {
    path {
      stroke: ${({ theme }) => theme.color.black};
    }
  }
`;

export const PlusButton = styled(PLUS_BUTTON)`
  cursor: pointer;
  width: 30px;
  height: 30px;

  path {
    stroke: ${({ theme }) => theme.color.gray3};
  }

  :hover {
    path {
      stroke: ${({ theme }) => theme.color.black};
    }
  }
`;
