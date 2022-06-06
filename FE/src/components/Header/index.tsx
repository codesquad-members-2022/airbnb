import { useState } from 'react';

import Calender from '@components/Calender';
import * as S from '@components/Header/Header.style';
import SearchBar from '@components/SearchBar';
const Header = () => {
  return (
    <S.Container>
      <SearchBar />
      <Calender />
    </S.Container>
  );
};

export default Header;
