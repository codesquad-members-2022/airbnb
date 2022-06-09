import React from 'react';
import { Btn, ContentBox, BarTitle, BarContent } from './SearchBar_styled.jsx';
import { usePersonnelNumState } from 'hooks/usePersonnelNumState.tsx';
import { usePersonnelNumSetter } from 'hooks/usePersonnelNumSetter.tsx';
import { ReactComponent as DeleteIcon } from 'assets/svg/deleteBtn.svg';

function Personnel({ onClick }) {
  const { adultsNum, childrenNum, babiesNum } = usePersonnelNumState();
  const { setAdultsNum, setChildrenNum, setBabiesNum } =
    usePersonnelNumSetter();

  function getGuestCount() {
    if (adultsNum === 0) return '게스트 추가';

    let getGuestCount = '';
    if (adultsNum > 0) getGuestCount += `성인 ${adultsNum}명`;
    if (childrenNum > 0) getGuestCount += `, 어린이 ${childrenNum}명`;
    if (babiesNum > 0) getGuestCount += `, 유아 ${babiesNum}명`;
    return getGuestCount;
  }

  function handelResetEvent() {
    setAdultsNum(0);
    setChildrenNum(0);
    setBabiesNum(0);
  }

  const deleteBtn = adultsNum ? (
    <DeleteIcon
      onClick={handelResetEvent}
      style={{ position: 'absolute', top: '25px', left: '800px' }}
    />
  ) : undefined;
  return (
    <>
      <Btn>
        <ContentBox onClick={() => onClick('TOTAL_GUESTS')}>
          <BarTitle>인원</BarTitle>
          <BarContent>{getGuestCount()}</BarContent>
        </ContentBox>
      </Btn>
      {deleteBtn}
    </>
  );
}

export default Personnel;
