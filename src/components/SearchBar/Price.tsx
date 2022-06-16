import React, { Dispatch } from 'react';
import SearchBarSection from '../../UI/SearchBarSection';
import {
  usePriceStateContext,
  usePriceDispatchContext,
} from '../../store/priceStore/PriceContext';
import Container from '../../UI/Container';
import { ModalType } from '../../types/types';

const Price = ({
  setOpenedModal,
}: {
  setOpenedModal: Dispatch<React.SetStateAction<ModalType>>;
}) => {
  const priceState = usePriceStateContext();
  const dispatchPrice = usePriceDispatchContext();

  const priceValue =
    priceState.minPrice !== null || priceState.maxPrice !== null
      ? `${priceState.minPrice?.toLocaleString() || ''}~${
          priceState.maxPrice?.toLocaleString() || ''
        }`
      : undefined;
  return (
    <Container onClick={() => setOpenedModal('PRICE')}>
      <SearchBarSection
        searchBarSectionInfo={[
          { name: '요금', placeholder: '금액대 설정', value: priceValue },
        ]}
        isLast={false}
        initSection={() => dispatchPrice({ minPrice: null, maxPrice: null })}
      />
    </Container>
  );
};

export default Price;
