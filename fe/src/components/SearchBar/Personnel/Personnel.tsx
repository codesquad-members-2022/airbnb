import React from 'react';
import SearchSection from 'components/SearchBar/SearchSection/SearchSection';
import { SectionProps } from 'components/SearchBar/types';

export default function Personnel({ search, addSearch }: SectionProps) {
  const { title, defaultValue, value } = search;
  const { adult, teenager } = value;
  const guest = (adult as number) + (teenager as number);

  return <SearchSection title={title as string} value={guest || defaultValue} />;
}
