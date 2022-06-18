import React from 'react';
import * as Styled from 'components/header/searchBar/searchBarItem/searchBarItem.style';

type SearchBarItemProps = {
  title: string;
  contents: string;
  isSmallSize: boolean;
};

function SearchBarItem({ title, contents, isSmallSize }: SearchBarItemProps) {
  return (
    <Styled.Item>
      <Styled.ItemTitle isSmallSize={isSmallSize}>{title}</Styled.ItemTitle>
      <Styled.ItemContents isSmallSize={isSmallSize}>{contents}</Styled.ItemContents>
    </Styled.Item>
  );
}

export default SearchBarItem;
