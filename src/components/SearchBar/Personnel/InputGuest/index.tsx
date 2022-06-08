import React from "react";

import { InputGuestType } from "_types/inputGuest";

import { useInputGuestState, useInputGuestDispatch } from "@contexts/InputGuestProvider";

import * as S from "./style";

const InputGuest = () => {
  const { adult, child, baby } = useInputGuestState();
  const { onIncreaseGuest, onDecreaseGuest } = useInputGuestDispatch();

  const TOTAL_GUEST = 16;
  const isOverMaximumGuest = adult + child >= TOTAL_GUEST;
  const isAloneChildOrBaby = adult <= 1 && (child >= 1 || baby >= 1);

  const handleIncreaseGuest = (guestType: InputGuestType) => {
    if (isOverMaximumGuest) return;
    if (adult <= 0 && guestType !== "adult") {
      onIncreaseGuest("adult");
    }
    onIncreaseGuest(guestType);
  };

  const handleDecreaseGuest = (guestType: InputGuestType, state: number) => {
    if (state <= 0) return;
    if (isAloneChildOrBaby && guestType === "adult") return;
    onDecreaseGuest(guestType);
  };

  return (
    <S.InputGuest>
      <InputGuestBox
        guestType="adult"
        label="성인"
        description="만 13세 이상"
        state={adult}
        handleIncrease={handleIncreaseGuest}
        handleDecrease={handleDecreaseGuest}
        isOverMaximumGuest={isOverMaximumGuest}
        isAloneChildOrBaby={isAloneChildOrBaby}
      />
      <InputGuestBox
        guestType="child"
        label="어린이"
        description="만 2~12세"
        state={child}
        handleIncrease={handleIncreaseGuest}
        handleDecrease={handleDecreaseGuest}
        isOverMaximumGuest={isOverMaximumGuest}
      />
      <InputGuestBox
        guestType="baby"
        label="유아"
        description="만 2세 미만"
        state={baby}
        handleIncrease={handleIncreaseGuest}
        handleDecrease={handleDecreaseGuest}
        isOverMaximumGuest={isOverMaximumGuest}
      />
    </S.InputGuest>
  );
};

type InputGuestBoxProps = {
  guestType: InputGuestType;
  label: string;
  description: string;
  state: number;
  handleIncrease: (guestType: InputGuestType) => void;
  handleDecrease: (guestType: InputGuestType, state: number) => void;
  isOverMaximumGuest: boolean;
  isAloneChildOrBaby?: boolean;
};

const InputGuestBox = ({
  guestType,
  label,
  description,
  state,
  handleIncrease,
  handleDecrease,
  isOverMaximumGuest,
  isAloneChildOrBaby,
}: InputGuestBoxProps) => {
  const isZero = state <= 0;
  const blockStyle = { opacity: "0.2", pointerEvents: "none" };

  return (
    <S.InputGuestBox>
      <S.GuestLabel>
        <h4>{label}</h4>
        <span>{description}</span>
      </S.GuestLabel>
      <S.GuestController>
        <S.MinusButton
          onClick={() => handleDecrease(guestType, state)}
          style={isAloneChildOrBaby || isZero ? { ...blockStyle } : null}
        />
        <span>{state}</span>
        <S.PlusButton onClick={() => handleIncrease(guestType)} style={isOverMaximumGuest ? { ...blockStyle } : null} />
      </S.GuestController>
    </S.InputGuestBox>
  );
};

export default InputGuest;
