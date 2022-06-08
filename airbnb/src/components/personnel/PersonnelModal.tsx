import React from 'react';
import styled from 'styled-components';
import PersonnelItem from './PersonnelItem';

import { usePersonnelNumState } from 'hooks/usePersonnelNumState';
import { usePersonnelNumSetter } from 'hooks/usePersonnelNumSetter';
import { GuestInfosType } from './personnelType';

function PersonnelModal() {
  const { adultsNum, childrenNum, babiesNum } = usePersonnelNumState();
  const { setAdultsNum, setChildrenNum, setBabiesNum } =
    usePersonnelNumSetter();

  const guestInfos: GuestInfosType = [
    {
      title: '성인',
      desc: '만 13세 이상',
      state: adultsNum,
      setState: setAdultsNum,
    },
    {
      title: '어린이',
      desc: '만 2~12세',
      state: childrenNum,
      setState: setChildrenNum,
    },
    {
      title: '유아',
      desc: '만 2세 미만',
      state: babiesNum,
      setState: setBabiesNum,
    },
  ];

  return (
    <PersonnelContainer>
      {guestInfos.map((guestInfo) => (
        <PersonnelItem key={guestInfo.title} guestInfo={guestInfo} />
      ))}
    </PersonnelContainer>
  );
}

const PersonnelContainer = styled.ul`
  width: 360px;
  padding: 35px 20px;
`;

export default PersonnelModal;
