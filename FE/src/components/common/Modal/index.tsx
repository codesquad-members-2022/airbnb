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
        <S.Modal position={position}>{children}</S.Modal>
      </Portal>
    </>
  );
};

export default Modal;
