import React from 'react';

import { MENUS } from 'constant';

import { UserMenu, MenuBtn } from 'components/Menu/Menu.styled';

export function Menu(): JSX.Element {
  const menuBtns = MENUS.map(menu => (
    <MenuBtn key={menu.id} num={menu.id} type="button">
      <img src={menu.src} alt={menu.alt} />
    </MenuBtn>
  ));

  return <UserMenu>{menuBtns}</UserMenu>;
}
