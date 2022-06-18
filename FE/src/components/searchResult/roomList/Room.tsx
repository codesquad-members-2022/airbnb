import React, { useContext } from 'react';

import * as Styled from 'components/searchResult/roomList/room.style';
import HeartIcon from 'components/Icons/heartIcon';
import StarIcon from 'components/Icons/StarIcon';
import { moneyToWon } from 'utils/utils';
// import { Context } from 'components/context/ModalContext';

interface RoomProps {
  roomInfo: {
    allAmount: number;
    name: string;
    maxNumOfGuests: number;
    numOfReviews: number;
    roomCharge: number;
    rate: number;
    imageUrl: string;
  };
}

function Room({ roomInfo: { allAmount, name, maxNumOfGuests, numOfReviews, roomCharge, rate, imageUrl } }: RoomProps) {
  return (
    <Styled.RoomWrapper>
      <Styled.Thumbnail imgUrl={imageUrl} />
      <Styled.Description>
        <Styled.InfoWrapper>
          <Styled.Info>
            <Styled.Location>서초구의 아파트 전체</Styled.Location>
            <Styled.RoomTitle>{name}</Styled.RoomTitle>
            <Styled.Option>
              최대 인원 {maxNumOfGuests}명·원룸·침대 1개·욕실 1개 <br />
              주방·무선 인터넷·에어컨·헤어드라이어
            </Styled.Option>
          </Styled.Info>
          <HeartIcon size={{ width: '21', height: '18.2' }} />
        </Styled.InfoWrapper>
        <Styled.PointWrapper>
          <Styled.Point>
            <StarIcon size={{ width: '13.33', height: '12.68' }} />
            <Styled.Rating>{rate}</Styled.Rating>
            <Styled.Review>({numOfReviews})</Styled.Review>
          </Styled.Point>
          <Styled.Charge>
            <Styled.DayChargeWrapper>
              <Styled.DayCharge>{moneyToWon(roomCharge)}</Styled.DayCharge>
              <Styled.Day>/박</Styled.Day>
            </Styled.DayChargeWrapper>
            <Styled.TotalCost>총액 {moneyToWon(allAmount)}</Styled.TotalCost>
          </Styled.Charge>
        </Styled.PointWrapper>
      </Styled.Description>
    </Styled.RoomWrapper>
  );
}

export default Room;
