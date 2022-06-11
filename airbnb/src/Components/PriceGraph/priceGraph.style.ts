import styled from 'styled-components';

type RangeProps = {
  higherPriceRange: number;
  lowerPriceRange: number;
};

export const Range = styled.input<RangeProps>`
  width: 380px;
  height: 0;
  -webkit-appearance: none;
  position: absolute;
  cursor: pointer;
  transform: translate(-10px, -5px);
  background: none;
  left: 0;
  bottom: 70;
  z-index: 2;
  pointer-events: none;
  &::-webkit-slider-thumb {
    -webkit-appearance: none; /* 기본 CSS 스타일을 적용하지 않기 위해서 */
    pointer-events: all;
    width: 20px;
    height: 20px;
    border-radius: 50%;
    cursor: pointer;
  }
`;

export const Canvas = styled.canvas`
  /* position: relative; */
`;

export const RangeSliderWrapper = styled.div`
  position: relative;
  width: 365px;
`;

export const LowerPriceRangeSliderButton = styled.button`
  position: absolute;
  width: 20px;
  height: 20px;
  background-color: black;
  border-radius: 50%;
  left: 0;
  transform: translate(-50%, -50%);
`;

export const HigherPriceRangeSliderButton = styled.button`
  position: absolute;
  width: 20px;
  height: 20px;
  background-color: black;
  border-radius: 50%;
  right: 0;
  transform: translate(50%, -50%);
`;

export const Title = styled.h4`
  font-weight: 700;
  margin-bottom: 16px;
`;

export const Price = styled.span`
  display: block;
  font-weight: 400;
  font-size: 18px;
  color: #333333;
`;

export const AveragePrice = styled.span`
  display: block;
  font-size: 14px;
  color: #828282;
`;
