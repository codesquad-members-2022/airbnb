import React from 'react';
import styled from 'styled-components';
import HeaderLogo from './HeaderLogo';
import HeaderBackdrop from './HeaderBackdrop';
import HeaderGNB from './HeaderGNB';
import HeaderSideMenu from './HeaderSideMenu';

const MainPageHeader = () => (
  <HeaderContainer>
    <HeaderLogo logoText='OL-BNB' />
    <HeaderGNB />
    <HeaderSideMenu />
    <HeaderBackdrop />
  </HeaderContainer>
);

export default MainPageHeader;

const HeaderContainer = styled.div`
  ${({ theme }) => theme.mixin.flexMixin('row', 'center', 'space-between')};
  width: calc(1440px - 160px);
  padding: 0 80px;
  height: 94px;
`;
