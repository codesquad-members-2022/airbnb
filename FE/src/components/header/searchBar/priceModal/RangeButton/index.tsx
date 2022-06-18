import React, { useContext } from 'react';

import { Context } from 'components/context/ModalContext';
import * as Styled from 'components/header/searchBar/priceModal/RangeButton/RangeButton.style';

function RangeButton() {
  const { rightBtnValue = 100, leftBtnValue = 0, setLeftBtnValue, setRightBtnValue } = useContext(Context);
  const onLeftBtnUp = (e: { target: { value: any } }) => {
    if (setLeftBtnValue) {
      setLeftBtnValue(e.target.value);
    }
  };
  const onRightBtnUp = (e: { target: { value: any } }) => {
    if (setRightBtnValue) {
      setRightBtnValue(e.target.value);
    }
  };

  return (
    <Styled.ButtonWrapper>
      <Styled.Input
        width={`${rightBtnValue - 1}%`}
        position="left"
        type="range"
        id="cowbell"
        name="cowbell"
        min="0"
        max={`${rightBtnValue - 1}`}
        defaultValue={`${leftBtnValue}`}
        step="any"
        onChange={onLeftBtnUp}
      />
      <Styled.Input
        width={`${99 - leftBtnValue}%`}
        position="right"
        type="range"
        id="cowbell"
        name="cowbell"
        min={`${leftBtnValue + 1}`}
        max="100"
        defaultValue={`${rightBtnValue}`}
        step="any"
        onChange={onRightBtnUp}
      />
    </Styled.ButtonWrapper>
  );
}

export default RangeButton;
