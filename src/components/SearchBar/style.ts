import styled, { css } from "styled-components";

import { SearchModalType } from "../../types/searchModal";

export const SearchBar = styled.div<{ openedModal?: SearchModalType | null }>`
  display: flex;
  position: relative;
  align-items: center;
  width: 916px;
  height: 76px;
  border-radius: 60px;
  border: 1px solid ${({ theme }) => theme.color.gray4};
  margin: 0 auto;
  background-color: ${({ theme }) => theme.color.white};

  ${({ openedModal }) =>
    openedModal &&
    css`
      background-color: ${({ theme }) => theme.color.gray6}; ;
    `}
`;

export const Block = styled.div`
  width: 1px;
  height: 44px;
  border-right: 1px solid ${({ theme }) => theme.color.gray5};
`;
