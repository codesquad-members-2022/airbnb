import React from 'react';
import styled from 'styled-components';
import { useRecoilState } from 'recoil';
import { Link } from 'react-router-dom';
import SearchIcon from '@mui/icons-material/Search';
import { useCalendarStateContext } from '../../store/calendarStore/CalendarContext';
import { usePersonnelStateContext } from '../../store/personnelStore/PersonnelContext';
import { usePriceStateContext } from '../../store/priceStore/PriceContext';
import { searchInfoState } from '../../store/searchPageStore/searchPageStore';

const SearchButton = ({
  pageType = 'MAIN',
  onClick,
}: {
  pageType: 'MAIN' | 'SEARCH';
  onClick: () => void | undefined;
}) => {
  const [_, setSearchInfo] = useRecoilState(searchInfoState);
  const { checkIn, checkOut } = useCalendarStateContext();
  const { ADULT, CHILD } = usePersonnelStateContext();
  const { minPrice, maxPrice } = usePriceStateContext();

  const collectQuerySources = () => {
    const querySources = [
      { keyword: 'minPrice', value: minPrice },
      { keyword: 'maxPrice', value: maxPrice },
      { keyword: 'personnel', value: ADULT + CHILD },
      { keyword: 'checkIn', value: checkIn?.toLocaleDateString() || null },
      { keyword: 'checkOut', value: checkOut?.toLocaleDateString() || null },
    ];
    return querySources;
  };

  const getURIQuery = () => {
    const querySources = collectQuerySources();
    const queryString = querySources
      .map(({ keyword, value }) => makeQueryString(keyword, value))
      .filter((query) => query !== '')
      .join('&');
    return `/search?${queryString}`;
  };

  const makeQueryString = (keyword, value) =>
    value !== null ? `${keyword}=${value}` : '';

  const onClickHandler = () => {
    const peopleNum = ADULT + CHILD;
    const currentSearchInfo = {
      checkIn,
      checkOut,
      minPrice,
      maxPrice,
      peopleNum,
    };
    setSearchInfo((prev) => ({ ...prev, ...currentSearchInfo }));
  };

  return (
    <Link
      to={getURIQuery()}
      style={{ textDecoration: 'none' }}
      onClick={onClickHandler}
    >
      <SearchButtonWrapper pageType={pageType} onClick={onClick}>
        <CustomSearchIncon />
        {pageType === 'MAIN' && <span>검색</span>}
      </SearchButtonWrapper>
    </Link>
  );
};

export default SearchButton;

const SearchButtonWrapper = styled.div<type>`
  ${({ theme }) => theme.mixin.flexMixin('row', 'center', 'center')};
  height: 32px;
  background: ${({ theme }) => theme.colors.orange};
  border-radius: 30px;
  padding: ${({ type }) => (type === 'MAIN' ? '8px 16px 8px 8px' : '4px 8px')};
  color: ${({ theme }) => theme.colors.white};

  span {
    color: ${({ theme }) => theme.colors.white};
    font-size: 1.125rem;
    font-weight: 700;
    margin-left: 5px;
  }
`;

const CustomSearchIncon = styled(SearchIcon)`
  z-index: 2;
`;
