import { PersonnelContext } from 'contexts/PersonnelProvider.jsx';
import React, { useContext } from 'react';
import { Btn, ContentBox, BarTitle, BarContent } from './SearchBar_styled.jsx';

function Personnel({ onClick }) {
  const { adultsNum, childrenNum, babiesNum } = useContext(PersonnelContext);

  let guestContent = '';
  if (adultsNum > 0) guestContent += `성인 ${adultsNum}명`;
  if (childrenNum > 0) guestContent += `, 어린이 ${childrenNum}명`;
  if (babiesNum > 0) guestContent += `, 유아 ${babiesNum}명`;
  if (adultsNum === 0) guestContent = '게스트 추가';

  return (
    <Btn>
      <ContentBox onClick={() => onClick('TOTAL_GUESTS')}>
        <BarTitle>인원</BarTitle>
        <BarContent>{guestContent}</BarContent>
      </ContentBox>
    </Btn>
  );
}

export default Personnel;
