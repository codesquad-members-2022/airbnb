import { useEffect, useState } from 'react';

import styled from 'styled-components';

import { ModalWrap } from 'components/Modals/styled';
import Chart from 'components/Modals/Price/RangeChart';
import RangeSlider from 'components/Modals/Price/RangeSlider';
import LoadingSpinner from 'components/Skeleton/LoadingSpinners';

import { useGetFetch } from 'hooks/useFetch';
import { usePriceState } from 'hooks/usePrice';
import { toLocalString } from 'utils/helper';

const priceInfo = (priceData: Array<number>) => {
  const minPrice = Math.floor(Math.min(...priceData) / 10000) * 10000;
  const maxPrice = Math.ceil(Math.max(...priceData) / 1000) * 1000;
  const avgPrice = Math.floor(
    priceData.reduce((prev: number, curr: number) => prev + curr) / priceData.length,
  );

  return { minPrice, maxPrice, avgPrice };
};

function SetPriceModal() {
  const URL = `/accommodations/prices`;
  const { fetchedData } = useGetFetch(URL);

  return fetchedData ? (
    <PriceModal priceData={fetchedData} />
  ) : (
    <PriceModalWrap>
      <LoadingSpinner size={50} />
    </PriceModalWrap>
  );
}

function PriceModal({ priceData }: { priceData: Array<number> }) {
  const { priceRange } = usePriceState();

  const sortData = priceData.sort((a: number, b: number) => a - b);
  const { minPrice, maxPrice, avgPrice } = priceInfo(sortData);

  const [minSliderValue, setMinSliderValue] = useState<number>(minPrice);
  const [maxSliderValue, setMaxSliderValue] = useState<number>(maxPrice);

  const dataPriceInfo = { min: minPrice, max: maxPrice, avg: avgPrice };
  const initSliderRange = { min: minSliderValue, max: maxSliderValue };
  const setSliderRange = { min: setMinSliderValue, max: setMaxSliderValue };

  const minValue = priceRange.min === 0 ? minSliderValue : priceRange.min;
  const maxValue = priceRange.max === 0 ? maxSliderValue : priceRange.max;

  const currentPriceRange = { min: minValue, max: maxValue };

  useEffect(() => {
    setSliderRange.min(dataPriceInfo.min);
    setSliderRange.max(dataPriceInfo.max);
  }, [priceRange]);

  return (
    <PriceModalWrap>
      <PriceInfo>
        <p className="price_title">가격 범위</p>
        <PriceRange>{`₩${toLocalString(minValue)} - ₩${toLocalString(maxValue)}`}</PriceRange>
        <p className="price_avg">{`평균 1박 요금은 ₩${toLocalString(
          dataPriceInfo.avg,
        )}원 입니다.`}</p>
      </PriceInfo>
      <SliderWrap>
        <Chart
          priceData={priceData}
          dataPriceInfo={dataPriceInfo}
          initSliderRange={initSliderRange}
          currentPriceRange={currentPriceRange}
        />
        <RangeSlider
          dataPriceInfo={dataPriceInfo}
          initSliderRange={initSliderRange}
          setSliderRange={setSliderRange}
        />
      </SliderWrap>
    </PriceModalWrap>
  );
}

const PriceModalWrap = styled(ModalWrap)`
  width: 493px;
  height: 364px;
  right: 200px;
  padding: 52px 64px;
  justify-content: space-around;
  flex-direction: column;
`;

const PriceInfo = styled.div`
  width: 100%;

  .price_title {
    margin-bottom: 16px;
    ${({ theme }) => theme.fontStyles.bold16px}
  }

  .price_avg {
    color: ${({ theme }) => theme.colors.grey3};
    ${({ theme }) => theme.fontStyles.normal14px}
  }
`;

const PriceRange = styled.div`
  margin-bottom: 4px;

  ${({ theme }) => theme.fontStyles.normal18px}
`;

const SliderWrap = styled.div`
  height: 110px;
`;

export default SetPriceModal;
