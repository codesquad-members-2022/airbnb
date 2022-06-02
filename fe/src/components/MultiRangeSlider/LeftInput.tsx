import React, { useCallback, useEffect, useRef } from 'react';

import {
  useInputRangeGetter,
  useInputRangeSetter,
} from '@/components/MultiRangeSlider/context/InputRange';

import { IPriceRange } from './common';
import * as S from './style';

function LeftInput({ minPrice, maxPrice }: IPriceRange) {
  const inputState = useInputRangeGetter();
  const { minInputValue, maxInputValue } = inputState;
  const setMinInputValue = useInputRangeSetter();
  const inputRef = useRef(null);

  useEffect(() => {
    console.log(`minInputValue: ${minInputValue} maxInputValue: ${maxInputValue}`);
  }, [inputState]);

  const handleChangeInput = useCallback(
    (event: React.ChangeEvent<HTMLInputElement>): void => {
      setMinInputValue((prevInputState) => {
        return {
          ...prevInputState,
          minInputValue: Math.min(+event.target.value, maxInputValue - 1),
        };
      });
    },
    [inputState],
  );

  return (
    <S.Input
      min={minPrice}
      max={maxPrice}
      value={minInputValue}
      ref={inputRef}
      className="thumb zindex-3"
      onChange={handleChangeInput}
    />
  );
}

export default LeftInput;
