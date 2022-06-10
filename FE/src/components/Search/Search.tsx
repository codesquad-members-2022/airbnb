import React, { useState, useMemo, useReducer, useContext } from 'react';

import { Check } from 'components/Check';
import { Fare } from 'components/Fare';
import { Personnel } from 'components/Personnel';

import { CheckContext } from 'contexts/checkcontext/checkContext';
import { PersonnelContext } from 'contexts/personnelcontext/personnelContext';

import { ICheckContext } from 'contexts/checkcontext/checkContext.types';
import { IPersonnelContext } from 'contexts/personnelcontext/personnelContext.types';

import { initialPersonnelState, personnelReducer } from 'store/personnelStore';

import { Stick } from 'common/util.styled';
import {
  SearchBar,
  SearchBtn,
  SearchForm,
  SearchBtnImg,
} from 'components/Search/Search.styeld';
import { SearchContext } from 'contexts/searchcontext/searchContext';
import { FareProvider } from 'contexts/farecontext/farecontext';

export function Search(): JSX.Element {
  const [checkIn, setCheckIn] = useState<string>('');
  const [checkOut, setCheckOut] = useState<string>('');
  const [mouseOverCheckOut, setMouseOverCheckOut] = useState<string>('');
  const [personnelState, personnelDispatch] = useReducer(
    personnelReducer,
    initialPersonnelState,
  );
  const { isSearchShowing, setIsSearchShowing } = useContext(SearchContext);

  const checkContext: ICheckContext = useMemo(
    () => ({
      checkIn,
      checkOut,
      setCheckIn,
      setCheckOut,
      mouseOverCheckOut,
      setMouseOverCheckOut,
    }),
    [checkIn, checkOut, mouseOverCheckOut],
  );

  const personnelContext: IPersonnelContext = useMemo(
    () => ({
      personnelState,
      personnelDispatch,
    }),
    [personnelState],
  );

  const handleClickSearchBar = () => setIsSearchShowing(false);

  return (
    <SearchBar isSearchShowing={isSearchShowing} onClick={handleClickSearchBar}>
      <SearchForm isSearchShowing={isSearchShowing}>
        <CheckContext.Provider value={checkContext}>
          <Check />
        </CheckContext.Provider>
        <Stick />
        <FareProvider>
          <Fare />
        </FareProvider>
        <Stick />
        <PersonnelContext.Provider value={personnelContext}>
          <Personnel />
        </PersonnelContext.Provider>
        <SearchBtn type="submit" isSearchShowing={isSearchShowing}>
          <SearchBtnImg
            src="./assets/images/search.svg"
            alt="검색"
            isSearchShowing={isSearchShowing}
          />
        </SearchBtn>
      </SearchForm>
    </SearchBar>
  );
}
