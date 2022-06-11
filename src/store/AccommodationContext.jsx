/* eslint-disable consistent-return */
/* eslint-disable @typescript-eslint/no-shadow */

import ACCOMMODATIONS from 'mockData/accommodation';
import { createContext, useContext, useEffect, useState } from 'react';
import pipe from 'utils/util';
import { FilterContext } from './FilterContext';

const AccommodationContext = createContext();

function AccommodationProvider({ children }) {
  const [accommodations, setAccommodations] = useState([]);
  const { schedule, priceSlider, guest } = useContext(FilterContext);
  const { checkIn, checkOut } = schedule;
  const { low, high } = priceSlider.price;
  const { adult, child, infant } = guest;

  useEffect(filterAccommodations, []);

  return (
    <AccommodationContext.Provider value={{ accommodations, filterAccommodations }}>
      {children}
    </AccommodationContext.Provider>
  );

  function filterAccommodations() {
    const filteredAccommodations = pipe(filterSchedule, filterPrice, filterGuest)(ACCOMMODATIONS);
    setAccommodations(filteredAccommodations);

    function filterSchedule(accommodations) {
      return accommodations.filter(canCheckIn);
    }

    function canCheckIn(accommodation) {
      const diffDay = getDiffDay({ checkIn, checkOut });
      return accommodation.maxStay <= diffDay;
    }

    function filterPrice(accommodations) {
      return accommodations.filter(isInnerRange);
    }

    function isInnerRange(accommodation) {
      const isOverLowPrice = accommodation.price >= low;
      const isUnderHighPrice = accommodation.price <= high;
      return isOverLowPrice && isUnderHighPrice;
    }

    function filterGuest(accommodations) {
      return accommodations.filter(isUnderMaxGuest);
    }

    function isUnderMaxGuest(accommodation) {
      const totalGuest = adult + child + infant;
      return accommodation.maxGuest >= totalGuest;
    }
  }
}

function getDiffDay({ checkIn, checkOut }) {
  const hasSchedule = checkIn && checkOut;
  if (!hasSchedule) {
    return;
  }

  const checkInDate = new Date(checkIn.year, checkIn.month - 1, checkIn.day);
  const checkOutDate = new Date(checkOut.year, checkOut.month - 1, checkOut.day);
  const diff = checkOutDate - checkInDate;
  const baseOfDay = 24 * 60 * 60 * 1000;
  const diffDay = diff / baseOfDay;
  return diffDay;
}

export { AccommodationContext, AccommodationProvider, getDiffDay };
