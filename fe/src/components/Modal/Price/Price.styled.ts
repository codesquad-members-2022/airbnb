import styled from 'styled-components';

export const ModalHeader = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin-bottom: 37px;
`;

export const Title = styled.p`
  font-weight: 700;
  font-size: 16px;
`;

export const PriceInfo = styled.p`
  font-weight: 400;
  font-size: 18px;
  margin: 16px 0px 4px 0px;
`;

export const Caption = styled.p`
  font-weight: 400;
  font-size: 14px;
  color: #828282;
`;

export const MultiRangeSlider = styled.div`
  position: relative;
  top: 0px;
  margin: 0 auto;
  width: 310px;
`;

export const RangeSlider = styled.div`
  input[type='range'] {
    position: absolute;
    z-index: 1;
    width: 100%;

    top: -24px;
    left: -2px;
    opacity: 0;

    pointer-events: none;
    -webkit-appearance: none;

    &::-webkit-slider-thumb {
      pointer-events: all;
      width: 25px;
      height: 25px;
      border: 0 none;
      border-radius: 50%;
      background-color: red;
      cursor: pointer;

      -webkit-appearance: none;
    }

    &#input-right::-webkit-slider {
    }
  }
`;

export const Slider = styled.div`
  position: relative;
  height: 10px;
  width: 90%;
  margin: 0 auto;

  .track {
    position: absolute;
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;
    border-radius: 5px;
  }
`;

export const Thumb = styled.div`
  position: absolute;
  top: -12px;
  opacity: 0.8;

  &.left {
    left: ${({ leftPosition }) => leftPosition}%;
    transform: translate(-15px, -10px);
  }

  &.right {
    right: ${({ rightPosition }) => rightPosition}%;
    transform: translate(15px, -10px);
  }
`;
