import React, { useCallback, useRef } from 'react';

import {
  useInputRangeGetter,
  useInputRangeSetter,
} from '@/components/MultiRangeSlider/context/InputRange';

import { IPriceRange } from './common';
import * as S from './style';

function LeftInput({ minPrice, maxPrice }: IPriceRange) {
  const inputState = useInputRangeGetter();
  const setInputValue = useInputRangeSetter();
  const inputRef = useRef(null);

  const { leftInputValue, rightInputValue } = inputState;

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
      className="thumb"
      min={minPrice}
      max={Math.ceil(maxPrice)}
      value={leftInputValue}
      ref={inputRef}
      onChange={handleChangeInput}
      isLeftValue
    />
  );
}

export default LeftInput;
