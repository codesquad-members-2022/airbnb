import { Flex, Spacer } from '@chakra-ui/react';
import styled from 'styled-components';
import Logo from './Logo';
import UpperMenu from './UpperMenu';
import UserInfo from './UserInfo';

function Header() {
  return (
    <StyledHeader>
      <Flex justify="center" align="center">
        <Logo />
        <Spacer />
        <UpperMenu />
        <Spacer />
        <UserInfo />
      </Flex>
    </StyledHeader>
  );
}

const StyledHeader = styled.header`
  height: 640px;
  background-image: url('https://pbs.twimg.com/media/EvD0cVwU4AE7ziW.jpg');
  background-position: center;
  background-repeat: no-repeat;
  background-size: 100% 150%;
  padding: 24px;
`;

export default Header;
