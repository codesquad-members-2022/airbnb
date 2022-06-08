import { PRICE_CHART_WIDTH } from "Helpers/constant";
import { getRandomNumber } from "Helpers/utils";
import { PriceChartSVG } from "./PriceChart.styled";

const CONTROL_POINT_COUNT = 10;
const MIN_ACCOMMODATIONS_COUNT = 0;
const MAX_ACCOMMODATIONS_COUNT = 100;

interface PriceChartType {
  priceChartStyle?: string;
  minRatio: number;
  maxRatio: number;
}

export default function PriceChart({ priceChartStyle, minRatio, maxRatio }: PriceChartType) {
  const minX = PRICE_CHART_WIDTH * minRatio;
  const maxX = PRICE_CHART_WIDTH * maxRatio;

  return (
    <PriceChartSVG priceChartStyle={priceChartStyle}>
      <mask id="mask">
        <rect x="0" y="0" width={PRICE_CHART_WIDTH} height="300" fill="grey" />
        <rect x={minX} y="0" width={PRICE_CHART_WIDTH} height="300" fill="white" />
        <rect x={maxX} y="0" width={PRICE_CHART_WIDTH} height="300" fill="grey" />
      </mask>
      <path
        mask="url(#mask)"
        d={bezier_coordinates}
        stroke="blue"
        fill="#bdbdbd"
        strokeWidth="1"
        strokeLinecap="round"
      />
    </PriceChartSVG>
  );
}

const points = new Array(CONTROL_POINT_COUNT + 1).fill(1).map((_, idx) => {
  const xPos = (PRICE_CHART_WIDTH / CONTROL_POINT_COUNT) * idx;
  const yPos = getRandomNumber(MIN_ACCOMMODATIONS_COUNT, MAX_ACCOMMODATIONS_COUNT);

  if (idx === 0 || idx === CONTROL_POINT_COUNT) {
    return [xPos, 0];
  }

  return [xPos, yPos];
});

const bezier_coordinates = points.reduce((acc, cur, i) => {
  if (!i) {
    return `M ${cur[0]},${cur[1]}`;
  }

  const prev_ = points[i - 1];
  return (
    acc +
    `\nC ${prev_[0] + Math.abs(prev_[0] - cur[0]) / 2},${prev_[1]} ${
      prev_[0] + Math.abs(prev_[0] - cur[0]) / 2
    },${cur[1]} ${cur[0]},${cur[1]}`
  );
}, "");
