import { useEffect } from 'react';

import { useInputRangeSetter } from '@/components/MultiRangeSlider/context/InputRange';

import { IPriceRange } from './common';
import LeftInput from './LeftInput';
import RightInput from './RightInput';
import * as S from './style';

function MultiRangeSlider({ minPrice, maxPrice }: IPriceRange) {
  const setInputValue = useInputRangeSetter();

  // 초기 inputValue 값을 설정
  useEffect(() => {
    setInputValue({
      leftInputValue: minPrice,
      rightInputValue: maxPrice,
    });
  }, []);

  return (
    <S.MultiRangeSlider>
      <LeftInput minPrice={minPrice} maxPrice={maxPrice} />
      <RightInput minPrice={minPrice} maxPrice={maxPrice} />
    </S.MultiRangeSlider>
  );
}

export default MultiRangeSlider;
