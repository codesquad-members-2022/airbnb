import React, { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { useContentModal, ActiveContext, useSetActiveModal, useSetContentModal } from 'context/ModalProvider';

import Period from 'components/SearchBar/Period/Period';
import Price from 'components/SearchBar/Price/Price';
import Personnel from 'components/SearchBar/Personnel/Personnel';
import SearchList from 'components/SearchBar/SearchList/SearchList';

import { Button } from '@mui/material';
import { ReactComponent as SearchIcon } from 'img/svg/search-icon.svg';
import { ReactComponent as SearchTextIcon } from 'img/svg/search-text-icon.svg';
import { StyledSearchBar, StyledLi, SplitLine } from './SearchBar.styled';

function SearchButton() {
  const navigate = useNavigate();
  const isActiveModal = useContext(ActiveContext);

  const moveSearchPage = () => navigate('/search');

  return (
    <Button style={{ backgroundColor: 'transparent' }} onClick={moveSearchPage}>
      {isActiveModal ? <SearchTextIcon /> : <SearchIcon />}
    </Button>
  );
}

export default function SearchBar() {
  const content = useContentModal();

  const setActiveModal = useSetActiveModal();
  const setContent = useSetContentModal();

  const handleModalOpen = (event: { currentTarget: { id: string } }) => {
    const searchListId = event.currentTarget.id;
    setActiveModal(true);
    setContent(searchListId);
  };

  const isCurrentActive = (id: string): boolean => content === id;
  const searchListArray = [
    { id: 'period', element: Period, width: 361 },
    { id: 'price', element: Price, width: 257 },
    { id: 'personnel', element: Personnel, width: 298 },
  ];

  const searchList = React.Children.toArray(
    searchListArray.map(
      ({ id, element, width }): JSX.Element => (
        <>
          <StyledLi
            role="button"
            tabIndex={0}
            onClick={handleModalOpen}
            id={id}
            isActive={isCurrentActive(id)}
            width={width}
          >
            <SearchList Element={element} id={id} />
            {id === 'personnel' && <SearchButton />}
          </StyledLi>
          {id !== 'personnel' && <SplitLine />}
        </>
      )
    )
  );

  return (
    <StyledSearchBar isActive={content}>
      <span id="searchLabel">검색 시작하기</span>
      <ul>{searchList}</ul>
    </StyledSearchBar>
  );
}
