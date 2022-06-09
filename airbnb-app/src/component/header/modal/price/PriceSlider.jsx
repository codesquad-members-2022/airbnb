import { useContext } from 'react';
import styled from 'styled-components';
import { PriceContext } from '@/context/PriceProvider';
import { MIN_PRICE, MAX_PRICE, SLIDER_INPUT_STEP } from '@/constants/priceText';

function PriceSlider() {
  const { min, max, updateMin, updateMax } = useContext(PriceContext);

  return (
    <Container>
      <Slider type="range" value={min} min={MIN_PRICE} max={MAX_PRICE} step={SLIDER_INPUT_STEP} onChange={updateMin} />
      <Slider type="range" value={max} min={MIN_PRICE} max={MAX_PRICE} step={SLIDER_INPUT_STEP} onChange={updateMax} />
    </Container>
  );
}

const Container = styled.div`
  position: relative;
`;

const Slider = styled.input`
  -webkit-appearance: none;
  position: absolute;
  z-index: 1;
  top: -20px;
  width: 100%;
  pointer-events: none;
  opacity: 1;

  ::-webkit-slider-thumb {
    -webkit-appearance: none;
    width: 30px;
    height: 30px;
    background-image: url('${process.env.PUBLIC_URL}/assets/thumb.svg');
    background-size: 30px;
    border-radius: 50%;
    cursor: pointer;
    pointer-events: all;
  }
`;

export default PriceSlider;
