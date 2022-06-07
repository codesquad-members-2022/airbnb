import { Typography } from '@mui/material';
import { useEffect, useRef } from 'react';

import Graph from '@components/Chart/Graph';
import Title from '@components/Chart/Title';
import FlexBox from '@components/FlexBox';
import color from '@constants/color';
import { usePriceDispatch, usePriceState } from '@contexts/PriceProvider';
import rooms from '@mocks/room';

interface roomsProps {
  uuid: number;
  image: string;
  city: string;
  price: number;
  capacity: number;
  stars: number;
}

const getPriceMinMax = (data: roomsProps[]) => {
  const min = data.reduce((prev, cur) => (prev.price > cur.price ? cur : prev));

  const max = data.reduce((prev, cur) => (prev.price > cur.price ? prev : cur));

  return [min.price, max.price];
};

const getAveragePrice = (min: number, max: number) => {
  // min, max 를 받아서 그 안의 값만 평균구하기
  let idx = 0;
  const data = rooms.data
    .map(room => room.price)
    .reduce((prev, curr) => {
      if (curr >= min && curr <= max) {
        idx += 1;
        return prev + curr;
      }
      return prev;
    }, 0);

  return idx === 0 ? 0 : Math.floor(data / idx);
};

export default function Chart() {
  const priceState = usePriceState();
  const priceDispatch = usePriceDispatch();
  const initPrice = useRef({});

  useEffect(() => {
    const [min, max] = getPriceMinMax(rooms.data);
    initPrice.current = { min, max };

    priceDispatch({ type: 'SET_PRICE', min, max });
  }, [priceDispatch]);

  return (
    <FlexBox
      component="article"
      sx={{
        backgroundColor: color.white,
        borderRadius: '2.5rem',
      }}
      jc="center"
      fd="column"
    >
      <FlexBox sx={{ position: 'relative' }} fd="column">
        <Typography sx={{ fontWeight: 700 }}>가격 범위</Typography>
        <Title priceState={priceState} getAveragePrice={getAveragePrice} />
        <Graph priceState={priceState} initPrice={initPrice} />
      </FlexBox>
    </FlexBox>
  );
}
