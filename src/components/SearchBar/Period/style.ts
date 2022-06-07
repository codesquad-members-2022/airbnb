import styled, { css } from "styled-components";

import { SearchModalType } from "../../../types/searchModal";

export const Period = styled.div<{ openedModal?: SearchModalType | null }>`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  width: 361px;
  height: 74px;
  padding: 0 24px 0 40px;
  border-radius: 60px;
  cursor: pointer;

  :hover {
    background-color: ${({ theme }) => theme.color.white};
    box-shadow: 0 4px 6px -1px ${({ theme }) => theme.color.gray3};
  }

  ${({ openedModal }) =>
    openedModal === "PERIOD" &&
    css`
      background-color: ${({ theme }) => theme.color.white};
      box-shadow: 0 4px 6px -1px ${({ theme }) => theme.color.gray3};
    `}
`;
