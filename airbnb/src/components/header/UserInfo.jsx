import styled from 'styled-components';

import { ReactComponent as MenuIcon } from 'assets/svg/menu.svg';
import { ReactComponent as UserIcon } from 'assets/svg/user.svg';

function UserInfo() {
  return (
    <UserBtn>
      <MenuIcon />
      <UserIcon />
    </UserBtn>
  );
}

const UserBtn = styled.button`
  background-color: ${({ theme }) => theme.colors.white};
  border: 2px solid ${({ theme }) => theme.colors.gray4};
  border-radius: 20px;
  width: 76px;
  height: 42px;
`;

export default UserInfo;
