import styled, { css } from 'styled-components';
import { ReactComponent as SearchIcon } from 'images/FE_숙소예약서비스/Property 1=search.svg';
import { ReactComponent as CrossIcon } from 'images/FE_숙소예약서비스/Property 1=x-circle.svg';

type SearchBarContainerType = {
  isClicked: boolean;
};

export const SearchBarContainer = styled.div`
  position: relative;
`;

export const SearchBarWrap = styled.div<SearchBarContainerType>`
  display: flex;
  align-items: center;
  width: 916px;
  height: 76px;
  border: 1px solid ${({ theme }) => theme.colors.grey4};
  border-radius: 999px;

  background: ${({ isClicked }) =>
    isClicked
      ? css`
          ${({ theme }) => theme.colors.grey5};
        `
      : css`
          ${({ theme }) => theme.colors.white}
        `};
`;

interface ContainerType {
  isClicked?: boolean;
  focusModal?: string;
  id: string;
}

export const CommonContainer = styled.div<ContainerType>`
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 100%;
  border-radius: 999px;
  padding: 0px 24px;
  flex-grow: 1;

  &:hover {
    background: ${({ theme }) => theme.colors.grey6};
  }

  ${({ focusModal, id, isClicked }) =>
    focusModal === id &&
    isClicked &&
    css`
      background: ${({ theme }) => theme.colors.white};
      box-shadow: 0px 0px 13px 2px rgba(51, 51, 51, 0.29);
    `};
`;

export const CommonButton = styled.button`
  display: flex;
  flex-direction: column;
  text-align: left;
  width: 100%;
`;

export const Label = styled.span`
  display: inline-block;
  margin-bottom: 4px;
  ${({ theme }) => theme.fontStyles.bold12px};
`;

export const SelectedOption = styled.span`
  width: 100%;
  text-align: left;
  color: ${({ theme }) => theme.colors.grey2};
  ${({ theme }) => theme.fontStyles.normal16px};

  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;

export const SearchButton = styled.a`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 8px;
  height: 42px;
  border-radius: 999px;
  background: ${({ theme }) => theme.colors.primary};

  span {
    margin: 0 8px;
    color: ${({ theme }) => theme.colors.white};
    ${({ theme }) => theme.fontStyles.bold18px};
  }
`;

export const StyledSearchIcon = styled(SearchIcon)`
  path {
    stroke: ${({ theme }) => theme.colors.white};
  }
`;

export const StyledCrossIcon = styled(CrossIcon)`
  path {
    fill: ${({ theme }) => theme.colors.grey6};
  }

  &:hover {
    path {
      fill: ${({ theme }) => theme.colors.grey5};
    }
  }
`;
