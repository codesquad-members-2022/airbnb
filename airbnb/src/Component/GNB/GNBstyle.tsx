import styled from 'styled-components';
import Button from '@mui/material/Button';

export const GNBwrapper = styled.div`
  width: 100%;
  padding: 24px;
`;

// TODO: 매직넘버 상수화? 타입으로 지정?
export const Logo = styled.a`
  font-weight: 900;
  font-size: 32px;
  line-height: 46px;
  letter-spacing: -0.04em;
  text-transform: uppercase;
`;

export const MenuButton = styled(Button)`
  &:hover {
    color: black;
    text-decoration: underline;
    background-color: transparent;
  }
`;

export const AccountMenuWrapper = styled.div`
  box-sizing: border-box;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 4px 4px 4px 16px;
  align-items: center;
  width: 76px;
  height: 40px;
  border: 1px solid #bdbdbd;
  border-radius: 999px;
  background-color: white;
`;
