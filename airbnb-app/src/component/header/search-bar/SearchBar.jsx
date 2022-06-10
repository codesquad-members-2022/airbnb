import { useContext, useRef, useEffect } from 'react';
import styled from 'styled-components';
import SEARCH_INPUT_TEXT from '@/constants/searchBarText';
import SearchInput from '@/component/header/search-bar/SearchInput';
import SearchInputModal from './SearchInputModal';
import { SearchBarContext } from '@/context/SearchBarProvider';
import { CalenderDateContext } from '@/context/CalenderDateProvider';
import { PersonnelContext } from '@/context/PersonnelProvider';
import { PriceContext } from '@/context/PriceProvider';

const searchInputText = Object.entries(SEARCH_INPUT_TEXT);

function SearchBar() {
  const { isFocus, resetFocusState } = useContext(SearchBarContext);
  const { checkInValue, checkOutValue, resetCurDate, resetCalenderInfos } = useContext(CalenderDateContext);
  const { personnelValue, resetPersonnel } = useContext(PersonnelContext);
  const { priceValue, resetPrice } = useContext(PriceContext);

  const searchBarRef = useRef(null);

  useEffect(() => {
    const handleClickedOutside = ({ target }) => {
      if (isFocus && searchBarRef && !searchBarRef.current.contains(target)) {
        resetFocusState();
      }
    };

    document.addEventListener('mousedown', handleClickedOutside);

    return () => {
      document.removeEventListener('mouseDown', handleClickedOutside);
    };
  }, [isFocus]);

  const inputProps = {
    체크인: {
      value: checkInValue,
      resetBtnHandler: resetCalenderInfos,
    },
    체크아웃: {
      value: checkOutValue,
      resetBtnHandler: resetCalenderInfos,
    },
    요금: {
      value: priceValue,
      resetBtnHandler: resetPrice,
    },
    인원: {
      value: personnelValue,
      resetBtnHandler: resetPersonnel,
    },
  };

  return (
    <Container ref={searchBarRef}>
      <Form method="POST" bgColor={isFocus ? 'grey6' : 'white'} onBlur={resetCurDate}>
        {searchInputText.map(([key, { label, placeholder }], index) => (
          <SearchInput
            {...inputProps[label]}
            key={key}
            label={label}
            placeholder={placeholder}
            isLastElement={isLastElement(index)}
          />
        ))}
      </Form>
      <SearchInputModal />
    </Container>
  );
}
const Container = styled.div`
  position: relative;
  max-width: 1070px;
  margin: 0 auto;
`;

const Form = styled.form`
  display: flex;
  margin: 30px auto 0;
  border: 1px solid ${({ theme }) => theme.color.grey4};
  border-radius: ${({ theme }) => theme.borderRadius.radius1};
  background-color: ${({ theme, bgColor }) => theme.color[bgColor]};
`;

const isLastElement = index => index === searchInputText.length - 1;

export default SearchBar;
