import React from 'react';
import styled, { CSSProp } from 'styled-components';

const CustomModal = ({
  children,
  style,
  closeModal,
  backdropStyle,
}: {
  children: React.ReactNode;
  style: CSSProp;
  backdropStyle: CSSProp;
  closeModal: () => void;
}) => (
  <>
    <ModalBackground backdropStyle={backdropStyle} onClick={closeModal} />
    <StyledModal modalStyle={style}>{children}</StyledModal>
  </>
);

export default CustomModal;

const StyledModal = styled.div<{ modalStyle: CSSProp }>`
  position: absolute;
  z-index: 101;
  ${({ modalStyle }) => modalStyle};
`;

const ModalBackground = styled.div<{ backdropStyle: CSSProp }>`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  z-index: 1;
  ${({ backdropStyle }) => backdropStyle};
`;
