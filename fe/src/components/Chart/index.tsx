import { useEffect, useRef, useState } from 'react';

import bzCurve from './bzCurve';
import Drawer from './Drawer';
import * as S from './style';

const PRIMARY = '#333';
const SECONDARY = '#e5e5e5';
const options: Options = {
  innerFillStyle: PRIMARY,
  outerFillStyle: SECONDARY,
};

interface Props {
  chartData: Point[];
  width: number;
  height: number;
}

function Chart({ chartData, width = 0, height = 0 }: Props) {
  const canvas = useRef<HTMLCanvasElement>(null);
  const [ctx, setCtx] = useState<CanvasRenderingContext2D | null>(null);

  // TODO: data, canvasHeight도 옮기기
  const createDrawFunc: CreateDrawFunc = (context, data, opts) => (min, max, canvasHeight) => {
    bzCurve(context, data, min, max, canvasHeight, opts);
  };

  useEffect(() => {
    if (!canvas.current) {
      return;
    }

    // NOTE: width, height 설정 여기서.
    setCtx(canvas.current.getContext('2d'));
  }, []);

  return (
    <S.ChartLayer>
      <S.Canvas ref={canvas} width={width} height={height} />
      {ctx && <Drawer draw={createDrawFunc(ctx, chartData, options)} initialRightValue={width} />}
    </S.ChartLayer>
  );
}

interface Point {
  x: number;
  y: number;
}

interface Options {
  f?: number;
  t?: number;
  innerFillStyle?: string;
  outerFillStyle?: string;
  strokeStyle?: string;
}

interface CreateDrawFunc {
  (context: CanvasRenderingContext2D, data: Point[], opts: Options): (
    min: number,
    max: number,
    CANVAS_HEIGHT: number,
  ) => void;
}

export default Chart;
