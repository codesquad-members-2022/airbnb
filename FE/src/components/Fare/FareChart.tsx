import React, { useContext, useEffect, useRef } from 'react';
import { FareContext } from '../../contexts/farecontext/farecontext';
import { FareValue } from './FareChart.type';
import { ChartData } from './Mok';

const getRoomCount = () => {
  const roomCount = [];
  const rooms = ChartData.priceAndCountList;
  for (let roomIdx = 0; roomIdx < rooms.length; roomIdx += 1) {
    roomCount.push(rooms[roomIdx].accommodationCount);
  }
  return roomCount;
};

const roomsCount = getRoomCount();
const topOfRoomCount = Math.max(...roomsCount);

const Draw = (
  ctx: CanvasRenderingContext2D | null | undefined,
  value: FareValue,
) => {
  ctx?.clearRect(0, 0, 317, 100);
  const lineStyle = 'rgba(0,0,0,0.1)';
  if (ctx) {
    ctx.strokeStyle = lineStyle;
  }
  ctx?.beginPath();
  ctx?.moveTo(10, 97);
  ctx?.lineTo(310, 97);
  ctx?.moveTo(10, 97);
  ctx?.stroke();
  if (ctx && roomsCount) {
    DrawChart(ctx, value);
  }
};

const DrawChart = (ctx: CanvasRenderingContext2D, value: FareValue) => {
  const fillStyle = 'rgba(0,0,0,0.05)';
  ctx.fillStyle = fillStyle;
  let startX = 15;
  const endY = 97;
  const nextX = 10;
  const Barwidth = 20;
  const valueUnit = 10000;
  const yUnit = Math.floor(endY / topOfRoomCount);
  for (let idx = 0; idx < roomsCount.length; idx += 1) {
    ctx.beginPath();
    ctx.moveTo(startX, endY);
    ctx.lineTo(startX, endY - yUnit * roomsCount[idx]);
    ctx.lineTo(startX + Barwidth, endY - yUnit * roomsCount[idx]);
    ctx.lineTo(startX + Barwidth, endY);
    if (value.left / valueUnit === idx) {
      ctx.fillStyle = 'rgba(0,0,0,0.2)';
    }
    if (value.right / valueUnit === idx) {
      ctx.fillStyle = fillStyle;
    }
    ctx.fill();

    startX = startX + nextX + Barwidth;
  }
};

export default function Chart(): JSX.Element {
  const { Slidevalue } = useContext(FareContext);
  const chartRef = useRef<HTMLCanvasElement>(null);
  useEffect(() => {
    Draw(chartRef.current?.getContext('2d'), Slidevalue);
  }, [ChartData, Slidevalue]);
  return (
    <canvas ref={chartRef} width="317" height="100">
      현재 브라우저에서 지원되지 않는 기능입니다.
    </canvas>
  );
}
