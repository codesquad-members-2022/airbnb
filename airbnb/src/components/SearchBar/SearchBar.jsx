import React, { useCallback, useState } from 'react';
import { Center, Flex, Spacer } from '@chakra-ui/react';
import styled from 'styled-components';

import CheckInOut from './CheckInOut';
import Personnel from './Personnel';
import Price from './Price';
import CalendarModal from 'components/Calendar/CalendarModal';
import CalendarProvider from 'contexts/CalendarProvider';
import { ReactComponent as SearchIcon } from 'assets/svg/searchBtn.svg';

function SearchBar() {
  const [isOpenCalendarModal, setOpenCalendarModal] = useState(false);

  const onClickToggleModal = useCallback(() => {
    setOpenCalendarModal(!isOpenCalendarModal);
  }, [isOpenCalendarModal]);

  return (
    <CalendarProvider>
      <Center>
        <SearchContainer>
          <Flex>
            <CheckInOut onClick={onClickToggleModal} />
            <Spacer />
            <Price />
            <Spacer />
            <Personnel />
            <SearchIcon style={{ margin: '22px' }} />
          </Flex>
        </SearchContainer>
        {isOpenCalendarModal && <CalendarModal />}
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

export default SearchBar;
