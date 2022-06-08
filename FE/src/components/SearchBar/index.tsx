import { useEffect, useState } from 'react';

import PeriodArea from '@components/SearchBar/PeriodArea';
import PersonnelArea from '@components/SearchBar/PersonnelArea';
import PriceArea from '@components/SearchBar/PriceArea';
import * as S from '@components/SearchBar/SearchBar.style';
import SearchButton from '@components/SearchBar/SearchButton';
import { SEARCH_BAR_SIZE } from '@components/SearchBar/constants';
import { BASE_URL } from '@constants';
import { SearchBarDataTypes } from '@data';

export interface SearchBarTypes {
  size?: string;
}

const SearchBar = ({ size = SEARCH_BAR_SIZE.LARGE }: SearchBarTypes) => {
  const [isActive, setIsActive] = useState(false);
  const [searchBarData, setSearchBarData] = useState<SearchBarDataTypes | null>(null);

  // TODO: fetch 로직 분리
  useEffect(() => {
    fetch(`${BASE_URL}/api/search-bar`)
      .then((res) => res.json())
      .then((data) => setSearchBarData(data));
  }, []);

  const toggleIsActive = () => setIsActive((isActive) => !isActive);

  return (
    <S.Container size={size} onClick={toggleIsActive}>
      {searchBarData && (
        <>
          <PeriodArea size={size} />
          <PriceArea size={size} price={searchBarData.price} />
          <PersonnelArea size={size} personnel={searchBarData.personnel} />
        </>
      )}
      <SearchButton isButtonActive={isActive} size={size} />
    </S.Container>
  );
};

export default SearchBar;
