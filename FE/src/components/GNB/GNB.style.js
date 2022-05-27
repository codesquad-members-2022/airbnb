import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

export const Container = styled.div`
  position: absolute;
  top: 0;
  left: 50%;
  height: 94px;
  transform: translateX(-50%);
`;

export const Wrapper = styled.div`
  width: 1280px;
  height: 94px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 0 auto;
`;

export const Logo = styled.h1`
  font-size: ${({ theme }) => theme.fontSize.display};
  font-weight: ${({ theme }) => theme.fontWeight.heavy};
  letter-spacing: -0.04em;
`;

export const LogoLink = styled(NavLink)`
  color: ${({ theme }) => theme.color.grey1};
`;

export const Nav = styled.ul`
  display: flex;
  gap: 24px;
`;

export const NavItem = styled.li``;

export const NavItemLink = styled(NavLink)`
  color: ${({ theme }) => theme.color.grey1};
  transition: all 200ms;

  &:hover {
    font-weight: ${({ theme }) => theme.fontWeight.bold};
    border-bottom: 1px solid ${({ theme }) => theme.color.grey1};
  }
`;

export const MyPageButton = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  gap: 10px;
  width: 76px;
  height: 40px;
  background: ${({ theme }) => theme.color.white};
  border: 1px solid ${({ theme }) => theme.color.grey4};
  border-radius: 30px;
  padding: 4px;
`;

export const UserIcon = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 32px;
  height: 32px;
  background-color: ${({ theme }) => theme.color.grey3};
  border-radius: 50%;
`;
