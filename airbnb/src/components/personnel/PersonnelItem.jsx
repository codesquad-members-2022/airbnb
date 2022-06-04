import React, { useState } from 'react';
import { flexBetween } from 'style/mixins';
import styled from 'styled-components';

function PersonnelItem({ guestInfo }) {
  const [guestNumber, setGuestNumber] = useState(guestInfo.state);

  // 버튼 클릭 이벤트 (아직 사용 X)
  const handleClickMinus = () => {
    if (guestNumber > 0) setGuestNumber((num) => num - 1);
  };
  const handleClickPlus = () => {
    if (guestNumber < 9) setGuestNumber((num) => num + 1);
  };

  return (
    <GuestItem>
      <AgeBox>
        <AgeCategory>{guestInfo.title}</AgeCategory>
        <AgeDescription>{guestInfo.desc}</AgeDescription>
      </AgeBox>
      <ControlBox>
        {/* 마이너스 버튼 */}
        <GuestNumber>{guestNumber}</GuestNumber>
        {/* 플러스 버튼 */}
      </ControlBox>
    </GuestItem>
  );
}
const GuestItem = styled.li`
  ${flexBetween}
  padding: 25px;
  &:not(:last-child) {
    border-bottom: 1px solid ${({ theme }) => theme.colors.gray5};
  }
`;

const AgeBox = styled.div``;
const AgeCategory = styled.div`
  font-weight: bold;
  margin-bottom: 10px;
`;

const AgeDescription = styled.div`
  font-size: 14px;
  color: ${({ theme }) => theme.colors.gray3};
`;

const ControlBox = styled.div`
  display: flex;
  justify-content: space-between;
`;

const GuestNumber = styled.span`
  width: 30px;
  height: 30px;
  text-align: center;
  line-height: 30px;
`;

export default PersonnelItem;
