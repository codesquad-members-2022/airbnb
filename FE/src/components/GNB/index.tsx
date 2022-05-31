import React from 'react';

import { useLocation } from 'react-router-dom';

import * as S from '@components/GNB/GNB.style';
import Logo from '@components/GNB/Logo';
import MyPageButton from '@components/GNB/MyPageButton';
import Navigation from '@components/GNB/Navigation';
import Modal, { MODAL_POSITION } from '@components/common/Modal';
import useModal from '@lib/hooks/useModal';

export const GNB_TYPE = {
  MAIN: 'Main',
  RESULT: 'Result',
};

const GNB = () => {
  const { pathname } = useLocation();
  const currentPath = pathname === '/' ? GNB_TYPE.MAIN : GNB_TYPE.RESULT;

  const [ref, element] = useModal<HTMLDivElement>();

  return (
    <S.Container currentPath={currentPath}>
      <S.Wrapper>
        <Logo />
        <Navigation />
        <S.MyPageArea ref={ref as React.RefObject<HTMLDivElement>}>
          <MyPageButton />
          <Modal element={element} position={MODAL_POSITION.RIGHT}/>
        </S.MyPageArea>
      </S.Wrapper>
    </S.Container>
  );
};

export default GNB;
