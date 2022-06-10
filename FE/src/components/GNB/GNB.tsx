import React, { useContext } from 'react';

import { GNBS } from 'constant';

import { SearchContext } from 'contexts/searchcontext/searchContext';

import { GNBMenu, GNBBtn } from './GNB.styled';

export function GNB(): JSX.Element {
  const { isSearchShowing } = useContext(SearchContext);
  const gnbBtns = GNBS.map(gnb => <GNBBtn key={gnb.id}>{gnb.text}</GNBBtn>);

  return <GNBMenu isSearchShowing={isSearchShowing}>{gnbBtns}</GNBMenu>;
}
