import React, { useEffect, useState } from 'react';

import PeriodArea from '@components/SearchBar/PeriodArea';
import PersonnelArea from '@components/SearchBar/PersonnelArea';
import PriceArea from '@components/SearchBar/PriceArea';
import * as S from '@components/SearchBar/SearchBar.style';
import SearchButton from '@components/SearchBar/SearchButton';
import { SEARCH_BAR_SIZE } from '@components/SearchBar/constants';
import { BASE_URL } from '@constants';
import { SearchBarDataTypes } from '@data';
import useModal from '@lib/hooks/useModal';

export interface SearchBarTypes {
  size?: string;
}

const SearchBar = ({ size = SEARCH_BAR_SIZE.LARGE }: SearchBarTypes) => {
  const [isActive, setIsActive] = useState(false);
  const [searchBarData, setSearchBarData] = useState<SearchBarDataTypes | null>(null);
  const [containerRef, element] = useModal();

  // TODO: fetch 로직 분리
  useEffect(() => {
    fetch(`${BASE_URL}/api/search-bar`)
      .then((res) => res.json())
      .then((data) => setSearchBarData(data));
  }, []);

  const toggleIsActive = () => setIsActive(true);

  return (
    <S.Container
      size={size}
      onClick={toggleIsActive}
      ref={containerRef as React.RefObject<HTMLDivElement>}
    >
      {searchBarData && (
        <>
          <PeriodArea size={size} element={element} />
          <PriceArea size={size} element={element} />
          <PersonnelArea size={size} personnel={searchBarData.personnel} />
        </>
      )}
      <SearchButton isButtonActive={isActive} size={size} />
    </S.Container>
  );
};

export default SearchBar;
