import React, { useState } from 'react';

import PeriodArea from '@components/SearchBar/PeriodArea';
import PersonnelArea from '@components/SearchBar/PersonnelArea';
import PriceArea from '@components/SearchBar/PriceArea';
import * as S from '@components/SearchBar/SearchBar.style';
import SearchButton from '@components/SearchBar/SearchButton';
import { SEARCH_BAR_SIZE } from '@components/SearchBar/constants';

export interface SearchBarTypes {
  size?: string;
}

const SearchBar = ({ size = SEARCH_BAR_SIZE.LARGE }: SearchBarTypes) => {
  const [isActive, setIsActive] = useState(false);

  const toggleIsActive = () => setIsActive(true);

  return (
    <S.Container {...{ size }} onClick={toggleIsActive}>
      <PeriodArea {...{ size }} />
      <PriceArea {...{ size }} />
      <PersonnelArea {...{ size }} />
      <SearchButton {...{ size }} isButtonActive={isActive} />
    </S.Container>
  );
};

export default SearchBar;
