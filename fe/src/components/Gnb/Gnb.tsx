import React from 'react';
import { Link } from 'react-router-dom';

import AccountMenu from '@/components/AccountMenu';
import * as I from '@/styles/icons';

import * as S from './style';

const DEFAULT_PADDING = 24;

interface Props {
  padding?: number;
}

function Gnb({ padding = DEFAULT_PADDING }: Props) {
  const navItems = ['숙소', '체험', '온라인 체험'];

  return (
    <S.GnbLayer padding={padding}>
      <Link to="/">
        <I.Logo />
      </Link>
      <S.Nav>
        <S.NavList>
          {navItems.map((item) => (
            <S.NavItem key={item}>{item}</S.NavItem>
          ))}
        </S.NavList>
      </S.Nav>
      <AccountMenu />
    </S.GnbLayer>
  );
}

export default Gnb;
