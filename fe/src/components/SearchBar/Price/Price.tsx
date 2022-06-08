import React from 'react';
import SearchSection from 'components/common/Section/Section';
import { PriceType, SectionProps } from 'components/SearchBar/types';

export default function Price({ info, search }: SectionProps<PriceType>): JSX.Element {
  const { minPrice, maxPrice } = search;
  const price = minPrice || maxPrice ? `${minPrice}~${maxPrice}` : info.defaultValue;

  return <SearchSection title={info.title} value={price} />;
}
