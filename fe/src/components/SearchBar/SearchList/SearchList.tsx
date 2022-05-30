import React from 'react';
import styled from 'styled-components';
import DeleteButton from 'components/SearchBar/SearchList/DeleteButton';
import { useAddSearch, useSearch } from 'context/SearchProvider';

const StyledLi = styled.li`
  max-width: 233px;
  section {
    width: 194px;
  }
`;

type KeyType = 'period' | 'price' | 'personnel';

export default function SearchList({ Element }: { Element: React.ComponentType<any> }): React.ReactElement {
  const search = useSearch();
  const addSearch = useAddSearch();

  const key: KeyType = Element.displayName as KeyType;
  const searchList = search[key];

  const hasValue = () => Object.values(searchList.value).filter((e) => e !== 0).length > 0;

  return (
    <StyledLi>
      <Element search={searchList} addSearch={addSearch} />
      {hasValue() && <DeleteButton />}
    </StyledLi>
  );
}
