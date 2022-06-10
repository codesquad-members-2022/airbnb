import React, { useEffect, useState, useLayoutEffect } from 'react';
import styled from 'styled-components';
import SearchPageHeader from '../components/Header/SearchPageHeader';
import Cards from '../components/Cards/Cards';
import CalendarProvider from '../store/calendarStore/CalendarProvider';
import PersonnelProvider from '../store/personnelStore/PersonnelProvider';
import PriceProvider from '../store/priceStore/PriceProvider';
import Map from '../components/map/Map';
import { useSearchParams } from 'react-router-dom';
import { useRecoilState } from 'recoil';
import { searchInfoState } from '../store/searchPageStore/searchPageStore';

const getSearchParams = (targetName: string) => {
  const [searchParams] = useSearchParams();
  return searchParams.get(targetName);
};

const SearchPage = () => {
  const [currSearchInfoState, setCurrSearchInfoState] =
    useRecoilState(searchInfoState);
  const searchParams = useSearchParams();
  const [isInit, setIsInit] = useState(false);

  const currSearchInfo = {
    ...currSearchInfoState,
    minPrice: getSearchParams('minPrice'),
    maxPrice: getSearchParams('maxPrice'),
    personnel: Number(getSearchParams('personnel')) || null,
  };

  useEffect(() => {
    console.log(currSearchInfo);
    if (
      !(JSON.stringify(currSearchInfo) === JSON.stringify(currSearchInfoState))
    ) {
      console.log('??');
      return;
    }
    setCurrSearchInfoState(currSearchInfo);
    console.log('??');
  }, [searchParams]);

  return (
    <CalendarProvider>
      <PriceProvider>
        <PersonnelProvider>
          <SearchPageContainer>
            <SearchPageHeader />
            <CardsMapContainer>
              <Cards />
              <Map />
            </CardsMapContainer>
          </SearchPageContainer>
        </PersonnelProvider>
      </PriceProvider>
    </CalendarProvider>
  );
};

const SearchPageContainer = styled.div`
  width: 1440px;
  height: 100vh;
`;

const CardsMapContainer = styled.div`
  position: absolute;
  top: 94px;
  width: 100%;
  height: calc(100% - 94px);
  ${({ theme }) => theme.mixin.flexMixin('row', 'center', 'center')}
`;

// 94px -> 서치바가 활성화되면 top 이 190px로 늘어남

export default SearchPage;
