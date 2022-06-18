import styled from 'styled-components';

const Item = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  cursor: pointer;
`;

interface IItemProps {
  isSmallSize: boolean;
}

const ItemTitle = styled.h4<IItemProps>`
  font-size: ${({ theme: { fontSize } }) => fontSize.xSmall};
  font-weight: ${({ theme: { fontWeight } }) => fontWeight.bold};
  color: ${({ theme: { colors } }) => colors.black};
  display: ${({ isSmallSize }) => (isSmallSize ? 'none' : 'block')};
`;

const ItemContents = styled.p<IItemProps>`
  font-size: ${({ isSmallSize }) => (isSmallSize ? '12px' : '16px')};
  font-weight: ${({ theme: { fontWeight } }) => fontWeight.normal};
  color: ${({ theme: { colors } }) => colors.grey2};
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;

export { Item, ItemTitle, ItemContents };
