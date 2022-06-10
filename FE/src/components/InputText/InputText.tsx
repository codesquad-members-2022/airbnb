import React, { useContext } from 'react';

import {
  Container,
  SearchBarTitle,
  SearchBarInputText,
} from 'components/InputText/InputText.styled';

import { IInputTextProps } from 'components/InputText/InputText.types';
import { SearchContext } from 'contexts/searchcontext/searchContext';

export function InputText({ info, value }: IInputTextProps): JSX.Element {
  const { isSearchShowing } = useContext(SearchContext);

  return (
    <Container isSearchShowing={isSearchShowing}>
      <label htmlFor={info?.label}>
        <SearchBarTitle isSearchShowing={isSearchShowing}>
          {info?.title}
        </SearchBarTitle>
      </label>
      <SearchBarInputText
        type="text"
        id={info?.label}
        placeholder={info?.placeHolder}
        readOnly
        value={value}
        isSearchShowing={isSearchShowing}
      />
    </Container>
  );
}
