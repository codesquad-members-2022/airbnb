import React from 'react';
import styled from 'styled-components';
import { flexBetween } from 'style/mixins';

import GuestAge from './GuestAge';
import GuestNum from './GuestNum';
import { GuestItemProps } from './personnelType';

function PersonnelItem({
  guestInfo: { title, desc, state, setState },
}: {
  guestInfo: GuestItemProps;
}) {
  return (
    <GuestItem>
      <GuestAge title={title} desc={desc} />
      <GuestNum title={title} state={state} setState={setState} />
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

export default PersonnelItem;
