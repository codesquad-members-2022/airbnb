import React from 'react';
import SearchSection from 'components/common/Section/Section';
import { PersonnelType, SectionProps } from 'components/SearchBar/types';

export default function Personnel({ info, search }: SectionProps<PersonnelType>): JSX.Element {
  const { adult, teenager, child } = search;
  const guest = (adult || 0) + (teenager || 0);
  const value = `게스트: ${guest}명${child ? `,유아:${child}명` : ''}`;

  return <SearchSection title={info.title} value={guest ? value : info.defaultValue} />;
}
