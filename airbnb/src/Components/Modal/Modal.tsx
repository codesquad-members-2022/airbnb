import { ReactNode } from 'react';
import * as S from './Modal.style';

type ModalProps = {
  children: ReactNode;
  top?: number;
  left?: number;
  right?: number;
  bottom?: number;
};

export function Modal({
  children,
  top,
  left,
  right,
  bottom,
}: ModalProps): JSX.Element {
  return (
    <S.ModalWrapper
      position={{ top, left, right, bottom }}
      onClick={e => e.stopPropagation()}
    >
      {children}
    </S.ModalWrapper>
  );
}
