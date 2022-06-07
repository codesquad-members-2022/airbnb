import React, { useRef, useState } from 'react';

import PriceModal from '@components/SearchBar/Modal/PriceModal';
import * as S from '@components/SearchBar/SearchBar.style';
import { AREA_TYPE, NO_CONTENT, SEARCH_BAR_SIZE } from '@components/SearchBar/constants';
import Icon, { ICON_NAME, ICON_SIZE } from '@components/common/Icon';
import { PriceProvider } from '@context/price/Provider';
import { defaultPrice } from '@data';
import WithProvider from '@hoc/WithProvider';
import { usePriceState } from '@lib/hooks/useContext';
import useModal from '@lib/hooks/useModal';
import { formatPrice } from '@lib/utils';

export interface PriceAreaTypes {
  size: string;
}

const PriceArea = ({ size }: PriceAreaTypes) => {
  const [isPriceModalOpen, setIsPriceModalOpen] = useState(false);
  const [containerRef, element] = useModal();
  const modalRef = useRef<HTMLDivElement>(null);

  const { minPrice, maxPrice } = usePriceState();
  const isPriceExist = minPrice !== defaultPrice.min || maxPrice !== defaultPrice.max;

  const priceContent = isPriceExist
    ? `${formatPrice(minPrice)} ~ ${formatPrice(maxPrice)}`
    : NO_CONTENT[AREA_TYPE.PRICE];

  const toggleIsPriceModalOpen = () => setIsPriceModalOpen(() => true);

  return (
    <>
      <S.PriceArea
        ref={containerRef as React.RefObject<HTMLDivElement>}
        onClick={toggleIsPriceModalOpen}
      >
        {size === SEARCH_BAR_SIZE.LARGE ? (
          <>
            <S.ContentContainer>
              <S.Label>요금</S.Label>
              <S.Content isContentExist={isPriceExist}>{priceContent}</S.Content>
            </S.ContentContainer>
            {isPriceExist && (
              <S.CloseButton>
                <Icon iconName={ICON_NAME.CLOSE_BTN} iconSize={ICON_SIZE.LARGE} />
              </S.CloseButton>
            )}
          </>
        ) : (
          <S.Content isContentExist={isPriceExist}>{priceContent}</S.Content>
        )}
      </S.PriceArea>
      {isPriceModalOpen && <PriceModal element={element} modalRef={modalRef} />}
    </>
  );
};

export default WithProvider({
  Component: PriceArea,
  Provider: PriceProvider,
});
