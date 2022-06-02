import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { pathCoords } from '../../util/graphUtil';
import PriceText from './PriceText';
import GraphSlider from './GraphSlider';
import { GRAPH_WIDTH, ONE_PER_PRICE } from '../../constants/graphConstansts';
import {
  usePriceStateContext,
  usePriceDispatchContext,
} from '../../store/priceStore/PriceContext';

const Graph = () => {
  const { minPrice, maxPrice } = usePriceStateContext();
  // todo -> 모달창을 끄더라도 그래프 가 똑같았으면 좋겠다 <<
  // const initialPriceCoord =
  //   minPrice === null || maxPrice === null
  //     ? { min: 0, max: GRAPH_WIDTH }
  //     : { min: minPrice / ONE_PER_PRICE, max: maxPrice / ONE_PER_PRICE };
  const dispatchPrice = usePriceDispatchContext();
  const [priceCoord, setPriceCoord] = useState({ min: 0, max: GRAPH_WIDTH });

  useEffect(
    () =>
      dispatchPrice({
        minPrice: priceCoord.min * ONE_PER_PRICE,
        maxPrice: priceCoord.max * ONE_PER_PRICE,
      }),
    [priceCoord],
  );

  return (
    <>
      <PriceText
        minPrice={priceCoord.min * ONE_PER_PRICE}
        maxPrice={priceCoord.max * ONE_PER_PRICE}
      />
      <Wrapper>
        <GraphSvg width="355" height="100" viewBox="0 0 355 100">
          <defs>
            <mask id="mask">
              <rect x="0" y="0" width="355" height="100" fill="grey" />
              <rect
                x={priceCoord.min}
                y="0"
                width="355"
                height="100"
                fill="white"
              />
              <rect
                x={priceCoord.max}
                y="0"
                width="355"
                height="100"
                fill="grey"
              />
            </mask>
          </defs>
          <path mask="url(#mask)" d={pathCoords} strokeWidth="0.4" />
        </GraphSvg>
        <GraphSlider setPriceCoord={setPriceCoord} priceCoord={priceCoord} />
      </Wrapper>
    </>
  );
};

const Wrapper = styled.div`
  width: 380px;
  height: 200px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const GraphSvg = styled.svg`
  transform: scaleY(-1);
  width: 100%;
  height: 100px;
`;

export default Graph;
