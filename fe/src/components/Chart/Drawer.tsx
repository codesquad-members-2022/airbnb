import React, { useEffect, useState } from 'react';

interface Props {
  draw: Draw;
  initialRightValue: number;
}

function Drawer({ draw, initialRightValue = 0 }: Props) {
  // leftValue, rightValue 를 컨텍스트에서 가져와야함.

  const [leftValue] = useState(0);
  const [rightValue] = useState(initialRightValue);

  useEffect(() => {
    // NOTE: offset과 factor가 적용된 이후의 data가 그려짐.
    draw(leftValue, rightValue);
  });

  return <span />;
}

interface Draw {
  (left: number, right: number): void;
}

export default Drawer;
