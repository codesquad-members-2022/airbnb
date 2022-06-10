import { createContext } from 'react';
import { ISearchContext } from './searchContext.types';

export const SearchContext = createContext<ISearchContext>({
  isSearchShowing: false,
  setIsSearchShowing: () => {
    return false;
  },
});
