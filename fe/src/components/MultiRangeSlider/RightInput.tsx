import React, { useCallback, useRef } from 'react';

import {
  useInputRangeGetter,
  useInputRangeSetter,
} from '@/components/MultiRangeSlider/context/InputRange';

import { IPriceRange } from './common';
import * as S from './style';

function RightInput({ minPrice, maxPrice }: IPriceRange) {
  const inputState = useInputRangeGetter();
  const setInputValue = useInputRangeSetter();
  const inputRef = useRef(null);

  const { leftInputValue, rightInputValue } = inputState;

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
      className="thumb"
      min={minPrice}
      max={Math.ceil(maxPrice)}
      value={rightInputValue}
      ref={inputRef}
      onChange={handleChangeInput}
      isLeftValue={false}
    />
  );
}

export default RightInput;
