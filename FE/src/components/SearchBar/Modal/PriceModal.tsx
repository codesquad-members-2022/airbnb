import React, { RefObject, useContext } from 'react';

import RangeSlider from '@components/ChartSlider';
import * as S from '@components/SearchBar/Modal/Modal.style';
import Modal, { MODAL_POSITION } from '@components/common/Modal';
import { PriceContext, PriceContextTypes } from '@context/price/Provider';
import { formatPrice } from '@lib/utils';

interface PriceModalTypes {
  element: HTMLElement;
  modalRef: RefObject<HTMLDivElement>;
}

const PriceModal = ({ element, modalRef }: PriceModalTypes) => {
  const { minPrice, maxPrice } = useContext<PriceContextTypes>(PriceContext);
  const priceContent = `${formatPrice(minPrice)} ~ ${formatPrice(maxPrice)}`;

  return (
    <Modal element={element} position={MODAL_POSITION.CENTER}>
      <S.PriceModal ref={modalRef}>
        <S.Title>가격 범위</S.Title>
        <S.PriceRange>{priceContent}</S.PriceRange>
        <S.AverageDescription>평균 1박 요금은 W165,556입니다.</S.AverageDescription>
        <RangeSlider />
      </S.PriceModal>
    </Modal>
  );
};

export default PriceModal;
