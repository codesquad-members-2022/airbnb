import { useContext } from 'react';
import styled from 'styled-components';
import SEARCH_INPUT_TEXT from '@/constants/searchBarText';
import { SearchBarContext } from '@component/header/search-bar/SearchBarProvider';
import SearchInput from '@/component/header/search-bar/SearchInput';
import SearchInputModal from './SearchInputModal';

const searchInputText = Object.entries(SEARCH_INPUT_TEXT);

function SearchBar() {
  const { isFocus, resetFocusState } = useContext(SearchBarContext);

  return (
    <>
      <Form method="POST" bgColor={isFocus ? 'grey6' : 'white'} onBlur={resetFocusState}>
        {searchInputText.map(([key, { label, placeholder }], index) => (
          <SearchInput key={key} label={label} placeholder={placeholder} isLastElement={isLastElement(index)} />
        ))}
      </Form>
      <SearchInputModal />
    </>
  );
}

const Form = styled.form`
  margin: 30px auto 0;
  max-width: 1070px;
  border: 1px solid ${({ theme }) => theme.color.grey4};
  border-radius: ${({ theme }) => theme.borderRadius.radius1};
  background-color: ${({ theme, bgColor }) => theme.color[bgColor]};
`;

const isLastElement = index => index === searchInputText.length - 1;

export default SearchBar;
