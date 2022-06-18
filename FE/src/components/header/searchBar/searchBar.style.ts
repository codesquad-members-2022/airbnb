import styled from 'styled-components';

interface ISearchBarWrapper {
  isSmallSize: boolean;
}

const SearchBarWrapper = styled.div<ISearchBarWrapper>`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: ${({ isSmallSize }) => (isSmallSize ? '530' : '916')}px;
  height: ${({ isSmallSize }) => (isSmallSize ? '48' : '76')}px;
  border: 1px solid ${({ theme: { colors } }) => colors.grey4};
  border-radius: 60px;
  background: ${({ theme: { colors } }) => colors.white};
  padding: 18px;
`;

const ItemWrapper = styled.div`
  display: flex;
  flex: 1;
  padding-left: 25px;
`;

export { SearchBarWrapper, ItemWrapper };
