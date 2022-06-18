import React from 'react';

import * as Styled from 'components/searchResult/roomList/roomList.style';
import SearchInfo from './SearchInfo';
import Rooms from './Rooms';
import { Paging } from './paging';

function RoomList() {
  return (
    <Styled.RoomListWrapper>
      <SearchInfo />
      <Styled.Title>지도에서 선택한 지역의 숙소</Styled.Title>
      <Rooms />
      <Paging />
    </Styled.RoomListWrapper>
  );
}

export default RoomList;
