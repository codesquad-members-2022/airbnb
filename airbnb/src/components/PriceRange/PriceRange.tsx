import { useState } from 'react';
import styled, { css } from 'styled-components';
import BarChart from './Canvas';
import { Slider } from '@mui/material';

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
  { price: 12000, number: 300 },
];

const RangeContainer = styled.div`
  width: 300px;
  height: 400px;
  margin: 30px;
  z-index: 1;
`;

const PriceRangeTitle = styled.p`
font-size:${({ theme }) => theme.fontSizes.xs};
margin-top:10px;
margin-bottom:20px;
`;
const PriceRangePrice = styled.p`
font-size:${({ theme }) => theme.fontSizes.m};
font-weight:bold;
margin-bottom:10px;
`;
const PriceRangeCaption = styled.p`
font-size:${({ theme }) => theme.fontSizes.xs};
color:${({ theme }) => theme.colors.gray3};
margin-bottom:10px;
`;

function valuetext(price: number) {
  return `${price}°C`;
}

function PriceRangeModal() {
  const [value, setValue] = useState([0, 100]);
  const [data, setData] = useState();
  const [price, setPrice] = useState();
  const [average, setAverage] = useState();

  const handleChange = (event: Event, newValue: number | number[]) => {
    setValue(newValue as number[]);
  };

  const showPrice = () => {};

  return (
    <>
    <RangeContainer>
      <PriceRangeTitle>가격범위</PriceRangeTitle>
      <PriceRangePrice>{price}1000원</PriceRangePrice>
      <PriceRangeCaption>평균 1박 요금은 {average}입니다.</PriceRangeCaption>
      <BarChart
        color="#bfbfbf"
        data={sampleData}
        height="150px"
        width="300px"
        padding="0px"
        margin="0px"
      />
      <Slider
        getAriaLabel={() => 'Price change'}
        value={value}
        onChange={handleChange}
        valueLabelDisplay="auto"
        getAriaValueText={valuetext}
      />
      </RangeContainer>
    </>
  );
}

export default PriceRangeModal;
