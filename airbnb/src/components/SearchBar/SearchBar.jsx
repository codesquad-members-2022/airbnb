import { Center, Flex, Spacer } from '@chakra-ui/react';
import styled from 'styled-components';

import CheckOut from './CheckOut';
import Personnel from './Personnel';
import Price from './Price';
import { ReactComponent as SearchIcon } from 'assets/svg/searchBtn.svg';

import PriceRangeModal from 'components/PriceRange/PriceRange';

function SearchBar() {
  return (
    <Center>
      <SearchContainer>
        <Flex>
          <CheckOut />
          <Spacer />
          <Price />
          <Spacer />
          <Personnel />
          <SearchIcon style={{ margin: '22px' }} />
        </Flex>
        <PriceRangeModal />
      </SearchContainer>
    </Center>
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
