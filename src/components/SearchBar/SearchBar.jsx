import { useContext } from 'react';
import styled from 'styled-components';
import COLOR from 'styles/colors';
import Calendar from 'components/Calendar/Calendar';
import PriceModal from 'components/PriceModal';
import GuestModal from 'components/GuestModal';
import { FilterContext } from 'store/FilterContext';
import SearchButton from './SearchButton';
import Schedule from './Schedule';
import Price from './Price';
import Guest from './Guest';

function SearchBar({ setSpreadSearchBar }) {
  const { activeModalName } = useContext(FilterContext);

  return (
    <LargeContainer>
      <Schedule />
      <Price />
      <Guest />
      <SearchButton setSpreadSearchBar={setSpreadSearchBar} />
      <ActiveModal activeModalName={activeModalName} />
    </LargeContainer>
  );
}

export default SearchBar;

function ActiveModal({ activeModalName }) {
  if (activeModalName === 'CALENDAR') {
    return <Calendar />;
  }
  if (activeModalName === 'PRICE') {
    return <PriceModal />;
  }
  if (activeModalName === 'GUEST') {
    return <GuestModal />;
  }
  if (activeModalName === 'NOTHING') {
    return null;
  }
  throw new Error(`해당하는 ${activeModalName}모달창이 존재하지 않습니다.`);
}

const LargeContainer = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 916px;
  height: 76px;
  margin: 20px auto 0;
  padding-right: 90px;
  border-radius: 60px;
  border: 1px solid ${COLOR.GREY[300]};
  background: ${COLOR.WHITE};
`;
