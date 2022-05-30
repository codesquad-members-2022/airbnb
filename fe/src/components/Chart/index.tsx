import { useRef } from 'react';

import * as S from './style';

const WIDTH = 500;
const HEIGHT = 500;

function Chart() {
  const canvas = useRef<HTMLCanvasElement>(null);
  const drawCanvas = (data, min, max) => {
    console.log('[Draw Canvas]');
  };

  return (
    <S.ChartLayer>
      <S.Canvas ref={canvas} width={WIDTH} height={HEIGHT} />
      <span></span>
    </S.ChartLayer>
  );
}

export default Chart;
