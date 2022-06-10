import React, { useContext } from 'react';

import { PersonnelContext } from 'contexts/personnelcontext/personnelContext';

import { PERSONNEL_MAX_VALUE, PERSONNEL_MIN_VALUE } from 'constant';

import { PersonnelValue } from './PersonnelCounter.types';

import {
  PersonnelCounterContainer,
  Button,
  ButtonImg,
  Count,
} from './PersonnelCounter.styled';

const distinguishPersonnelValue = (
  actionTypeName: string,
  PersonnelValue: PersonnelValue,
) => {
  switch (actionTypeName) {
    case 'ADULT':
      return PersonnelValue.adult;
    case 'CHILD':
      return PersonnelValue.child;
    default:
      return PersonnelValue.infant;
  }
};

export function PersonnelCounter({
  actionTypeName,
}: {
  actionTypeName: string;
}): JSX.Element {
  const { personnelState, personnelDispatch } = useContext(PersonnelContext);

  const { adult } = personnelState;

  const count = distinguishPersonnelValue(actionTypeName, personnelState);

  const countGreaterThanMin = count > PERSONNEL_MIN_VALUE;
  const countLessThanMax = count < PERSONNEL_MAX_VALUE;

  const minusBtnImg = countGreaterThanMin
    ? './assets/images/minuse.svg'
    : './assets/images/minuse-off.svg';
  const plusBtnImg = countLessThanMax
    ? './assets/images/pluse.svg'
    : './assets/images/pluse-off.svg';

  const handleClickPersonnelMinus = () => subtractPersonnelCount();

  const subtractPersonnelCount = () => {
    if (countGreaterThanMin)
      personnelDispatch({
        type: `SUBTRACT_${actionTypeName}`,
      });
  };

  const handleClickPersonnelPlus = () => {
    addPersonnelCount();
    addPersonnelAdultCountWhenRestCountZero();
  };

  const addPersonnelCount = () => {
    if (countLessThanMax) personnelDispatch({ type: `ADD_${actionTypeName}` });
  };

  const addPersonnelAdultCountWhenRestCountZero = () => {
    if (
      adult === PERSONNEL_MIN_VALUE &&
      (actionTypeName === 'INFANT' || actionTypeName === 'CHILD')
    )
      personnelDispatch({ type: `ADD_ADULT` });
  };

  return (
    <PersonnelCounterContainer>
      <Button onClick={handleClickPersonnelMinus}>
        <ButtonImg src={minusBtnImg} alt="인원 마이너스" />
      </Button>
      <Count>{count}</Count>
      <Button onClick={handleClickPersonnelPlus}>
        <ButtonImg src={plusBtnImg} alt="인원 플러스" />
      </Button>
    </PersonnelCounterContainer>
  );
}
