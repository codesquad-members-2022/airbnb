import React from 'react';

import { useLocation } from 'react-router-dom';

import * as S from '@components/GNB/GNB.style';
import Logo from '@components/GNB/Logo';
import MyPageButton from '@components/GNB/MyPageButton';
import Navigation from '@components/GNB/Navigation';
import Modal, { MODAL_POSITION } from '@components/common/Modal';

export const GNB_TYPE = {
  MAIN: 'Main',
  RESULT: 'Result',
};

const GNB = () => {
  const { pathname = '/' } = useLocation();
  const currentPath = pathname === '/' ? GNB_TYPE.MAIN : GNB_TYPE.RESULT;

  return (
    <S.Container currentPath={currentPath}>
      <S.Wrapper>
        <Logo />
        <Navigation />
        <S.MyPageArea>
          <MyPageButton />
          <Modal position={MODAL_POSITION.RIGHT} />
        </S.MyPageArea>
      </S.Wrapper>
    </S.Container>
  );
};

export default GNB;
