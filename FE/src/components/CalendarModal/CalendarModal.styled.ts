import styled from 'styled-components';

import { ModalStyle, BtnBackgroundBorderRemove } from 'common/util.styled';

export const Modal = styled.div`
  ${ModalStyle}
  padding: 6.5rem 8.8rem;
  top: 21rem;
  left: 50%;
  transform: translateX(-50%);
  width: 91.6rem;
  height: 51.2rem;
`;

export const Carousel = styled.div`
  overflow: hidden;
`;

export const CarouselItemContainer = styled.div<{ pos: number }>`
  display: flex;
  justify-content: flex-start;
  flex-wrap: nowrap;
  width: 10000px;
  gap: 6.8rem;
  transform: translateX(${({ pos }) => `${pos}rem`});
  transition: all 0.3s;
`;

export const Button = styled.button`
  ${BtnBackgroundBorderRemove}
  position: absolute;
  top: 7rem;

  &.left {
    left: 9.7rem;
  }

  &.right {
    right: 9.7rem;
  }
`;
