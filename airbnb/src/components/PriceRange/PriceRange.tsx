import { useEffect, useState } from 'react';
import BarChart from './Canvas';
import { Box, Slider } from '@mui/material';
import {
  PriceRangeContainer,
  PriceRangeTitle,
  PriceRangePrice,
  PriceRangeCaption,
} from './PriceRange.styled';
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

function PriceRangeModal() {
  const [value, setValue] = useState([0, 100]); // Range Slider의 percentage 계산.
  const [price, setPrice] = useState([0, 100]);
  const [newAverage, setNewAverage] = useState(0);
  const [userInput, setUserInput] = useState({
    minPrice: 0,
    maxPrice: 100,
  });

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
    // 사용자가 넣은 인풋 안에서 최저 가격과 최고 가격을 구한다.
    const minPercentage = value[0] / 100;
    const maxPercentage = value[1] / 100;

    const newMinPriceOptions = sortedList // 최저 가격을 구하기 위해 슬라이더의 최소값보다 큰 값들의 배열을 구한다.
      .filter(function (e) {
        return e.percentage > minPercentage;
      })
      .map((a) => a.price);
    const newMaxPriceOptions = sortedList // 최고 가격을 구하기 위해 슬라이더의 최대값보다 작은 값들의 배열을 구한다.
      .filter(function (e) {
        return e.percentage < maxPercentage;
      })
      .map((a) => a.price);

    const newMinPrice = newMinPriceOptions[0];
    const newMaxPrice = newMaxPriceOptions[newMaxPriceOptions.length - 1];

    // 최저 가격과 최고 가격 사이의 평균을 구한다.
    const theListForNewAverageCalculationStep1 = newMinPriceOptions.filter(
      (e) => newMaxPriceOptions.includes(e),
    );
    const theListForNewAverageCalculationStep2 =
      theListForNewAverageCalculationStep1.reduce((pre, cur) => pre + cur);
    const theListForNewAverageCalculationStep3 = Math.floor(
      theListForNewAverageCalculationStep2 /
        theListForNewAverageCalculationStep1.length,
    ); // 최저 가격과 최고 가격 사이에 있는 값들의 교집합을 구한 후 평균을 구한다. (엄밀히 말하면 숙소의 개수가 반영되지 않았기 때문에 정확한 평균이 아니지만... 여기까지 하는 것으로 한다.)

    setPrice([newMinPrice, newMaxPrice]);
    setNewAverage(theListForNewAverageCalculationStep3);
  };

  useEffect(() => {
    setPrice([priceList[0], priceList[priceList.length - 1]]);
    setNewAverage(average);
  }, []);

  return (
    <>
      <PriceRangeContainer>
        <PriceRangeTitle>가격범위</PriceRangeTitle>
        <PriceRangePrice>
          {price[0]}원 - {price[1]}원
        </PriceRangePrice>
        <PriceRangeCaption>
          평균 1박 요금은 {newAverage}원입니다.
        </PriceRangeCaption>
        <Box
          sx={{
            position: 'absolute',
            top: 160,
          }}
        >
          <BarChart
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
            top: 310,
            width: 300,
          }}
        >
          <Slider
            getAriaLabel={() => 'Price change'}
            value={value}
            onChange={handleChange}
            valueLabelDisplay="auto"
            valueLabelFormat={(e) => <span>상위 {100 - e}%의 가격입니다.</span>}
          />
        </Box>
      </PriceRangeContainer>
    </>
  );
}

export default PriceRangeModal;
