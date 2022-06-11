import { useRef } from 'react';

import PriceModal from '@components/SearchBar/Modal/PriceModal';
import * as S from '@components/SearchBar/SearchBar.style';
import { AREA_TYPE, NO_CONTENT, SEARCH_BAR_SIZE } from '@components/SearchBar/constants';
import Icon, { ICON_NAME, ICON_SIZE } from '@components/common/Icon';
import { PriceProvider } from '@context/price/Provider';
import WithProvider from '@hoc/WithProvider';
import { usePriceState } from '@lib/hooks/useContext';
import useModal from '@lib/hooks/useModal';
import { formatPrice } from '@lib/utils';

export interface AreaPropsTypes {
  size?: string;
}

const PriceArea = ({ size }: AreaPropsTypes) => {
  const modalRef = useRef<HTMLDivElement>(null);
  const [isPriceModalOpen, setIsPriceModalOpen] = useModal({ modalRef });

  const { minPrice, maxPrice, defaultMinPrice, defaultMaxPrice, setMinPrice, setMaxPrice } =
    usePriceState();
  const isPriceExist = minPrice !== defaultMinPrice || maxPrice !== defaultMaxPrice;

  const priceContent = isPriceExist
    ? `${formatPrice(minPrice)} ~ ${formatPrice(maxPrice)}`
    : NO_CONTENT[AREA_TYPE.PRICE];

  const openPriceModal = () => setIsPriceModalOpen(true);

  const setDefaultPrice = () => {
    setMinPrice(defaultMinPrice);
    setMaxPrice(defaultMaxPrice);
  };

  return (
    <>
      <S.PriceArea onClick={openPriceModal}>
        {size === SEARCH_BAR_SIZE.LARGE ? (
          <>
            <S.ContentContainer>
              <S.Label>요금</S.Label>
              <S.Content isContentExist={isPriceExist}>{priceContent}</S.Content>
            </S.ContentContainer>
            {isPriceExist && (
              <S.CloseButton onClick={setDefaultPrice}>
                <Icon iconName={ICON_NAME.CLOSE_BTN} iconSize={ICON_SIZE.LARGE} />
              </S.CloseButton>
            )}
          </>
        ) : (
          <S.Content isContentExist={isPriceExist}>{priceContent}</S.Content>
        )}
      </S.PriceArea>
      {isPriceModalOpen && <PriceModal modalRef={modalRef} />}
    </>
  );
};

export default WithProvider({
  Component: PriceArea,
  Provider: PriceProvider,
});
