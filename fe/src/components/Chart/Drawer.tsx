import React, { useEffect, useState } from 'react';

import { useAccommodation } from '@/contexts/Accommodation';

interface Props {
  draw: Draw;
  initialRightValue: number;
}

function Drawer({ draw, initialRightValue = 0 }: Props) {
  // min, max, CANVAS_HEIGHT를 컨텍스트에서 가져와야함.
  // innerFillStyle, outerFillStyle, strokeStyle은 상수 or 변수로
  // f와 t값은 기본값으로 혹은 t만 1로.
  // 정규화된 데이터는 data[i].x, data[i].y로 접근할 수 있어야함.
  const { chartData, maxCount } = useAccommodation();
  const [leftValue] = useState(0);
  const [rightValue] = useState(initialRightValue);

  useEffect(() => {
    // 데이터, min, max, f, t, canvas_height
    // NOTE: offset과 factor가 적용된 이후의 data가 그려짐.
    console.log(chartData);
    draw(leftValue, rightValue, maxCount);
  });

  return <span />;
}

interface Draw {
  (left: number, right: number, CANVAS_HEIGHT: number): void;
}

export default Drawer;
