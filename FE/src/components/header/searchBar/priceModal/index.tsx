import React, { useContext } from 'react';
import Modal from 'react-modal';

import { moneyToWon } from 'utils/utils';
import * as Styled from 'components/header/searchBar/priceModal/PriceModalInfo.style';

import { Context } from 'components/context/ModalContext';
import usePriceModalProvider from './usePriceModalProvider';

function PriceModal() {
  const [coordinateData, lowPrice, highPrice, averagePrice, onCloseModal] = usePriceModalProvider();
  const { isPriceOpen } = useContext(Context);
  return (
    <Modal isOpen={isPriceOpen} style={Styled.customStyles} onRequestClose={onCloseModal} ariaHideApp={false}>
      <Styled.ModalInfo>
        <Styled.Title>가격 범위</Styled.Title>
        <Styled.PriceWrapper>
          <Styled.Price>{moneyToWon(lowPrice as number)}</Styled.Price>
          <Styled.RowLine>-</Styled.RowLine>
          <Styled.Price>{moneyToWon(highPrice as number)}+</Styled.Price>
        </Styled.PriceWrapper>
        <Styled.Average>{`평균 1박 요금은 ${averagePrice} 입니다.`}</Styled.Average>
        <Styled.Graph coordinate={coordinateData} />
      </Styled.ModalInfo>
    </Modal>
  );
}

export default PriceModal;
