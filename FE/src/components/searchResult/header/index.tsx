import React from 'react';
import { NavLink } from 'react-router-dom';

import SearchBar from 'components/header/searchBar';
import Logo from 'components/Icons/Logo';
import * as Styled from 'components/searchResult/header/searchResultHeader.style';
import LoginMenu from 'components/header/gnb/loginMenu';

function SearchResultHeader() {
  return (
    <Styled.HeaderWrapper>
      <NavLink to="/">
        <Logo />
      </NavLink>
      {/* eslint-disable-next-line react/jsx-boolean-value */}
      <SearchBar isSmallSize={true} />
      <LoginMenu />
    </Styled.HeaderWrapper>
  );
}

export default SearchResultHeader;
