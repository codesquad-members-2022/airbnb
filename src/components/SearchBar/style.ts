import styled from "styled-components";

export const SearchBar = styled.div`
  display: flex;
  position: relative;
  align-items: center;
  width: 916px;
  height: 76px;
  border-radius: 60px;
  border: 1px solid ${({ theme }) => theme.color.gray4};
  margin: 0 auto;
  background-color: ${({ theme }) => theme.color.white};
  box-shadow: 0 4px 6px -1px ${({ theme }) => theme.color.gray3};
`;

export const Block = styled.div`
  width: 1px;
  height: 44px;
  border-right: 1px solid ${({ theme }) => theme.color.gray5};
`;
