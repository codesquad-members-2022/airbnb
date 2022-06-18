import React, { useContext } from 'react';

import * as Styled from 'components/searchResult/roomList/roomList.style';
import { Context } from 'components/context/ModalContext';
import { moneyToWon } from 'utils/utils';

function SearchInfo() {
  const { lowPrice = 0, highPrice = 0, guestCounts, infantCounts, filteredData } = useContext(Context);

  return (
    <Styled.SearchInfoWrapper>
      {`${filteredData.length}개 이상의 숙소 • 6월 9일 - 6월 18일 • ${moneyToWon(lowPrice)}~${moneyToWon(
        highPrice,
      )} • ${guestCounts}명 유아${infantCounts}명`}
    </Styled.SearchInfoWrapper>
  );
}

export default SearchInfo;
