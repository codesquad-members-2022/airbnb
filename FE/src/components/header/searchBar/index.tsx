import React, { useContext } from 'react';
import { NavLink } from 'react-router-dom';

import * as Styled from 'components/header/searchBar/searchBar.style';
import Line from 'components/Icons/Line';
import SearchBarItem from 'components/header/searchBar/searchBarItem';
import SearchIcon from 'components/Icons/SearchIcon';

import roomListApis from 'apis/roomListApi';
import { moneyToWon } from 'utils/utils';
import { Context } from 'components/context/ModalContext';
import PriceModal from 'components/header/searchBar/priceModal';
import GuestModal from 'components/header/searchBar/guestModal';
import DateModal from 'components/header/searchBar/dateModal';
import { GuestContext } from 'components/context/GuestModalContext';

function SearchBar({ isSmallSize }) {
  const {
    infantCounts,
    guestCounts,
    setIsDateOpen,
    setIsPriceOpen,
    setIsGuestOpen,
    highPrice = 0,
    lowPrice = 0,
    checkInDate,
    checkOutDate,
    setFilteredData,
    setIsClickSearch,
  } = useContext(Context);
  const { adultCount, childrenCount } = useContext(GuestContext);

  const modalOpenInfo = {
    date: setIsDateOpen,
    price: setIsPriceOpen,
    guest: setIsGuestOpen,
  };
  const onClickModal = (title: string) => () => {
    modalOpenInfo[title](true);
  };
  const onClickSearch = () => {
    const filteredDatas = {
      checkInDate: '2022-06-23',
      checkOutDate: '2022-06-30',
      minRoomCharge: lowPrice,
      maxRoomCharge: highPrice,
      numOfGuests: guestCounts,
      numOfAdults: adultCount,
      numOfChildren: childrenCount,
      numOfInfants: infantCounts,
      page: 1,
    };
    const fetchRoomList = async () => {
      const roomList = await roomListApis.getFilteredRooms({ filteredDatas });
      setFilteredData(roomList);
    };
    fetchRoomList();
    setIsClickSearch(true);
  };

  const parsedDateToString = (date: Date | undefined) =>
    date ? `${date.getMonth() + 1}월 ${date.getDate()}일` : '날짜 입력';

  return (
    <Styled.SearchBarWrapper isSmallSize={isSmallSize}>
      <DateModal />
      <Styled.ItemWrapper onClick={onClickModal('date')}>
        <SearchBarItem isSmallSize={isSmallSize} title="체크인" contents={parsedDateToString(checkInDate)} />
        <SearchBarItem isSmallSize={isSmallSize} title="체크아웃" contents={parsedDateToString(checkOutDate)} />
      </Styled.ItemWrapper>
      <Line size={{ width: '1', height: isSmallSize ? '26' : '44' }} />
      <Styled.ItemWrapper onClick={onClickModal('price')}>
        <SearchBarItem
          isSmallSize={isSmallSize}
          title="요금"
          contents={`${moneyToWon(Math.floor(lowPrice))} - ${moneyToWon(Math.floor(highPrice))}`}
        />
      </Styled.ItemWrapper>
      <PriceModal />
      <Line size={{ width: '1', height: isSmallSize ? '26' : '44' }} />
      <Styled.ItemWrapper onClick={onClickModal('guest')}>
        <SearchBarItem
          isSmallSize={isSmallSize}
          title="인원"
          contents={`게스트${guestCounts}명, 유아${infantCounts}명`}
        />
      </Styled.ItemWrapper>
      <GuestModal />
      <NavLink onClick={onClickSearch} to="/searchResult">
        <SearchIcon size={{ width: isSmallSize ? '29' : '40', height: isSmallSize ? '29' : '40' }} />
      </NavLink>
    </Styled.SearchBarWrapper>
  );
}

export default SearchBar;
