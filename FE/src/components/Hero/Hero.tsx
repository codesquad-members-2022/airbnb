import React, { useMemo, useState } from 'react';
import { Outlet } from 'react-router-dom';

import { Header } from 'components/Header';
import { Search } from 'components/Search';

import { ISearchContext } from 'contexts/searchcontext/searchContext.types';

import { SearchContext } from 'contexts/searchcontext/searchContext';
import { HeroContainer, Wrapper } from './Hero.styled';

export function Hero(): JSX.Element {
  const [isSearchShowing, setIsSearchShowing] = useState<boolean>(false);

  const searchContext: ISearchContext = useMemo(
    () => ({
      isSearchShowing,
      setIsSearchShowing,
    }),
    [isSearchShowing],
  );

  return (
    <Wrapper>
      <SearchContext.Provider value={searchContext}>
        <HeroContainer isSearchShowing={isSearchShowing}>
          <Header />
          <Search />
        </HeroContainer>
        <Outlet context={{ setIsSearchShowing }} />
      </SearchContext.Provider>
    </Wrapper>
  );
}
