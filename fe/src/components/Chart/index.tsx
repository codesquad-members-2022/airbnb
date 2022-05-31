import { useEffect, useRef, useState } from 'react';

import Drawer from './Drawer';
import * as S from './style';

const WIDTH = 500;
const HEIGHT = 500;
const PRIMARY = '#333';
const SECONDARY = '#e5e5e5';

function Chart() {
  const canvas = useRef<HTMLCanvasElement>(null);
  const [ctx, setCtx] = useState<CanvasRenderingContext2D | null>(null);
  const options: Options = {
    innerFillStyle: PRIMARY,
    outerFillStyle: SECONDARY,
  };

  const createDrawFunc: CreateDrawFunc = (context, opts) => (data, min, max, canvasHeight) => {
    console.log('[Draw Chart]');
    bzCurve(context, data, min, max, canvasHeight, opts);
  };

  useEffect(() => {
    if (!canvas.current) {
      return;
    }

    // 여기서 width, height 설정 해줘도 될듯?
    // canvas.width = ...
    // canvas.height = ...
    setCtx(canvas.current.getContext('2d'));
  }, []);

  return (
    <S.ChartLayer>
      <S.Canvas ref={canvas} width={WIDTH} height={HEIGHT} />
      {ctx && <Drawer draw={createDrawFunc(ctx, options)} />}
    </S.ChartLayer>
  );
}

/* util */

const gradient = (a: Point, b: Point): number => {
  if (b.x === a.x) {
    console.error('Gradient error: cannot divide by zero');
    return 0;
  }

  return (b.y - a.y) / (b.x - a.x);
};

const bzCurve: BzCurve = (
  ctx,
  points,
  min,
  max,
  CANVAS_HEIGHT,
  { f = 0.3, t = 0.6, innerFillStyle = '#000', outerFillStyle = '#bbb', strokeStyle = '#fff' },
) => {
  if (points.length <= 1) {
    return;
  }

  ctx.strokeStyle = 'white';
  ctx.beginPath();
  ctx.moveTo(points[0].x, CANVAS_HEIGHT);
  ctx.lineTo(points[0].x, points[0].y);

  let i = 1;
  let preP = points[0];
  let nexP: { x: number; y: number };
  let m = 0;
  let dx1 = 0;
  let dx2: number;
  let dy1 = 0;
  let dy2: number;

  const drawBezierCurve = (idx: number) => {
    const curP = points[idx];
    nexP = points[idx + 1];

    if (nexP) {
      m = gradient(preP, nexP);
      dx2 = (nexP.x - curP.x) * -f;
      dy2 = dx2 * m * t;
    } else {
      dx2 = 0;
      dy2 = 0;
    }

    ctx.bezierCurveTo(preP.x - dx1, preP.y - dy1, curP.x + dx2, curP.y + dy2, curP.x, curP.y);

    dx1 = dx2;
    dy1 = dy2;
    preP = curP;
  };

  const fillToCurrent = (idx: number) => {
    ctx.lineTo(points[idx].x, CANVAS_HEIGHT);
    ctx.fill();
    ctx.closePath();
    ctx.beginPath();
    ctx.moveTo(points[idx].x, CANVAS_HEIGHT);
    ctx.lineTo(points[idx].x, points[idx].y);
    ctx.strokeStyle = strokeStyle;
  };

  for (i = 1; points[i].x <= min; i += 1) {
    drawBezierCurve(i);
  }

  ctx.stroke();
  ctx.strokeStyle = outerFillStyle;
  ctx.fillStyle = outerFillStyle;
  fillToCurrent(i - 1);

  for (; points[i]?.x <= max; i += 1) {
    drawBezierCurve(i);
  }

  ctx.stroke();
  ctx.strokeStyle = outerFillStyle;
  ctx.fillStyle = innerFillStyle;
  fillToCurrent(i - 1);

  while (i < points.length) {
    drawBezierCurve(i);
    i += 1;
  }
  ctx.stroke();

  ctx.strokeStyle = outerFillStyle;
  ctx.fillStyle = outerFillStyle;
  ctx.lineTo(points[i - 1].x, CANVAS_HEIGHT);
  // ctx.stroke();
  ctx.fill();
  ctx.closePath();
};

interface Point {
  x: number;
  y: number;
}

interface BzCurve {
  (
    ctx: CanvasRenderingContext2D,
    points: Point[],
    min: number,
    max: number,
    CANVAS_HEIGHT: number,
    options: Options,
  ): void;
}

interface Options {
  f?: number;
  t?: number;
  innerFillStyle?: string;
  outerFillStyle?: string;
  strokeStyle?: string;
}

interface CreateDrawFunc {
  (context: CanvasRenderingContext2D, options: Options): (
    data: Point[],
    min: number,
    max: number,
    CANVAS_HEIGHT: number,
  ) => void;
}

export default Chart;
