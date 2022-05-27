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
  background-image: url('https://images.creativemarket.com/0.1.0/ps/2883261/1160/772/m1/fpnw/wm0/%D0%B1%D0%B5%D0%B7-%D0%BD%D0%B0%D0%B7%D0%B2%D0%B8-5-.jpg?1498161352&s=17d915bb4c3190413c17545f19f5e0fc');
  background-position: center;
  background-repeat: no-repeat;
  background-size: 100% 100%;
  padding: 24px;
`;

export default Header;
