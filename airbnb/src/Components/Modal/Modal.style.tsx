import styled from 'styled-components';

type ModalWrapperProps = {
  position: { top?: number; left?: number; right?: number; bottom?: number };
};

export const ModalWrapper = styled.div<ModalWrapperProps>`
  position: absolute;
  ${({ position: { top } }) => (top || top === 0) && `top: ${top}px;`}
  ${({ position: { left } }) => (left || left === 0) && `left: ${left}px;`}
  ${({ position: { right } }) => (right || right === 0) && `right: ${right}px;`}
  ${({ position: { bottom } }) =>
    (bottom || bottom === 0) && `bottom: ${bottom}px;`}
  padding: 52px 64px;
  border-radius: 40px;
  background: #ffffff;

  box-shadow: 0px 4px 10px rgba(51, 51, 51, 0.1),
    0px 0px 4px rgba(51, 51, 51, 0.05);
`;
