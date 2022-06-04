import { useState } from 'react';
import styled, { css } from 'styled-components';
import BarChart from './Canvas';
import {
  RangeSlider,
  RangeSliderTrack,
  RangeSliderFilledTrack,
  RangeSliderThumb,
} from '@chakra-ui/react';
import { SliderInput } from './Slider';
const sampleData = [
  { price: 10000, number: 100 },
  { price: 20000, number: 20 },
  { price: 30000, number: 10 },
  { price: 40000, number: 20 },
  { price: 13000, number: 17 },
  { price: 24000, number: 15 },
  { price: 24300, number: 10 },
  { price: 78600, number: 5 },
  { price: 55500, number: 4 },
  { price: 60000, number: 10 },
  { price: 50000, number: 25 },
  { price: 12000, number: 300 },
  { price: 14500, number: 230 },
  { price: 43200, number: 110 },
];

function PriceRangeModal() {
  // const [min, setMin] = useState(0);
  // const [max, setMax] = useState(100);

  return (
    <>
      <BarChart
        color="#bfbfbf"
        data={sampleData}
        height="300px"
        width="300px"
        padding="20px"
      />
      {/* <SliderInput
        onInput={(e) => setMin(e.target.value)}
        // onInput={(e) => setMax(e.target.value)}
        type="range"
        style={{
          width: '100%',
          '--min': 0,
          '--max': 100,
          '--val': min,
        }}
      /> */}
      <RangeSlider
        aria-label={['min', 'max']}
        colorScheme="pink"
        defaultValue={[0, 100]}
      >
        <RangeSliderTrack>
          <RangeSliderFilledTrack />
        </RangeSliderTrack>
        <RangeSliderThumb index={0} />
        <RangeSliderThumb index={1} />
      </RangeSlider>
      <p>hi!</p>
    </>
  );
}

export default PriceRangeModal;
