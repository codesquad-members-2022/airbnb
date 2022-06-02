import React, { RefObject } from 'react';

import * as S from '@components/common/Modal/Modal.style';
import Portal from '@components/common/Modal/Portal';

export type ElementTypes = HTMLElement | RefObject<HTMLDivElement> | null | undefined;

export interface ModalTypes {
  element?: ElementTypes;
  position: string;
  children?: JSX.Element;
}

export const MODAL_POSITION = {
  LEFT: 'Left',
  RIGHT: 'Right',
  CENTER: 'Center',
};

const Modal = ({ element, position, children }: ModalTypes) => {
  return (
    <>
      <Portal element={element}>
        <S.ModalContainer position={position}>{children}</S.ModalContainer>
      </Portal>
    </>
  );
};

export default Modal;
