import { useEffect, useRef } from 'react';
import { ObjType, PriceInfoType, DataInfo } from './types';

const getRangeInfo = ({ data, sections, maxPrice, minPrice }: DataInfo) => {
  const 고정범위 = Math.floor((maxPrice - minPrice) / sections);

  const dataRangeObj: ObjType = {};
  for (let range = minPrice; range < maxPrice; range += 고정범위) {
    dataRangeObj[range] = 0;
  }

  // 최대값이 들어갈 수 있게...
  dataRangeObj[maxPrice] = 0;

  Object.keys(dataRangeObj).forEach((objData, idx) => {
    const 이전범위 = idx !== 0 ? Number(Object.keys(dataRangeObj)[idx - 1]) : 0;
    const 해당하는값배열 = data.filter((el) => el <= Number(objData) && 이전범위 < el);
    dataRangeObj[objData] = 해당하는값배열.length;
  });

  return dataRangeObj;
};

const drawLine = (
  dataRange: ObjType,
  canvasInfo: { [key: string]: number },
  ctx: CanvasRenderingContext2D,
) => {
  const { WIDTH, HEIGHT, SECTIONS } = canvasInfo;
  const dataValues = Object.values(dataRange);

  dataValues.forEach((data: number, idx: number) => {
    const sectionWidth = Math.floor(WIDTH / SECTIONS);
    const pointY = Math.floor((data / Math.max(...dataValues)) * HEIGHT);
    const prevPointY =
      idx === 0 ? HEIGHT : HEIGHT - (dataValues[idx - 1] / Math.max(...dataValues)) * HEIGHT;

    const moveCoord = { x: sectionWidth * idx, y: HEIGHT - pointY };
    const controlPoint = { x: moveCoord.x - sectionWidth / 2, y: prevPointY };

    ctx.bezierCurveTo(
      controlPoint.x,
      controlPoint.y,
      controlPoint.x,
      moveCoord.y,
      moveCoord.x,
      moveCoord.y,
    );
  });
};

const fillGraph = (
  gradient: CanvasGradient,
  initSliderRange: { [key: string]: number },
  currentPriceRange: { [key: string]: number },
  dataPriceInfo: { [key: string]: number },
) => {
  const fillPercent = (value: number) => {
    const percent =
      Math.floor(((value - dataPriceInfo.min) / (dataPriceInfo.max - dataPriceInfo.min)) * 100) *
      0.01;
    return percent;
  };

  const minVal = currentPriceRange.min === 0 ? initSliderRange.min : currentPriceRange.min;
  const maxVal = currentPriceRange.max === 0 ? initSliderRange.max : currentPriceRange.max;

  const color = { focus: '#1b1b1b', nonFocus: '#E0E0E0' };

  gradient.addColorStop(fillPercent(minVal), color.nonFocus);
  gradient.addColorStop(fillPercent(minVal), color.focus);

  gradient.addColorStop(fillPercent(maxVal), color.focus);
  gradient.addColorStop(fillPercent(maxVal), color.nonFocus);
};

function Chart({ initSliderRange, priceData, dataPriceInfo, currentPriceRange }: PriceInfoType) {
  const CANVAS_INFO = { WIDTH: 365, HEIGHT: 100, SECTIONS: 15 };

  const canvasRef = useRef<HTMLCanvasElement>(null);

  const draw = () => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const { WIDTH, HEIGHT, SECTIONS } = CANVAS_INFO;

    // 해상도 올리기
    const dpr = window.devicePixelRatio;
    canvasRef.current.width = (WIDTH * dpr) / dpr;
    canvasRef.current.height = (HEIGHT * dpr) / dpr;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const dataInfo = {
      data: priceData,
      sections: SECTIONS,
      maxPrice: dataPriceInfo.max,
      minPrice: dataPriceInfo.min,
    };
    const dataRange = getRangeInfo(dataInfo);

    ctx.beginPath();
    ctx.moveTo(0, HEIGHT);
    drawLine(dataRange, CANVAS_INFO, ctx);
    ctx.lineTo(WIDTH, HEIGHT);

    const gradient = ctx.createLinearGradient(0, HEIGHT, WIDTH, HEIGHT);
    fillGraph(gradient, initSliderRange, currentPriceRange, dataPriceInfo);
    ctx.fillStyle = gradient;
    ctx.fill();
  };

  useEffect(() => {
    draw();
  }, [initSliderRange, currentPriceRange]);

  return <canvas ref={canvasRef} width={CANVAS_INFO.WIDTH} height={CANVAS_INFO.HEIGHT} />;
}

export default Chart;
