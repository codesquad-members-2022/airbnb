import React from "react";

import * as S from "./style";

const InputGuest = () => {
  return (
    <S.InputGuest>
      <InputGuestBox label="성인" description="만 13세 이상" state={100} dispatch={""} />
      <InputGuestBox label="어린이" description="만 2~12세" state={100} />
      <InputGuestBox label="유아" description="만 2세 미만" state={100} />
    </S.InputGuest>
  );
};

type InputGuestBoxProps = {
  label: string;
  description: string;
  state: number;
  dispatch?: any;
};

const InputGuestBox = ({ label, description, state, dispatch }: InputGuestBoxProps) => {
  return (
    <S.InputGuestBox>
      <S.GuestLabel>
        <h4>{label}</h4>
        <span>{description}</span>
      </S.GuestLabel>
      <S.GuestController>
        <S.MinusButton
          onClick={() => {
            ("");
          }}
        />
        <span>{state}</span>
        <S.PlusButton
          onClick={() => {
            ("");
          }}
        />
      </S.GuestController>
    </S.InputGuestBox>
  );
};

export default InputGuest;
