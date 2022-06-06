import styled from 'styled-components';

export const Container = styled.div`
  position: relative;
  top: -10px;
`;

export const RangeContainer = styled.div`
  position: relative;
`;

export const Thumb = styled.button`
  width: 24px;
  height: 24px;
  position: absolute;
  transform: translateX(-50%);
`;

export const RangeInput = styled.input.attrs({
  type: 'range',
})`
  position: absolute;
  top: 0;
  left: -12px;
  right: -12px;
  opacity: 0;
  pointer-events: none;

  &::-webkit-slider-thumb {
    appearance: none;
    border: 12px solid #000;
    cursor: pointer;
    pointer-events: all;
  }
`;
