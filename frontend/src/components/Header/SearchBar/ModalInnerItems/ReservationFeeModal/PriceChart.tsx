import { useContext, useEffect, useRef } from "react";

import { PriceRangeContext } from "contexts/contexts";
import theme from "styles/theme";

import { PriceChartCanvas } from "./ReservationFeeModal.style";

// TODO: 실제 API 데이터로 수정, 테마 분리
const EXCLUDE_RANGE_COUNT = 1;

const canvasSize = theme.elementSize.searchBar.priceChart;

// 임시데이터 시작
const accomodationsCountList = [
  0, 10, 3, 4, 40, 20, 0, 30, 0, 10, 20, 11, 9, 1, 10, 3, 5, 10, 4, 30,
];
// 임시 데이터 끝

const priceRangeCount = accomodationsCountList.length;
const maxCount = Math.max(...accomodationsCountList);

const coordXIncrementRange = Math.floor(
  canvasSize.width / (priceRangeCount - EXCLUDE_RANGE_COUNT)
  // 첫번째 범위는 그래프에서 이미 그리고 시작하므로 하나 제외
);

const start = { x: 0, y: canvasSize.height };
const end = {
  x: canvasSize.width,
  y: canvasSize.height,
};
const {
  grey5: { main: externalRangeColor },
  black: { main: selectedRangeColor },
} = theme.palette;

const FIRST_INDEX = 0;
const ONE_PERCENT = 0.01;

const PriceChart = () => {
  const $canvasRef = useRef<HTMLCanvasElement>(null);

  const {
    priceRange: { percentage },
  } = useContext(PriceRangeContext)!;

  const drawChart = () => {
    const ctx = $canvasRef.current?.getContext("2d")!;

    ctx.beginPath();
    ctx.moveTo(start.x, start.y);
    let currentX = -coordXIncrementRange;
    let prevCoords = { ...start };

    const drawBezierCurve = (targetCoords: { x: number; y: number }) => {
      ctx.bezierCurveTo(
        prevCoords.x + coordXIncrementRange / 2,
        prevCoords.y,
        prevCoords.x + coordXIncrementRange / 2,
        targetCoords.y,
        targetCoords.x,
        targetCoords.y
      );
    };

    accomodationsCountList.forEach((el, idx) => {
      currentX += coordXIncrementRange;

      const coords = {
        x: currentX,
        y: canvasSize.height - Math.floor((el / maxCount) * canvasSize.height),
      };

      if (idx === FIRST_INDEX) {
        ctx.lineTo(coords.x, coords.y);
        prevCoords = { ...coords };

        return;
      }

      drawBezierCurve(coords);

      prevCoords = { ...coords };
    });

    drawBezierCurve(end);

    ctx.closePath();
  };

  const fillChart = (rangeStart: number, rangeEnd: number) => {
    const ctx = $canvasRef.current?.getContext("2d")!;
    ctx.clearRect(0, 0, canvasSize.width, canvasSize.height);

    const linearGardaradientStyle = ctx.createLinearGradient(
      start.x,
      start.y,
      end.x,
      end.y
    );

    linearGardaradientStyle.addColorStop(
      rangeStart * ONE_PERCENT,
      externalRangeColor
    );
    linearGardaradientStyle.addColorStop(
      rangeStart * ONE_PERCENT,
      selectedRangeColor
    );

    linearGardaradientStyle.addColorStop(
      rangeEnd * ONE_PERCENT,
      selectedRangeColor
    );
    linearGardaradientStyle.addColorStop(
      rangeEnd * ONE_PERCENT,
      externalRangeColor
    );
    ctx.fillStyle = linearGardaradientStyle;
    ctx.fill();
  };

  useEffect(() => {
    drawChart();
    fillChart(percentage.min, percentage.max);
  }, [percentage.min, percentage.max]);

  return (
    <PriceChartCanvas
      ref={$canvasRef}
      width={canvasSize.width}
      height={canvasSize.height}
    >
      선택한 날짜 기준 숙소들의 가격 범위를 나타내는 차트입니다.
    </PriceChartCanvas>
  );
};

export default PriceChart;
