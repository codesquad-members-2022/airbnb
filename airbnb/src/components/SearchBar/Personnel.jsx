import { PersonnelContext } from 'contexts/PersonnelProvider.jsx';
import React, { useContext } from 'react';
import { Btn, ContentBox, BarTitle, BarContent } from './SearchBar_styled.jsx';

function Personnel({ onClick }) {
  const { adultsNum, childrenNum, babiesNum } = useContext(PersonnelContext);

  function getGuestCount() {
    if (adultsNum === 0) return '게스트 추가';

    let getGuestCount = '';
    if (adultsNum > 0) getGuestCount += `성인 ${adultsNum}명`;
    if (childrenNum > 0) getGuestCount += `, 어린이 ${childrenNum}명`;
    if (babiesNum > 0) getGuestCount += `, 유아 ${babiesNum}명`;
    return getGuestCount;
  }

  return (
    <Btn>
      <ContentBox onClick={() => onClick('TOTAL_GUESTS')}>
        <BarTitle>인원</BarTitle>
        <BarContent>{getGuestCount()}</BarContent>
      </ContentBox>
    </Btn>
  );
}

export default Personnel;
