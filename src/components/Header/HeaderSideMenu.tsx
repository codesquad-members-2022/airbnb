import React from 'react';
import styled from 'styled-components';
import MenuIcon from '@mui/icons-material/Menu';
import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined';

const HeaderSideMenu = () => {
  return (
    <SideMenuContainer>
      <MenuIcon />
      <PersonIcon />
    </SideMenuContainer>
  );
};

export default HeaderSideMenu;

const SideMenuContainer = styled.span`
  ${({ theme }) => theme.mixin.flexMixin('row', 'center', 'center')}
  width: 66px;
  height: 40px;
  background:  ${({ theme }) => theme.colors.white}
  padding: 0 5px;
  border-radius: 20px;
`;

const PersonIcon = styled(PersonOutlineOutlinedIcon)`
  background: #828282;
  border-radius: 50%;
  margin-left: 5px;
  color: #fff;
  padding: 3px;
  font-size: 8px;
`;
