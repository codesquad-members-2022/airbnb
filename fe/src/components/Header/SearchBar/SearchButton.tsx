import {
  SearchButton as SearchButtonContainer,
  StyledSearchIcon,
} from 'components/Header/SearchBar/searchBar.styled';

import { useModal } from 'hooks/useModal';
import { usePeriodDispatch, usePeriodState } from 'hooks/usePeriod';
import { usePersonnelState } from 'hooks/usePersonnel';
import { usePriceState } from 'hooks/usePrice';

import { makeDateString, mockDate } from 'utils/util';

function SearchButton() {
  const { searchBarFocusModal, closeModal } = useModal();
  const { checkIn, checkOut } = usePeriodState();
  const { setCheckIn, setCheckOut } = usePeriodDispatch();
  const { counter } = usePersonnelState();
  const { priceRange } = usePriceState();

  const isCheckInState = checkIn.getTime() === mockDate.getTime();
  const isCheckOutState = checkOut.getTime() === mockDate.getTime();

  const handleCheckInOutDay = () => {
    if (isCheckOutState && !isCheckInState) {
      setCheckOut(new Date(checkIn.getFullYear(), checkIn.getMonth(), checkIn.getDate() + 1));
    } else if (!isCheckOutState && isCheckInState) {
      setCheckIn(new Date(checkOut.getFullYear(), checkOut.getMonth(), checkOut.getDate() - 1));
    }
  };

  const handleClickResultButton = (e: React.MouseEvent<HTMLAnchorElement>) => {
    handleCheckInOutDay();
    closeModal();
  };

  const setCheckInDataString = isCheckInState ? '' : makeDateString(checkIn);
  const setCheckOutDataString = isCheckOutState ? '' : makeDateString(checkOut);

  const URL = `/result?checkinDate=${setCheckInDataString}&checkoutDate=${setCheckOutDataString}&minimumPrice=${
    priceRange.min
  }&maximumPrice=${priceRange.max === 0 ? 2147000000 : priceRange.max}&adultCount=${
    counter.adult
  }&childCount=${counter.child}&infantCount=${counter.toddler}`;

  return (
    <SearchButtonContainer to={URL} aria-label="결과 찾기 버튼" onClick={handleClickResultButton}>
      <StyledSearchIcon />
      {searchBarFocusModal !== '' && <span>검색</span>}
    </SearchButtonContainer>
  );
}

export default SearchButton;
