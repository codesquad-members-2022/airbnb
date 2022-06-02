import React, { useCallback, useRef } from 'react';

import {
  useInputRangeGetter,
  useInputRangeSetter,
} from '@/components/MultiRangeSlider/context/InputRange';

import { IPriceRange } from './common';
import * as S from './style';

function RightInput({ minPrice, maxPrice }: IPriceRange) {
  const inputState = useInputRangeGetter();
  const { minInputValue, maxInputValue } = inputState;
  const setMaxInputValue = useInputRangeSetter();
  const inputRef = useRef(null);

  const handleChangeInput = useCallback(
    (event: React.ChangeEvent<HTMLInputElement>): void => {
      setMaxInputValue((prevInputState) => {
        return {
          ...prevInputState,
          maxInputValue: Math.max(minInputValue + 1, +event.target.value),
        };
      });
    },
    [inputState],
  );

  return (
    <S.Input
      min={minPrice}
      max={maxPrice}
      value={maxInputValue}
      ref={inputRef}
      className="thumb zindex-4"
      onChange={handleChangeInput}
    />
  );
}

export default RightInput;
