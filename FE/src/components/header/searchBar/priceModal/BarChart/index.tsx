import React, { useContext } from 'react';
import { Context } from 'components/context/ModalContext';

function BarChart({ coordinate }) {
  const PriceContext = useContext(Context);

  return (
    <svg width="366" height="114" viewBox="0 0 366 114" xmlns="http://www.w3.org/2000/svg">
      {coordinate.yCoordinate.map((yCoor: number, idx: number) => {
        const { leftBtnValue, rightBtnValue } = PriceContext;
        const isValidRange = (leftBtnValue as number) <= idx * 2 && (rightBtnValue as number) >= idx * 2;

        return (
          <path
            // eslint-disable-next-line react/no-array-index-key
            key={yCoor + idx} // 데이터에서 id값을 받아서 수정
            d={`M ${idx * coordinate.xRange} 114 H${idx * coordinate.xRange + 6} V${114 - yCoor} H${
              idx * coordinate.xRange
            } Z`}
            fill={isValidRange ? 'black' : 'grey'}
          />
        );
      })}
    </svg>
  );
}

export default BarChart;
