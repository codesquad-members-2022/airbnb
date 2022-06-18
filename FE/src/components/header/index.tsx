import React from 'react';

import GNB from 'components/header/gnb';
import * as Styled from 'components/header/header.style';

import SearchBar from './searchBar';

function Header() {
  return (
    <Styled.Header>
      <Styled.HeaderWrapper>
        <GNB />
        <SearchBar isSmallSize={false} />
      </Styled.HeaderWrapper>
    </Styled.Header>
  );
}

export default Header;
