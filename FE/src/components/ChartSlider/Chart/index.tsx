import * as S from '@components/ChartSlider/Chart/Chart.style';
import { CHART_TYPE } from '@components/SearchBar/constants';
import useCanvas from '@lib/hooks/useCanvas';
import { usePriceState } from '@lib/hooks/useContext';

export interface ChartTypes {
  type: string;
  rangeData: number[];
  canvasWidth: number;
  canvasHeight: number;
}

const Chart = ({ type, rangeData, canvasWidth, canvasHeight }: ChartTypes) => {

  const { minPrice, maxPrice, defaultMaxPrice, defaultMinPrice } = usePriceState();

  const getCoordinates = () => {
    const divider = type === CHART_TYPE.LINE ? rangeData.length + 1 : rangeData.length;
    const intervalX = canvasWidth / divider;
    const max = Math.max(...rangeData);

    const coordinates: [x: number, y: number][] = rangeData.map((count, i) => [
      (i + 1) * intervalX,
      canvasHeight * (1 - count / max),
    ]);

    return coordinates;
  };

  const coordinates = getCoordinates();

  const drawLineChart = (ctx: CanvasRenderingContext2D) => {
    if (ctx) {
      ctx.beginPath();
      ctx.moveTo(0, canvasHeight);
      for (let i = 0; i < coordinates.length - 1; i++) {
        const [cpx, cpy] = coordinates[i];
        const [x, y] = coordinates[i + 1];
        ctx.quadraticCurveTo(cpx, cpy, (cpx + x) / 2, (cpy + y) / 2);
      }
      ctx.quadraticCurveTo(
        coordinates[coordinates.length - 1][0],
        coordinates[coordinates.length - 1][1],
        canvasWidth,
        canvasHeight,
      );
      ctx.stroke();
      ctx.fillStyle = '#333';
      ctx.fill();
      ctx.stroke();
    }
  };

  const drawBarChart = (ctx: CanvasRenderingContext2D) => {
    const chartWidth = canvasWidth * 0.9;
    const separationWidth = canvasWidth * 0.1;
    const barWidth = chartWidth / coordinates.length;
    const separation = separationWidth / coordinates.length ** 2;

    if (ctx) {
      ctx.moveTo(0, canvasHeight);
      ctx.lineWidth = 2;
      ctx.strokeStyle = '#333';
      ctx.lineTo(canvasWidth, canvasHeight);
      ctx.stroke();

      const initialX = coordinates[0][0];
      coordinates.forEach(([x, y], i) => {
        const coordX = i ? x - initialX + separation * i : 0;
        ctx.rect(coordX, y, barWidth, canvasHeight - y);
      });
      ctx.fillStyle = '#333';
      ctx.fill();
    }
  };

  const drawUnselectedArea = (ctx: CanvasRenderingContext2D) => {
    const minWidth = ((minPrice - defaultMinPrice) / defaultMaxPrice) * canvasWidth;
    const maxWidth = ((defaultMaxPrice - maxPrice - defaultMinPrice) / defaultMaxPrice) * canvasWidth;
    const maxPosX = canvasWidth - maxWidth;

    if (ctx) {
      ctx.globalCompositeOperation = 'source-atop';
      ctx.fillStyle = '#e5e5e5';
      ctx.fillRect(0, 0, minWidth, canvasHeight);
      ctx.fillRect(maxPosX, 0, maxWidth, canvasHeight);
    }
  }

  const animate = (ctx: CanvasRenderingContext2D) => {
    type === CHART_TYPE.LINE ? drawLineChart(ctx) : drawBarChart(ctx);
    drawUnselectedArea(ctx);
  };

  const canvasRef = useCanvas({ canvasWidth, canvasHeight, animate });

  return <S.Canvas ref={canvasRef} />;
};

export default Chart;
