import { useContext } from 'react';
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
  const { isFocus } = useContext(SearchBarContext);
  const { checkInValue, checkOutValue, resetCurDate, resetCalenderInfos } = useContext(CalenderDateContext);
  const { personnelValue, resetPersonnel } = useContext(PersonnelContext);
  const { priceValue, resetPrice } = useContext(PriceContext);

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

  function handleBlur() {
    resetCurDate();
  }

  return (
    <Container>
      <Form method="POST" bgColor={isFocus ? 'grey6' : 'white'} onBlur={handleBlur}>
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
