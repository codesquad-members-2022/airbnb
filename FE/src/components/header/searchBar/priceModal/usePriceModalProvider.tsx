import React, { useContext, useEffect, useState } from 'react';

import priceData from 'mock/priceData';
import { Context } from 'components/context/ModalContext';
import { moneyToWon, recursion } from 'utils/utils';

interface ICoordinate {
  xRange: number;
  yCoordinate: number[];
}

function usePriceModalProvider() {
  const initCoordinate: ICoordinate = { xRange: 0, yCoordinate: [] };
  const [coordinateData, setCoordinateData] = useState(initCoordinate);

  const {
    setIsPriceOpen,
    leftBtnValue = 0,
    rightBtnValue = 100,
    lowPrice,
    setLowPrice,
    highPrice,
    setHighPrice,
  } = useContext(Context);

  const initialLowPrice = priceData[0];
  const initialHighPrice = priceData[priceData.length - 1];
  useEffect(() => {
    if (!setLowPrice || !setHighPrice) {
      return;
    }

    setLowPrice(initialLowPrice + (leftBtnValue * (initialHighPrice - initialLowPrice)) / 100);
    setHighPrice(initialLowPrice + (rightBtnValue * (initialHighPrice - initialLowPrice)) / 100);
  }, [leftBtnValue, rightBtnValue]);

  const averagePrice = moneyToWon(
    priceData.reduce((acc: number, el: number) => {
      return acc + el;
    }, 0) / priceData.length,
  );

  function makeYCoordinate() {
    const singleX: number = (initialHighPrice - initialLowPrice) / 50;
    const yArr: number[] = [];
    const countArr: number[] = [];
    let count = 0;
    let singlePrice = initialLowPrice + singleX;

    priceData.forEach((price, idx) => {
      if (price <= singlePrice) {
        count += 1;
        if (idx === priceData.length - 1) {
          countArr.push(count);
        }
      } else {
        countArr.push(count);
        count = 0;
        count += 1;
        const tempSingle = singlePrice;
        singlePrice = recursion(singlePrice, price, singleX);
        const zeroCount = (singlePrice - tempSingle) / singleX;
        for (let i = 0; i < zeroCount - 1; i += 1) {
          countArr.push(0);
        }
      }
    });

    const highCount = Math.max(...countArr);

    countArr.forEach((count) => {
      const priceRatio: number = 114 / highCount;
      yArr.push(priceRatio * count);
    });
    return yArr;
  }
  useEffect(() => {
    setCoordinateData({
      xRange: 7.3,
      yCoordinate: makeYCoordinate(),
    });
  }, []);

  const onCloseModal = () => {
    if (setIsPriceOpen) {
      setIsPriceOpen(false);
    }
  };

  return [coordinateData, lowPrice, highPrice, averagePrice, onCloseModal];
}

export default usePriceModalProvider;
