import { useState } from 'react';
import { useLocation } from 'react-router-dom';

import styled, { css } from 'styled-components';
import { Link } from '@mui/material';

import SearchWrapper from 'components/Header/SearchWrapper';
import UserMenu from 'components/Header/UserMenu';

import { ReactComponent as LogoImg } from 'images/logo.svg';

import { useModal } from 'hooks/useModal';

type Position = {
  position: string;
};

function Header() {
  const { closeModal } = useModal();

  const location = useLocation();
  const path = location.pathname;

  const [miniFocus, setMiniFocus] = useState(true);
  const changeSearchBar = (e: React.MouseEvent<HTMLElement>) => setMiniFocus((focus) => !focus);

  const clickHeaderOutside = (e: React.MouseEvent<HTMLElement>) => {
    changeSearchBar(e);
    closeModal();
  };

  return (
    <>
      <HeaderContainer position={path}>
        <HeaderWrap position={path}>
          <Link href="/" style={{ height: '26px' }}>
            <LogoImg aria-label="로고이미지" />
          </Link>
          <SearchWrapper changeSearchBar={changeSearchBar} miniFocus={miniFocus} path={path} />
          <UserMenu />
        </HeaderWrap>
      </HeaderContainer>
      {path === '/result' && !miniFocus && <HeaderOutSide onClick={clickHeaderOutside} />}
    </>
  );
}

const HeaderContainer = styled.div<Position>`
  z-index: 6;
  position: fixed;
  top: 0;
  left: 50%;
  transform: translate(-50%, 0);
  display: flex;
  justify-content: center;
  width: 100%;

  ${({ position }) =>
    position === '/result'
      ? css`
          background: ${({ theme }) => theme.colors.white};
        `
      : css`
          background: none;
        `};
`;

const HeaderWrap = styled.header<Position>`
  display: flex;
  justify-content: space-between;
  width: 1440px;
  margin-bottom: 20px;
  padding: 24px 32px;
`;

const HeaderOutSide = styled.div`
  z-index: 5;
  width: 100%;
  height: 100vh;
  position: fixed;
  top: 0;
  left: 50%;
  transform: translate(-50%, 0);
`;

export default Header;
