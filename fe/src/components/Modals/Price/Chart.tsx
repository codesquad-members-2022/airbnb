import { useEffect, useRef } from 'react';
import { ObjType, PriceInfoType, DataInfo } from './priceTypes';

const CANVAS_INFO = {
  WIDTH: 365,
  HEIGHT: 100,
  SECTIONS: 15,
};

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

function Chart({ minPrice, maxPrice, priceData }: PriceInfoType) {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  const draw = () => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const { WIDTH, HEIGHT, SECTIONS } = CANVAS_INFO;
    const dataInfo = { data: priceData, sections: SECTIONS, maxPrice, minPrice };
    const dataRange = getRangeInfo(dataInfo);

    const drawLine = (dataRange: ObjType) => {
      const dataValues = Object.values(dataRange);

      dataValues.forEach((data: number, idx: number) => {
        const sectionWidth = Math.floor(WIDTH / SECTIONS);
        const pointY = Math.floor((data / Math.max(...dataValues)) * HEIGHT);
        const prevPointY =
          idx === 0 ? HEIGHT : HEIGHT - (dataValues[idx - 1] / Math.max(...dataValues)) * HEIGHT;

        const moveCoord = { x: sectionWidth * idx, y: HEIGHT - pointY };
        const controlPoint = {
          x: moveCoord.x - sectionWidth / 2,
          y: prevPointY,
        };

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

    ctx.beginPath();
    ctx.moveTo(0, HEIGHT);
    drawLine(dataRange);
    ctx.lineTo(WIDTH, HEIGHT);

    const gradient = ctx.createLinearGradient(0, HEIGHT, WIDTH, HEIGHT);
    gradient.addColorStop(0, '#E0E0E0');
    gradient.addColorStop(1, 'black');
    ctx.fillStyle = gradient;
    ctx.fill();
  };

  useEffect(() => {
    draw();
  }, []);

  return <canvas ref={canvasRef} width={CANVAS_INFO.WIDTH} height={CANVAS_INFO.HEIGHT} />;
}

export default Chart;
