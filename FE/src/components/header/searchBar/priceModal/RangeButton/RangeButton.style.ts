import styled from 'styled-components';

const ButtonWrapper = styled.div`
  width: 380px;
  position: absolute;
  height: 1px;
  left: -9px;
`;

interface IInputProps {
  position: string;
}

const Input = styled.input<IInputProps>`
  width: ${({ width }) => width};
  position: absolute;
  bottom: 0px;
  ${({ position }) => position}: 0px;
  -webkit-appearance: none;
  pointer-events: none;
  ::-webkit-slider-thumb {
    pointer-events: auto;
    cursor: pointer;
  }
`;

export { ButtonWrapper, Input };
