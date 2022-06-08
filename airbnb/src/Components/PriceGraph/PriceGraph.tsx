import { useEffect, useRef } from 'react';
import * as S from './priceGraph.style';

const CANVAS_WIDTH = 365;
const CANVAS_HEIGHT = 100;
const X_COUNT_AMOUNTS = 20;

// TODO: 가격과 숙소 정보 목서비스 핸들러로 이동
const ACCOMODATION_DATAS = [
  150000, 30000, 100000, 41240, 55000, 200000, 250000, 140000, 40000, 50000,
  65200, 53220, 242300, 131000, 45630, 143400, 232400, 280000, 41250, 64500,
  53453, 123100, 67457, 234230, 23233, 53200, 70000, 90000, 10000, 20000,
  100000, 200000, 90000, 130000, 190000, 200000, 40000, 13000, 63460, 30000,
  242000, 30000, 20000, 50000, 30000, 60000, 70000, 10000, 120000, 60000,
  230000, 100000, 190000, 200000, 400000, 300000, 320000,
];

const HIGHER_PRICE = Math.max(...ACCOMODATION_DATAS);

function getCount(min: number, max: number, target: number[]) {
  return target.filter(price => price >= min && price < max).length;
}

const STANDARD_PRICES = Array.from({ length: X_COUNT_AMOUNTS }, (_, idx) => {
  const standard = idx * Math.floor(HIGHER_PRICE / X_COUNT_AMOUNTS);
  const nextStandar = (idx + 1) * Math.floor(HIGHER_PRICE / X_COUNT_AMOUNTS);
  const count = getCount(standard, nextStandar, ACCOMODATION_DATAS);
  return { price: standard, count };
});

const X_CELL_LENGTH = Math.floor(CANVAS_WIDTH / X_COUNT_AMOUNTS);
const X_CELL_HALF_LENGTH = Math.floor(X_CELL_LENGTH / 2);
const Y_CELL_HEIGHT = Math.floor(
  CANVAS_HEIGHT / (Math.max(...STANDARD_PRICES.map(v => v.count)) + 2),
);

function getCurveLength(lastX: number, lastY: number, currentAmount: number) {
  const currentHalfLength = lastX + X_CELL_HALF_LENGTH;
  const currentLength = lastX + X_CELL_LENGTH;
  return [
    currentHalfLength,
    lastY,
    currentHalfLength,
    CANVAS_HEIGHT - currentAmount * Y_CELL_HEIGHT,
    currentLength,
    CANVAS_HEIGHT - currentAmount * Y_CELL_HEIGHT,
  ];
}

let lastX: number;
let lastY: number;

function drawGraph(
  accomodationDatas: { price: number; count: number }[],
  getCoord: (lastX: number, lastY: number, currentAmount: number) => number[],
  canvasCtx: CanvasRenderingContext2D | null | undefined,
) {
  if (!canvasCtx) return;
  canvasCtx.beginPath();
  canvasCtx.moveTo(0, CANVAS_HEIGHT);
  accomodationDatas.forEach(({ count }, idx) => {
    if (idx === 0) {
      lastX = 0;
      lastY = CANVAS_HEIGHT;
    }
    canvasCtx.bezierCurveTo(
      getCoord(lastX, lastY, count)[0],
      getCoord(lastX, lastY, count)[1],
      getCoord(lastX, lastY, count)[2],
      getCoord(lastX, lastY, count)[3],
      getCoord(lastX, lastY, count)[4],
      getCoord(lastX, lastY, count)[5],
    );
    [, , , , lastX, lastY] = getCoord(lastX, lastY, count);
  });

  const lingrad = canvasCtx.createLinearGradient(0, 100, 365, 100);
  canvasCtx.clearRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);
  lingrad.addColorStop(0, 'red');
  lingrad.addColorStop(0.3, 'red');
  lingrad.addColorStop(0.3, 'black');
  lingrad.addColorStop(0.7, 'black');
  lingrad.addColorStop(0.7, 'green');
  lingrad.addColorStop(1, 'green');
  canvasCtx.fillStyle = lingrad;
  canvasCtx.fill();
}

export function PriceGraph() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  useEffect(() => {
    const ctx = canvasRef.current?.getContext('2d');
    drawGraph(STANDARD_PRICES, getCurveLength, ctx);
  }, []);

  return (
    <>
      <S.Canvas ref={canvasRef} width={CANVAS_WIDTH} height={CANVAS_HEIGHT} />
      <S.RangeSliderWrapper>
        <S.Range type="range" min={0} max={100} defaultValue={0} />
        <S.Range type="range" min={0} max={100} defaultValue={100} />
      </S.RangeSliderWrapper>
    </>
  );
}
