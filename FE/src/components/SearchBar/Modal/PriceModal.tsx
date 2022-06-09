import { RefObject } from 'react';

import RangeSlider from '@components/ChartSlider';
import * as S from '@components/SearchBar/Modal/Modal.style';
import Modal, { MODAL_POSITION } from '@components/common/Modal';
import { usePriceState } from '@lib/hooks/useContext';
import { formatPrice } from '@lib/utils';

interface PriceModalPropsTypes {
  modalRef: RefObject<HTMLDivElement>;
}

const RANGE_INTERVAL = 10000;

const PriceModal = ({ modalRef }: PriceModalPropsTypes) => {
  const { minPrice, maxPrice, priceRange, defaultMinPrice } = usePriceState();
  const priceContent = `${formatPrice(minPrice)} ~ ${formatPrice(maxPrice)}`;

  const getAveragePrice = () => {
    let minIndex = Math.floor((minPrice - defaultMinPrice) / RANGE_INTERVAL);
    const maxIndex = Math.floor((maxPrice - defaultMinPrice) / RANGE_INTERVAL);

    const targetPriceRange = priceRange.slice(minIndex, maxIndex + 1);
    const countSum = targetPriceRange.reduce((total, price) => total + price, 0);

    const weightedAveragePrice = targetPriceRange.reduce((total, priceCount) => {
      return total + (RANGE_INTERVAL * minIndex++ + 5000) * (priceCount / countSum);
    }, 0);

    return Math.round(weightedAveragePrice);
  };

  return (
    <Modal position={MODAL_POSITION.CENTER}>
      <S.PriceModal ref={modalRef}>
        <S.Title>가격 범위</S.Title>
        <S.PriceRange>{priceContent}</S.PriceRange>
        <S.AverageDescription>
          평균 1박 요금은 {formatPrice(getAveragePrice())}입니다.
        </S.AverageDescription>
        <RangeSlider />
      </S.PriceModal>
    </Modal>
  );
};

export default PriceModal;
