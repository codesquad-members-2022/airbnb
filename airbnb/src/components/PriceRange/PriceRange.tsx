import { useEffect, useState } from 'react';
import styled, { css } from 'styled-components';
import BarChart from './Canvas';
import { Box, Slider } from '@mui/material';
import {
  PriceRangeContainer,
  PriceRangeTitle,
  PriceRangePrice,
  PriceRangeCaption,
} from './PriceRange_styled';

const sampleData = [
  { percentage: 0, price: 10500, number: 100 },
  { percentage: 0, price: 20000, number: 20 },
  { percentage: 0, price: 30000, number: 10 },
  { percentage: 0, price: 40000, number: 50 },
  { percentage: 0, price: 13000, number: 135 },
  { percentage: 0, price: 24000, number: 15 },
  { percentage: 0, price: 24300, number: 4 },
  { percentage: 0, price: 78600, number: 5 },
  { percentage: 0, price: 55500, number: 24 },
  { percentage: 0, price: 12000, number: 30 },
  { percentage: 0, price: 78000, number: 7 },
  { percentage: 0, price: 55000, number: 20 },
  { percentage: 0, price: 12300, number: 35 },
];

function valuetext(price: number) {
  return `${price}°C`;
}

// function taggingPercentage(arr: any[]) {
//   let newArr = [];
//   for (let i = 1; i <= arr.length; i++) {
//     arr[i].percentage = i / arr.length;
//     newArr.push(arr[i]);
//   }
//   return newArr;
// }

function PriceRangeModal() {
  const [value, setValue] = useState([0, 100]); // Range Slider의 percentage 계산.
  const [price, setPrice] = useState([0, 100]);
  const [newAverage, setNewAverage] = useState(0);

  let sortedList: any[] = sampleData.sort((pre, cur) =>
    pre.price > cur.price ? 1 : pre.price < cur.price ? -1 : 0,
  ); // 랜덤하게 들어간 데이터를 가격 오름차순으로 재배열하고 차후 계산을 위한 percentage 세팅.
  let priceList: any[] = sortedList.map((e) => e.price); // 가격 오름차순으로 배열된 데이터에서 price의 value만 뽑아냄.
  let taggingPercentage = sortedList.forEach((e, i) => {
    e['percentage'] = i / sortedList.length;
  });

  let maxPrice = priceList.reduce((pre, cur) => (pre < cur ? cur : pre));
  let minPrice = priceList.reduce((pre, cur) => (pre > cur ? cur : pre));
  let sum = priceList.reduce((pre, cur) => pre + cur);
  let average = Math.floor(sum / priceList.length);

  const handleChange = (event: Event, newValue: number | number[]) => {
    setValue(newValue as number[]);
    // console.log(newValue); // 결과값 측정
    recalculatePrice();
  };

  const recalculatePrice = () => {
    const minPercentage = value[0] / 100;
    const maxPercentage = value[1] / 100;

    // sortedList.reduce((pre, cur) => {
    //   pre.percentage > minPercentage ? pre.price : '';
    // });
    const newMinPriceOptions = sortedList
      .filter(function (e) {
        return e.percentage > minPercentage;
      })
      .map((a) => a.price);
    const newMaxPriceOptions = sortedList
      .filter(function (e) {
        return e.percentage < maxPercentage;
      })
      .map((a) => a.price);

    console.log('newmin..' + newMinPriceOptions);
    console.log('newmax..' + newMaxPriceOptions);

    const newMinPrice = newMinPriceOptions[0];
    const newMaxPrice = newMaxPriceOptions[newMaxPriceOptions.length - 1];

    console.log('newminPrice..' + newMinPrice);
    console.log('newmaxPrice..' + newMaxPrice);

    setPrice([newMinPrice, newMaxPrice]);
  };

  const result = () => {
    console.log(priceList);
    console.log(sortedList);
  };

  useEffect(() => {
    setPrice([priceList[0], priceList[priceList.length - 1]]);
  }, []);

  return (
    <>
      <PriceRangeContainer>
        <PriceRangeTitle>가격범위</PriceRangeTitle>
        <PriceRangePrice>
          {price[0]}원 - {price[1]}원
        </PriceRangePrice>
        <PriceRangeCaption>
          평균 1박 요금은 {average}원입니다.
        </PriceRangeCaption>
        <Box
          sx={{
            position: 'absolute',
            top: 160,
          }}
        >
          <BarChart
            color="#bfbfbf"
            data={sortedList}
            height="150px"
            width="300px"
            padding="0px"
            margin="0px"
          />
        </Box>
        <Box
          sx={{
            position: 'absolute',
            top: 298,
            width: 300,
          }}
        >
          <Slider
            getAriaLabel={() => 'Price change'}
            value={value}
            onChange={handleChange}
            valueLabelDisplay="auto"
            getAriaValueText={valuetext}
          />
        </Box>
      </PriceRangeContainer>
    </>
  );
}

export default PriceRangeModal;
