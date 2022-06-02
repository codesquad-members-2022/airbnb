import * as S from './SearchBar.style';

interface ItemContents {
  title: string;
  value: string;
  width: number;
}

export function SearchBarItem({
  title,
  value,
  width,
}: ItemContents): JSX.Element {
  return (
    <S.searchBarItem width={width}>
      <S.itemTitle>{title}</S.itemTitle>
      <S.itemContents>{value}</S.itemContents>
    </S.searchBarItem>
  );
}
