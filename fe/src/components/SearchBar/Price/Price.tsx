import React from 'react';
import SearchSection from 'components/SearchBar/SearchSection/SearchSection';
import { SectionProps } from 'components/SearchBar/types';

export default function Price({ search, addSearch }: SectionProps) {
  const { title, defaultValue, value } = search;
  const { minPrice, maxPrice } = value;
  const price = minPrice || maxPrice ? `${minPrice}~${maxPrice}` : defaultValue;

  return <SearchSection title={title} value={price} />;
}

Price.displayName = 'price';
