import { useContext, useEffect } from 'react';
import { FilterContext } from 'store/FilterContext';
import { getConvertPriceText, getGuestText, getScheduleText } from 'utils/fromStateToString';
import styled from 'styled-components';
import COLOR from 'styles/colors';
import FONT from 'styles/font';
import { AccommodationContext } from 'store/AccommodationContext';
import SearchButton from './SearchButton';

function MiniSearchBar({ setSpreadSearchBar }) {
  const { modalDispatch, schedule, scheduleDispatch, priceSlider, guest, guestDispatch } =
    useContext(FilterContext);
  const { filterAccommodations } = useContext(AccommodationContext);
  const { checkIn, checkOut } = schedule;
  const { low, high } = priceSlider.price;
  const { adult, child, infant } = guest;
  const peopleCnt = adult + child;
  const scheduleText = checkIn && checkOut && getScheduleText({ checkIn, checkOut });
  const priceText = getConvertPriceText({ lowPrice: low, highPrice: high });
  const guestText = getGuestText({ adult, child, infant });

  useEffect(function setDefaultFilter() {
    setDefaultSchedule();
    setDefaultGuest();
  }, []);

  useEffect(filterAccommodations, [schedule, guest]);

  return (
    <Container
      onClick={() => {
        setSpreadSearchBar(true);
      }}
    >
      <FilterValue filter="schedule" onClick={() => modalDispatch({ type: 'OPEN_CALENDAR' })}>
        {scheduleText}
      </FilterValue>
      <FilterValue filter="price" onClick={() => modalDispatch({ type: 'OPEN_PRICE' })}>
        {priceText}
      </FilterValue>
      <FilterValue filter="guest" onClick={() => modalDispatch({ type: 'OPEN_PRICE' })}>
        {guestText}
      </FilterValue>
      <SearchButton searchBarType="mini" />
    </Container>
  );

  function setDefaultSchedule() {
    if (checkIn && checkOut) return;
    const date = new Date();
    const TODAY_YEAR = date.getFullYear();
    const TODAY_MONTH = date.getMonth() + 1;
    const TODAY_DATE = date.getDate();

    scheduleDispatch({
      type: 'SET_CHECK_IN',
      date: { year: TODAY_YEAR, month: TODAY_MONTH, day: TODAY_DATE },
    });
    scheduleDispatch({
      type: 'SET_CHECK_OUT',
      date: { year: TODAY_YEAR, month: TODAY_MONTH, day: TODAY_DATE + 7 },
    });
  }

  function setDefaultGuest() {
    if (peopleCnt) return;
    guestDispatch({ type: 'INCREASE_adult' });
  }
}

export default MiniSearchBar;

const Container = styled.div`
  position: relative;
  text-align: center;
  height: 48px;
  border-radius: 30px;
  margin: 0 auto;
  padding-right: 40px;
  border: 1px solid ${COLOR.GREY[300]};
  background: ${COLOR.WHITE};

  > button + button::before {
    content: '';
    position: absolute;
    left: 0;
    top: 8px;
    bottom: 8px;
    width: 1px;
    background: ${COLOR.GREY[200]};
  }
`;

const FilterValue = styled.button`
  position: relative;
  display: inline-block;
  height: 100%;
  padding: 0 10px;
  font-size: ${FONT.SIZE.SMALL};
  color: ${COLOR.BLACK};
`;
