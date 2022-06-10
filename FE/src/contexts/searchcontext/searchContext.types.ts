import { Dispatch, SetStateAction } from 'react';

export interface ISearchContext {
  isSearchShowing: boolean;
  setIsSearchShowing: Dispatch<SetStateAction<boolean>>;
}

export interface IInputTextStyle {
  isSearchShowing: boolean;
}
