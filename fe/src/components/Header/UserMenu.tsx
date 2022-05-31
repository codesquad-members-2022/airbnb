import styled from 'styled-components';
import { Avatar } from '@mui/material';
import { ReactComponent as HamburgerIcon } from 'images/FE_숙소예약서비스/Property 1=menu.svg';

function UserMenu() {
  return (
    <UserWrapper type="button" aria-label="유저 정보 메뉴">
      <Hamburger />
      <CustomAvatar src="images/FE_숙소예약서비스/Property 1=user.svg" />
    </UserWrapper>
  );
}

const UserWrapper = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 76px;
  height: 40px;
  border-radius: 999px;
  border: 1px solid ${({ theme }) => theme.colors.grey4};
  background: ${({ theme }) => theme.colors.white};
`;

const Hamburger = styled(HamburgerIcon)`
  width: 16px;
  height: 16px;
  margin: 0 8px 0 10px;

  path {
    stroke: ${({ theme }) => theme.colors.black};
  }
`;

const CustomAvatar = styled(Avatar)`
  && {
    width: 32px;
    height: 32px;
    background: ${({ theme }) => theme.colors.grey3};
  }
`;

export default UserMenu;
