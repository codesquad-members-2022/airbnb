import * as S from './SearchBarStyle';

type ItemContents = {
  title: string;
  value: string;
  width: number;
};

export function SearchBarItem({ title, value, width }: ItemContents) {
  return (
    <S.searchBarItem width={width}>
      <S.itemTitle>{title}</S.itemTitle>
      <S.itemContents>{value}</S.itemContents>
    </S.searchBarItem>
  );
}
