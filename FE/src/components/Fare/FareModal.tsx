import React, { useContext } from 'react';
import ModalPortal from 'common/portal';
import { Backdrop, Modal, Title, PriceRange, Average } from './FareModal.style';
import { FareProps } from './FareModal.types';
import FareSlider from './FareSlider';
import { ChartData } from './Mok';
import { FareContext } from '../../contexts/farecontext/farecontext';
import Chart from './FareChart';

export function FareModal({ show, modalShowHandler }: FareProps): JSX.Element {
  const value = useContext(FareContext);
  const closeModalHandler = (): void => {
    modalShowHandler();
  };
  if (show) {
    return (
      <ModalPortal>
        <>
          <Modal>
            <Title>가격 범위</Title>
            <PriceRange>
              ₩{value.Slidevalue.left} - ₩{value.Slidevalue.right}
            </PriceRange>
            <Average>평균 1박 요금은 ₩{ChartData.averagePrice} 입니다.</Average>
            <Chart />
            <FareSlider />
          </Modal>
          <Backdrop onClick={closeModalHandler} />
        </>
      </ModalPortal>
    );
  }

  return <ModalPortal />;
}
