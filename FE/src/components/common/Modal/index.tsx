import * as S from '@components/common/Modal/Modal.style';

export interface ModalTypes {
  position: string;
  children?: JSX.Element;
}

export const MODAL_POSITION = {
  LEFT: 'Left',
  RIGHT: 'Right',
  CENTER: 'Center',
};

const Modal = ({ position, children }: ModalTypes) => {
  return <S.ModalContainer {...{ position }}>{children}</S.ModalContainer>;
};

export default Modal;
