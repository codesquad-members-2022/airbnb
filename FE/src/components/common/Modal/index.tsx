import * as S from '@components/common/Modal/Modal.style';

export interface ModalPropsTypes {
  position: string;
  children?: JSX.Element;
}

export const MODAL_POSITION = {
  LEFT: 'Left',
  RIGHT: 'Right',
  CENTER: 'Center',
};

const Modal = ({ position, children }: ModalPropsTypes) => {
  return <S.ModalContainer {...{ position }}>{children}</S.ModalContainer>;
};

export default Modal;
