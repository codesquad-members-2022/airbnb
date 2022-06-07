import {
  PersonnelContext,
  PersonnelSetterContext,
} from 'contexts/PersonnelProvider';
import React, { useContext } from 'react';
import styled from 'styled-components';
import PersonnelItem from './PersonnelItem';

function PersonnelModal() {
  const { adultsNum, childrenNum, babiesNum } = useContext(PersonnelContext);
  const { setAdultsNum, setChildrenNum, setBabiesNum } = useContext(
    PersonnelSetterContext,
  );

  const guestInfos = [
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
  padding: 35px 40px;
`;

export default PersonnelModal;
