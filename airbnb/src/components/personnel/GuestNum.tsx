import React from 'react';
import styled from 'styled-components';
import { usePersonnelNumState } from 'hooks/usePersonnelNumState';
import { usePersonnelNumSetter } from 'hooks/usePersonnelNumSetter';
import { ReactComponent as PlusIcon } from 'assets/svg/plusBtn.svg';
import { ReactComponent as MinusIcon } from 'assets/svg/minusBtn.svg';
import { GuestNumProps } from './personnelType';

function GuestNum({ title, state, setState }: GuestNumProps) {
  const { adultsNum, childrenNum, babiesNum } = usePersonnelNumState();
  const { setAdultsNum } = usePersonnelNumSetter();

  const handleClickMinus = () => {
    const minCount = 0;
    if (state > minCount) setState((num: number) => num - 1);
  };

  const handleClickPlus = (title: string) => {
    if (!adultsNum && title !== '성인') {
      if (!childrenNum || !babiesNum) {
        setAdultsNum((num) => num + 1);
      }
    }
    const maxCount = 8;
    if (state < maxCount) setState((num: number) => num + 1);
  };

  const isDisabledMinusBtn = state === 0;
  const isDisabledPlusBtn = state >= 8;
  return (
    <ControlBox>
      <MinusIcon
        className={isDisabledMinusBtn ? 'disabledBtn' : 'ableBtn'}
        onClick={handleClickMinus}
      />
      <GuestNumber>{state}</GuestNumber>
      <PlusIcon
        className={isDisabledPlusBtn ? 'disabledBtn' : 'ableBtn'}
        onClick={() => handleClickPlus(title)}
      />
    </ControlBox>
  );
}

const ControlBox = styled.div`
  display: flex;
  justify-content: space-between;

  .ableBtn {
    cursor: pointer;
  }
  .disabledBtn {
    cursor: default;
    path {
      stroke: ${({ theme }) => theme.colors.gray5};
    }
  }
`;

const GuestNumber = styled.span`
  width: 30px;
  height: 30px;
  text-align: center;
  line-height: 10px;
  font-size: ${({ theme }) => theme.fontSizes.xl};
  padding: 5px;
`;

export default GuestNum;
