import React from 'react';
import styled from 'styled-components';
import CloseIcon from '@mui/icons-material/Close';

type SearchBarSectionTypes = {
  name: string;
  placeholder: string;
  value: string | null;
};

const SearchBarSection = ({
  searchBarSectionInfo,
  isLast,
  initSection,
}: {
  searchBarSectionInfo: SearchBarSectionTypes[];
  isLast: boolean;
  initSection: () => void;
}) => {
  const isAnyValueInputted = () => searchBarSectionInfo.some(({ value }) => value);

  const handleInitButtonClick = (e: React.MouseEvent<SVGSVGElement>) => {
    e.stopPropagation();
    initSection();
  };

  return (
    <SearchBarSectionContainer isLast={isLast}>
      {searchBarSectionInfo.map(({ name, placeholder, value }) => (
        <SearchBarSectionItemContainer key={name}>
          <SearchBarName>{name}</SearchBarName>
          <SearchBarValue data-placeholder={placeholder}>{value}</SearchBarValue>
        </SearchBarSectionItemContainer>
      ))}
      {isAnyValueInputted() && <InitButton fontSize='small' onClick={handleInitButtonClick} />}
    </SearchBarSectionContainer>
  );
};

const SearchBarSectionContainer = styled.div<{ isLast: boolean }>`
  position: relative;
  padding-right: 60px;
  ${({ theme }) => theme.mixin.flexMixin('row', 'center')}
  ${({ isLast, theme }) =>
    !isLast && `border-right: 1px solid ${theme.colors.lightGrey}`};

  span {
    display: block;
  }
`;

const SearchBarSectionItemContainer = styled.div`
  width: 110px;
  margin: 0px 24px;
  cursor: pointer;
`;

const SearchBarName = styled.span`
  margin-bottom: 5px;
  font-size: 12px;
  font-weight: 700;
`;

const SearchBarValue = styled.span`
  color: #4f4f4f;
  line-height: 16px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;

  :empty:before {
    content: attr(data-placeholder);
    color: ${({ theme }) => theme.colors.black};
  }
`;

const InitButton = styled(CloseIcon)`
  position: absolute;
  right: 20px;
  background: ${({ theme }) => theme.colors.grey};
  padding: 4px;
  border-radius: 100%;
  margin-left: 26px;
  cursor: pointer;
  z-index: 2;
`;

export default SearchBarSection;
