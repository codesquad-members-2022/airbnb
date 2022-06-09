import React from 'react';

import Icons from '@assets/icons';
import * as S from '@components/common/Icon/Icon.style';

export const ICON_NAME: { [key: string]: string } = {
  MENU: 'Menu',
  USER: 'User',
  PAUSE: 'Pause',
  SEARCH: 'Search',
  CLOSE_BTN: 'CloseBtn',
  PREV: 'Prev',
  NEXT: 'Next',
};

export const ICON_SIZE: { [key: string]: string } = {
  MEDIUM: 'MEDIUM',
  LARGE: 'LARGE',
  SMALL: 'SMALL',
};

export interface IconPropsTypes {
  iconName: string;
  iconSize: string;
}

const Icon = ({ iconName, iconSize }: IconPropsTypes) => {
  return <S.Icon src={Icons[iconName]} size={iconSize} />;
};

export default Icon;
