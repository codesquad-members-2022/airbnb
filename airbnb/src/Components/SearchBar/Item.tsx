import * as S from './SearchBar.style';

interface ItemContentsProps {
  title: string;
  value: string;
  width: number;
  onClick?: (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => void;
}

export function SearchBarItem({
  title,
  value,
  width,
  onClick,
}: ItemContentsProps): JSX.Element {
  return (
    <S.searchBarItem width={width} onClick={onClick}>
      <S.itemTitle>{title}</S.itemTitle>
      <S.itemContents>{value}</S.itemContents>
    </S.searchBarItem>
  );
}
