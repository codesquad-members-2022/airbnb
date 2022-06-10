import styled from 'styled-components';

export const SlideInput = styled.input`
  position: absolute;
  pointer-events: none;
  z-index: 2;
  height: 1rem;
  width: 31.7rem;
  border: none;
  background-color: none;

  &::-webkit-slider-thumb {
    width: 2rem;
    height: 2rem;
    pointer-events: all;
    border-radius: 50%;
    border: 1px solid rgba(0, 0, 0, 0.2);
    background-color: white;
  }

  &::-webkit-slider-thumb:hover {
    background-color: rgba(0, 0, 0, 0.1);
  }
`;
