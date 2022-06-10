import { ModalProps, PriceType } from 'components/SearchBar/types';
import React, { useEffect, useRef, useState } from 'react';
import { ReactComponent as PauseIcon } from 'img/svg/pause-circle.svg';
import { ModalHeader, Title, PriceInfo, Caption, RangeSlider, MultiRangeSlider, Slider, Thumb } from './Price.styled';

const canvasWidth = 300;
const canvasHeight = 150;

const isBetween = (value: number, start: number, end: number): boolean => {
  return value >= start && (end ? value <= end : true);
};

const getGraphValues = (data: number[], scaleNum: number) => {
  const minimum = Math.min(...data);
  const maximum = Math.max(...data);

  const scale = Math.floor((minimum + maximum) / scaleNum);
  const scaleArray = Array.from({ length: scaleNum }, (e, i) => i * scale);
  const graphValueArray: number[] = new Array(scaleNum).fill(0);

  data.forEach((value) => {
    for (let i = 0; i < scaleArray.length; i += 1) {
      if (isBetween(value, scaleArray[i], scaleArray[i + 1])) graphValueArray[i] += 1;
    }
  });

  scaleArray[0] = minimum;
  scaleArray[scaleArray.length] = maximum;

  return [graphValueArray, scaleArray];
};

export default function Price({ search, addSearch }: ModalProps<PriceType>): JSX.Element {
  const priceValues = [
    5000, 20300, 30000, 40220, 83843, 98789, 100000, 32220, 29990, 19990, 99900, 63330, 10000, 39900, 20030, 40000,
    10203, 20020, 41110, 42462, 35000, 70043, 43567, 55677, 45645, 34534, 13222, 27000, 26000, 60030, 63433, 80088,
    90302, 96999, 97000, 64300, 72000,
  ];
  const min = Math.min(...priceValues);
  const max = Math.max(...priceValues);
  const average = Math.ceil(priceValues.reduce((acc, cur) => acc + cur, 0) / priceValues.length).toLocaleString();

  const [rangeLeftValue, setRangeLeftValue] = useState<number>(min);
  const [rangeRightValue, setRangeRightValue] = useState<number>(max);

  const [graphValues, scaleArray] = getGraphValues(priceValues, 15);
  const canvasRef = useRef<HTMLCanvasElement>(null);

  const drawGraph = (canvas: HTMLCanvasElement, context: CanvasRenderingContext2D) => {
    const barWidth = canvas.width / graphValues.length;

    let barPosition = 0;

    for (let i = 0; i < graphValues.length; i += 1) {
      const barHeight = graphValues[i] * 30;

      const isSelected = () => rangeLeftValue <= scaleArray[i] && rangeRightValue >= scaleArray[i + 1];
      const fillColor = isSelected() ? '#000' : '#eee';

      context.fillStyle = fillColor;
      context.fillRect(barPosition, canvas.height - barHeight, barWidth, barHeight);
      barPosition += barWidth;
    }
  };

  useEffect(() => {
    if (!canvasRef.current) return;
    const canvas = canvasRef.current;
    const context = canvas.getContext('2d');
    if (!context) return;
    drawGraph(canvas, context);
  });

  useEffect(() => {
    addSearch({ type: 'SET_PRICE', value: { min: rangeLeftValue, max: rangeRightValue } });
  }, [rangeLeftValue, rangeRightValue, addSearch]);

  useEffect(() => {
    if (search.min === null) setRangeLeftValue(min);
    if (search.max === null) setRangeRightValue(max);
  }, [search.min, search.max, min, max]);

  const setLeftValue = (event: React.FormEvent<HTMLInputElement>) => {
    const { value } = event.currentTarget;
    const leftValue = Math.min(Number(value), rangeRightValue - 1);
    setRangeLeftValue(leftValue);
  };

  const setRightValue = (event: React.FormEvent<HTMLInputElement>) => {
    const { value } = event.currentTarget;
    const righttValue = Math.max(Number(value), rangeLeftValue + 1);
    setRangeRightValue(righttValue);
  };

  const minPrice = (search.min || min).toLocaleString();
  const maxPrice = (search.max || max).toLocaleString();

  const leftPosition = ((rangeLeftValue - min) / (max - min)) * 100;
  const rightPosition = 100 - ((rangeRightValue - min) / (max - min)) * 100;

  return (
    <>
      <ModalHeader>
        <Title>가격 범위</Title>
        <PriceInfo>{`₩${minPrice}-₩${maxPrice}+`}</PriceInfo>
        <Caption>{`평균 1박 요금은 ₩${average}입니다`}</Caption>
      </ModalHeader>
      <canvas id="priceChart" ref={canvasRef} width={canvasWidth} height={canvasHeight} />
      <MultiRangeSlider>
        <RangeSlider>
          <input type="range" id="input-left" value={rangeLeftValue} min={min} max={max} onChange={setLeftValue} />
          <input type="range" id="input-right" value={rangeRightValue} min={min} max={max} onChange={setRightValue} />
        </RangeSlider>
        <Slider>
          <div className="track" />
          <Thumb className="left" leftPosition={leftPosition}>
            <PauseIcon />
          </Thumb>
          <Thumb className="right" rightPosition={rightPosition}>
            <PauseIcon />
          </Thumb>
        </Slider>
      </MultiRangeSlider>
    </>
  );
}
