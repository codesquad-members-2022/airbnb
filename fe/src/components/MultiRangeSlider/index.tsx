import { IPriceRange } from './common';
import LeftInput from './LeftInput';
import RightInput from './RightInput';
import * as S from './style';

function MultiRangeSlider({ minPrice, maxPrice }: IPriceRange) {
  return (
    <S.MultiRangeSlider>
      <LeftInput minPrice={minPrice} maxPrice={maxPrice} />
      <RightInput minPrice={minPrice} maxPrice={maxPrice} />
    </S.MultiRangeSlider>
  );
}

export default MultiRangeSlider;
