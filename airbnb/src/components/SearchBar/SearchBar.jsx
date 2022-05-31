import React, { useCallback, useState } from 'react';
import { Center, Flex } from '@chakra-ui/react';
import styled from 'styled-components';

import CheckInOut from './CheckInOut';
import Personnel from './Personnel';
import Price from './Price';
import CalendarModal from 'components/Calendar/CalendarModal';
import CalendarProvider from 'contexts/CalendarProvider';
import { ReactComponent as SearchIcon } from 'assets/svg/searchBtn.svg';
import Modal from 'components/Modal/Modal';
import { calendarModalStyle } from 'components/Modal/ModalStyle';

import PriceRangeModal from 'components/PriceRange/PriceRange';

function SearchBar() {
  const [selectedContent, setSelectedContent] = useState(null);

  const renderModal = useCallback(() => {
    switch (selectedContent) {
      case 'CHECK_IN_OUT':
        return (
          <CalendarModalContainer>
            <CalendarModal />
          </CalendarModalContainer>
        );
      case 'PRICE':
        return;
      case 'TOTAL_GUESTS':
        return;
      default:
        return;
    }
  }, [selectedContent]);

  const handleClickSearchBarBtn = useCallback(
    (contentType) => {
      if (selectedContent === contentType) setSelectedContent(null);
      else {
        setSelectedContent(contentType);
      }
    },
    [selectedContent],
  );

  return (
    <CalendarProvider>
      <Center>
        <SearchContainer>
          <Flex justify="space-between">
            <CheckInOut onClick={handleClickSearchBarBtn} title={'체크인'} />
            <CheckInOut onClick={handleClickSearchBarBtn} title={'체크아웃'} />
            <Price onClick={handleClickSearchBarBtn} />
            <Personnel onClick={handleClickSearchBarBtn} />
            <SearchIcon style={{ margin: '22px' }} />
          </Flex>
        </SearchContainer>
        {selectedContent && renderModal()}
      </Center>
    </CalendarProvider>
  );
}

const SearchContainer = styled.div`
  position: absolute;
  width: 920px;
  height: 70px;
  top: 110px;
  background-color: ${({ theme }) => theme.colors.white};
  border: 1px solid ${({ theme }) => theme.colors.gray4};
  border-radius: 20px;
`;

const CalendarModalContainer = styled(Modal)`
  ${calendarModalStyle}
`;
export default SearchBar;
