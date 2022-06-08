import React from 'react';
import SearchSection from 'components/common/Section/Section';
import { PeriodType, SectionProps } from 'components/SearchBar/types';

export default function Period({ info, search }: SectionProps<PeriodType>): JSX.Element {
  const { checkIn, checkOut } = search;
  const [checkInTitle, checkOutTitle] = info.title;
  const getMonth = (date: string): number => Number(date.slice(-4, -2));
  const getDay = (date: string): number => Number(date.slice(-2));

  return (
    <>
      <SearchSection
        title={checkInTitle}
        value={checkIn ? `${getMonth(checkIn)}월 ${getDay(checkIn)}일` : info.defaultValue}
      />
      <SearchSection
        title={checkOutTitle}
        value={checkOut ? `${getMonth(checkOut)}월 ${getDay(checkOut)}일` : info.defaultValue}
      />
    </>
  );
}
