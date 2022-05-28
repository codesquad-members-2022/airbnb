import { useState } from 'react';

import PeriodArea from '@components/SearchBar/PeriodArea';
import PersonnelArea from '@components/SearchBar/PersonnelArea';
import PriceArea from '@components/SearchBar/PriceArea';
import * as S from '@components/SearchBar/SearchBar.style';
import SearchButton from '@components/SearchBar/SearchButton';
import { SEARCH_BAR_SIZE } from '@components/SearchBar/constants';
import { searchBarData } from '@data';

export type SearchBarTypes = {
  size?: string;
};

const SearchBar = ({ size = SEARCH_BAR_SIZE.LARGE }: SearchBarTypes) => {
  const [isActive, setIsActive] = useState(false);
  const { period, price, personnel } = searchBarData;

  const toggleIsActive = () => setIsActive(isActive => !isActive);

  return (
    <S.Container size={size} onClick={toggleIsActive}>
      <PeriodArea size={size} period={period} />
      <PriceArea size={size} price={price} />
      <PersonnelArea size={size} personnel={personnel} />
      <SearchButton isButtonActive={isActive} size={size} />
    </S.Container>
  );
};

export default SearchBar;
