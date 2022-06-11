import { ChangeEvent, Dispatch, useRef } from 'react';

import styled from 'styled-components';
import PauseIcon from 'images/FE_숙소예약서비스/pause-circle.svg';

import { usePriceDispatch, usePriceState } from 'hooks/usePrice';
import { toLocalString } from 'utils/helper';

type PriceInfoType = {
  dataPriceInfo: { [key: string]: number };
  initSliderRange: { [key: string]: number };
  setSliderRange: { [key: string]: Dispatch<React.SetStateAction<number>> };
};

const thumbPercent = (target: HTMLInputElement) => {
  const { value, min, max } = target;
  const percent = ((Number(value) - Number(min)) / (Number(max) - Number(min))) * 100;
  return percent;
};

const makePriceText = (min: number, max: number) => {
  const minPrice = toLocalString(min);
  const maxPrice = toLocalString(max);

  return `₩${minPrice}~${maxPrice}`;
};

function RangeSlider({ dataPriceInfo, initSliderRange, setSliderRange }: PriceInfoType) {
  const { priceRange } = usePriceState();
  const { setRange, setPriceText } = usePriceDispatch();

  const STEP = 1000;
  const THUMB_GAP = 6;

  const leftInput = useRef<HTMLInputElement>(null);
  const rightInput = useRef<HTMLInputElement>(null);

  const leftChangeHandle = (e: ChangeEvent<HTMLInputElement>) => {
    if (rightInput.current === null) return;

    if (thumbPercent(e.target) > thumbPercent(rightInput.current) - THUMB_GAP) return;

    const minValue = Number(e.target.value);
    const maxValue = Number(rightInput.current.value);

    setSliderRange.min(minValue);
    setRange({ min: minValue, max: maxValue });

    const priceText = makePriceText(minValue, maxValue);
    setPriceText(priceText);
  };

  const RightChangeHandle = (e: ChangeEvent<HTMLInputElement>) => {
    if (leftInput.current === null) return;

    if (thumbPercent(e.target) < thumbPercent(leftInput.current) + THUMB_GAP) return;

    const minValue = Number(leftInput.current.value);
    const maxValue = Number(e.target.value);

    setSliderRange.max(maxValue);
    setRange({ min: minValue, max: maxValue });

    const priceText = makePriceText(minValue, maxValue);
    setPriceText(priceText);
  };

  return (
    <SliderWrap>
      <CustomInput
        type="range"
        min={dataPriceInfo.min}
        max={dataPriceInfo.max}
        step={STEP}
        value={priceRange.min === 0 ? initSliderRange.min : priceRange.min}
        onChange={leftChangeHandle}
        ref={leftInput}
      />
      <CustomInput
        type="range"
        min={dataPriceInfo.min}
        max={dataPriceInfo.max}
        step={STEP}
        value={priceRange.max === 0 ? initSliderRange.max : priceRange.max}
        onChange={RightChangeHandle}
        ref={rightInput}
      />
    </SliderWrap>
  );
}

const SliderWrap = styled.div`
  position: relative;
  width: 100%;
`;

const CustomInput = styled.input.attrs({ type: 'range' })`
  position: absolute;
  z-index: 2;
  bottom: 6px;
  width: calc(100% + 24px);
  height: 100%;
  border-radius: 8px;
  background: none;
  transform: translateX(-12px);
  pointer-events: none;
  -webkit-appearance: none;

  ::-webkit-slider-thumb {
    width: 24px;
    height: 24px;
    border-radius: 50%;
    border: 1px solid ${({ theme }) => theme.colors.grey1};
    background: ${({ theme }) => theme.colors.white};
    background-image: url(${PauseIcon});
    background-size: cover;
    pointer-events: all;
    -webkit-appearance: none;
    cursor: pointer;
  }
`;

export default RangeSlider;
