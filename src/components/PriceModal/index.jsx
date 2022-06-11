import { useContext, useRef } from 'react';
import styled from 'styled-components';
import ACCOMMODATIONS from 'mockData/accommodation';
import { FilterContext } from 'store/FilterContext';
import SearchBarModal from 'components/Modal/SearchBarModal';
import COLOR from 'styles/colors';
import FONT from 'styles/font';
import { getConvertPriceText } from 'utils/fromStateToString';
import { convertPriceToLocaleString, getAverage } from './calculate';
import Canvas from './Canvas';
import RangeSliderController from './RangeSliderController';

function PriceModal() {
  const lowInput = useRef(null);
  const highInput = useRef(null);

  const accommodationPrice = ACCOMMODATIONS.map((item) => item.price);
  const averagePrice = getAverage(accommodationPrice);
  const { priceSlider } = useContext(FilterContext);
  const { price } = priceSlider;
  const convertPriceText = getConvertPriceText({ lowPrice: price.low, highPrice: price.high });
  const convertAveragePrice = convertPriceToLocaleString(averagePrice);

  return (
    <SearchBarModal padding="52px 64px 66px" borderRadius="40px">
      <Title>가격 범위</Title>
      <div>
        <PriceRange>{convertPriceText}</PriceRange>
        <PriceAverage>평균 1박 요금은 ₩{convertAveragePrice} 입니다.</PriceAverage>
      </div>
      <RangeSlideWrap>
        <Canvas accommodationPrice={accommodationPrice} />
        <RangeSliderController lowInput={lowInput} highInput={highInput} />
      </RangeSlideWrap>
    </SearchBarModal>
  );
}
export default PriceModal;

const Title = styled.h4`
  margin-bottom: 16px;
  font-size: ${FONT.SIZE.MEDIUM};
  font-weight: ${FONT.WEIGHT.MEDIUM};
`;

const PriceRange = styled.p`
  font-size: ${FONT.SIZE.LARGE};
  font-weight: ${FONT.WEIGHT.REGULAR};
`;

const PriceAverage = styled.p`
  margin-top: 10px;
  font-size: ${FONT.SIZE.SMALL};
  font-weight: ${FONT.WEIGHT.REGULAR};
  color: ${COLOR.GREY[400]};
`;

const RangeSlideWrap = styled.div`
  position: relative;
  margin-top: 45px;
`;
