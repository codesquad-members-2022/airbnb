import * as S from './SearchBar.style';

interface ItemContents {
  title: string;
  value: string;
  width: number;
  onClick?: () => void;
}

export function SearchBarItem({
  title,
  value,
  width,
  onClick,
}: ItemContents): JSX.Element {
  return (
    <S.searchBarItem width={width} onClick={onClick}>
      <S.itemTitle>{title}</S.itemTitle>
      <S.itemContents>{value}</S.itemContents>
    </S.searchBarItem>
  );
}

SearchBarItem.defaultProps = {
  onClick: () => {},
};
