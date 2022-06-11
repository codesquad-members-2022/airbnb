import styled from 'styled-components';
import COLOR from 'styles/colors';
import FONT from 'styles/font';
import IconButton from 'components/IconButton';
import Z_INDEX from 'styles/zIndex';
import { useContext } from 'react';
import { FilterContext } from 'store/FilterContext';
import { Link } from 'react-router-dom';
import { AccommodationContext } from 'store/AccommodationContext';

function SearchButton({ searchBarType, setSpreadSearchBar }) {
  const { activeModalName, modalDispatch } = useContext(FilterContext);
  const { filterAccommodations } = useContext(AccommodationContext);
  const isOpenModal = activeModalName !== 'NOTHING';
  return (
    <Link to="/searchResult">
      <SearchBtn
        searchBarType={searchBarType}
        onClick={() => {
          modalDispatch({ type: 'CLOSE' });
          filterAccommodations();
          setSpreadSearchBar(false);
        }}
      >
        <IconButton
          icon="search"
          width={searchBarType === 'mini' ? '16' : '24'}
          height={searchBarType === 'mini' ? '16' : '24'}
          fill="none"
          stroke={COLOR.WHITE}
        />
        {isOpenModal && <Text>검색</Text>}
      </SearchBtn>
    </Link>
  );
}

export default SearchButton;

const SearchBtn = styled.span`
  position: absolute;
  top: 50%;
  right: ${({ searchBarType }) => (searchBarType === 'mini' ? '8px' : '16px')};
  transform: translateY(-50%);
  z-index: ${Z_INDEX.SEARCH_BTN};
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  min-width: ${({ searchBarType }) => searchBarType !== 'mini' && '42px'};
  width: ${({ searchBarType }) => (searchBarType === 'mini' ? '32px' : 'auto')};
  height: ${({ searchBarType }) => (searchBarType === 'mini' ? '32px' : '42px')};
  padding: 0 8px;
  border-radius: 32px;
  background: ${COLOR.PRIMARY};
  cursor: pointer;

  > button {
    width: 100%;
    height: 100%;
    font-size: 0;
  }
`;

const Text = styled.div`
  flex-shrink: 0;
  font-size: ${FONT.SIZE.LARGE};
  font-weight: ${FONT.WEIGHT.MEDIUM};
  color: ${COLOR.WHITE};
`;
