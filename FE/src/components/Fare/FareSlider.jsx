import React, { useRef, useContext } from 'react';
import { FareContext } from '../../contexts/farecontext/farecontext';
import { SlideInput } from './FareSlider.style';

export default function FareSlider() {
  const leftInput = useRef(null);
  const rightInput = useRef(null);
  const Value = useContext(FareContext);
  const setLeftInputValue = () => {
    const LeftInput = leftInput.current;
    const RightInput = rightInput.current;

    LeftInput.value = Math.min(LeftInput.value, RightInput.value);
    if (LeftInput.value === RightInput.value) {
      LeftInput.value -= 10000;
    }
    Value.dispatch({ type: 'left', value: +LeftInput.value });
  };

  const setRightInputValue = () => {
    const LeftInput = leftInput.current;
    const RightInput = rightInput.current;

    RightInput.value = Math.max(LeftInput.value, RightInput.value) + 10000;
    Value.dispatch({ type: 'right', value: +RightInput.value });
  };

  return (
    <div>
      <SlideInput
        onInput={setLeftInputValue}
        ref={leftInput}
        type="range"
        min="0"
        max="100000"
        step="10000"
        defaultValue={Value.Slidevalue.left}
      />
      <SlideInput
        ref={rightInput}
        onInput={setRightInputValue}
        type="range"
        min="0"
        max="100000"
        step="10000"
        defaultValue={Value.Slidevalue.right}
      />
    </div>
  );
}
