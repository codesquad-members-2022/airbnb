import React, { useContext, useState } from 'react';
import { FARE_INFO } from 'constant';
import { InputText } from 'components/InputText';
import { FareContainer, FareClearBtn } from './Fare.styled';
import { FareModal } from './FareModal';
import { FareContext } from '../../contexts/farecontext/farecontext';

export function Fare(): JSX.Element {
  const { Slidevalue, dispatch } = useContext(FareContext);
  const [show, setShow] = useState<boolean>(false);
  const modalShowHandler = (): void => {
    setShow(prev => !prev);
  };

  const clearFareInput = (): void => {
    modalShowHandler();
    dispatch({ type: 'init' });
  };
  const info = { ...FARE_INFO, placeHolder: Slidevalue.placeHolder };
  return (
    <>
      <FareContainer onClick={modalShowHandler}>
        <InputText info={info} value={Slidevalue.placeHolder} />
        {Slidevalue.isSet && (
          <FareClearBtn
            isSet={Slidevalue.isSet}
            type="button"
            onClick={clearFareInput}
          >
            <img src="./assets/images/x-circle.svg" alt="요금 초기화 버튼" />
          </FareClearBtn>
        )}
      </FareContainer>
      <FareModal show={show} modalShowHandler={modalShowHandler} />
    </>
  );
}
