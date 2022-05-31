import React from 'react';
import SearchSection from 'components/SearchBar/SearchSection/SearchSection';
import { SectionProps } from 'components/SearchBar/types';

export default function Period({ search, addSearch }: SectionProps) {
  const { title, defaultValue, value } = search;
  const [checkInTitle, checkOutTitle] = title as string[];
  const { checkIn, checkOut } = value;

  return (
    <>
      <SearchSection title={checkInTitle as string} value={checkIn || defaultValue} />
      <SearchSection title={checkOutTitle as string} value={checkOut || defaultValue} />
    </>
  );
}
