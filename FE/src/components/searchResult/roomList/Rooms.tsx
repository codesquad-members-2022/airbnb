/* eslint-disable react/no-array-index-key */
import React, { useContext } from 'react';

import * as Styled from 'components/searchResult/roomList/roomList.style';
import { Context } from 'components/context/ModalContext';
import Room from './Room';

function Rooms() {
  const { filteredData } = useContext(Context);
  return (
    <Styled.RoomsWrapper>
      {filteredData.map((roomInfo) => {
        return (
          <div key={roomInfo.id + 200}>
            <Room key={roomInfo.id + 1} roomInfo={roomInfo} />
            <Styled.Line key={roomInfo.id + 100} />
          </div>
        );
      })}
    </Styled.RoomsWrapper>
  );
}

export default Rooms;
