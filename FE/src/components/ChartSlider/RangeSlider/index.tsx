import React, { useContext, useEffect, useRef } from 'react';

import * as S from '@components/ChartSlider/RangeSlider/RangeSlider.style';
import Icon, { ICON_NAME, ICON_SIZE } from '@components/common/Icon';
import { PriceContext, PriceContextTypes } from '@context/price/Provider';

const MIN_RANGE = 100000;
const MIN_PRICE = 12000;
const MAX_PRICE = 1100000;

const RangeSlider = () => {

  const { minPrice, setMinPrice, maxPrice, setMaxPrice } = useContext<PriceContextTypes>(PriceContext);

  const leftThumbRef = useRef<HTMLButtonElement>(null);
  const rightThumbRef = useRef<HTMLButtonElement>(null);

  const handleMinPriceInput = ({ target }: React.ChangeEvent<HTMLInputElement>) => {
    const newMinPrice =
      maxPrice - Number(target.value) >= MIN_RANGE
        ? Math.min(Number(target.value), maxPrice)
        : maxPrice - MIN_RANGE;
    const priceRatio = (newMinPrice / MAX_PRICE) * 100;
    setMinPrice(newMinPrice);
    if (leftThumbRef.current) {
      leftThumbRef.current.style.left = `${priceRatio}%`;
    }
  };

  const handleMaxPriceInput = ({ target }: React.ChangeEvent<HTMLInputElement>) => {
    const newMaxPrice =
      Number(target.value) - minPrice >= MIN_RANGE
        ? Math.max(Number(target.value), minPrice)
        : minPrice + MIN_RANGE;
    const priceRatio = (newMaxPrice / MAX_PRICE) * 100;
    setMaxPrice(newMaxPrice);
    if (rightThumbRef.current) {
      rightThumbRef.current.style.left = `${priceRatio}%`;
    }
  };

  useEffect(() => {
    if (leftThumbRef.current && rightThumbRef.current) {
      leftThumbRef.current.style.left = '0%';
      rightThumbRef.current.style.left = '100%';
    }
  }, []);

  return (
    <S.Container>
      <S.RangeContainer>
        <S.Thumb ref={leftThumbRef}>
          <Icon iconName={ICON_NAME.PAUSE} iconSize={ICON_SIZE.LARGE} />
        </S.Thumb>
        <S.Thumb ref={rightThumbRef}>
          <Icon iconName={ICON_NAME.PAUSE} iconSize={ICON_SIZE.LARGE} />
        </S.Thumb>
      </S.RangeContainer>
      <S.RangeInput min={MIN_PRICE} max={MAX_PRICE} value={minPrice} onChange={handleMinPriceInput} />
      <S.RangeInput min={MIN_PRICE} max={MAX_PRICE} value={maxPrice} onChange={handleMaxPriceInput} />
    </S.Container>
  );
};

export default RangeSlider;
