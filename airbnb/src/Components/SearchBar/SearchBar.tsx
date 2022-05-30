import * as S from './SearchBarStyle';
import { SearchBarItem } from './Item';
import { SearchButton } from './SearchButton';

export function SearchBar() {
  return (
    <S.searchBarWrapper>
      <SearchBarItem title="체크인" value="내용" width={112} />
      <SearchBarItem title="체크아웃" value="내용" width={160} />
      <S.line />
      <SearchBarItem title="요금" value="내용" width={208} />
      <S.line />
      <SearchBarItem title="인원" value="내용" width={194} />
      <SearchButton />
    </S.searchBarWrapper>
  );
}
