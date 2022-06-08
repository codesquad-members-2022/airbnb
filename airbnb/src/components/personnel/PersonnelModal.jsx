import React from 'react';
import styled from 'styled-components';
import PersonnelItem from './PersonnelItem';

function PersonnelModal() {
  const guestInfos = [
    { title: '성인', desc: '만 13세 이상', state: 0 },
    { title: '어린이', desc: '만 2~12세', state: 0 },
    { title: '유아', desc: '만 2세 미만', state: 0 },
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
