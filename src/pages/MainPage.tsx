import React from 'react';
import MainPageHeader from '../components/Header/MainPageHeader';
import SearchBar from '../components/SearchBar/SearchBar';
import Container from '../UI/Container';
import CalendarProvider from '../store/calendarStore/CalendarProvider';
import PersonnelProvider from '../store/personnelStore/PersonnelProvider';
import PriceProvider from '../store/priceStore/PriceProvider';

const MainPage = () => (
  <CalendarProvider>
    <PriceProvider>
      <PersonnelProvider>
        <Container flexInfo={['column', 'center', 'center', 'no-wrap']}>
          <MainPageHeader />
          <SearchBar pageType="MAIN" />
        </Container>
      </PersonnelProvider>
    </PriceProvider>
  </CalendarProvider>
);

export default MainPage;
