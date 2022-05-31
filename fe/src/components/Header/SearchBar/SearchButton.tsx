import {
  SearchButton as SearchButtonContainer,
  StyledSearchIcon,
} from 'components/Header/SearchBar/searchBar.styled';
import { ModalContext } from 'contexts/ModalContext';
import { useContext } from 'react';

function SearchButton() {
  const { focusModal } = useContext(ModalContext);

  return (
    <SearchButtonContainer href="/result" aria-label="결과 찾기 버튼">
      <StyledSearchIcon />
      {focusModal !== '' && <span>검색</span>}
    </SearchButtonContainer>
  );
}

export default SearchButton;
