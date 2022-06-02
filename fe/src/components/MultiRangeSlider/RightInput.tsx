import React, { useCallback, useRef } from 'react';

import {
  useInputRangeGetter,
  useInputRangeSetter,
} from '@/components/MultiRangeSlider/context/InputRange';

import { IPriceRange } from './common';
import * as S from './style';

function RightInput({ minPrice, maxPrice }: IPriceRange) {
  const inputState = useInputRangeGetter();
  const { leftInputValue, rightInputValue } = inputState;
  const setInputValue = useInputRangeSetter();
  const inputRef = useRef(null);

  const handleChangeInput = useCallback(
    (event: React.ChangeEvent<HTMLInputElement>): void => {
      setInputValue((prevInputValue) => {
        return {
          ...prevInputValue,
          rightInputValue: Math.max(leftInputValue + 1, +event.target.value),
        };
      });
    },
    [inputState],
  );

  return (
    <S.Input
      min={minPrice}
      max={maxPrice}
      value={rightInputValue}
      ref={inputRef}
      className="thumb zindex-4"
      onChange={handleChangeInput}
    />
  );
}

export default RightInput;
