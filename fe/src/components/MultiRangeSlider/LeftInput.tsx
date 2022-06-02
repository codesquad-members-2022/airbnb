import React, { useCallback, useEffect, useRef } from 'react';

import {
  useInputRangeGetter,
  useInputRangeSetter,
} from '@/components/MultiRangeSlider/context/InputRange';

import { IPriceRange } from './common';
import * as S from './style';

function LeftInput({ minPrice, maxPrice }: IPriceRange) {
  const inputState = useInputRangeGetter();
  const { leftInputValue, rightInputValue } = inputState;
  const setInputValue = useInputRangeSetter();
  const inputRef = useRef(null);

  useEffect(() => {
    console.log(`minInputValue: ${leftInputValue} maxInputValue: ${rightInputValue}`);
  }, [inputState]);

  const handleChangeInput = useCallback(
    (event: React.ChangeEvent<HTMLInputElement>): void => {
      setInputValue((prevInputValue) => {
        return {
          ...prevInputValue,
          leftInputValue: Math.min(+event.target.value, rightInputValue - 1),
        };
      });
    },
    [inputState],
  );

  return (
    <S.Input
      min={minPrice}
      max={maxPrice}
      value={leftInputValue}
      ref={inputRef}
      className="thumb zindex-3"
      onChange={handleChangeInput}
    />
  );
}

export default LeftInput;
