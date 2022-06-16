import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const HeaderLogo = ({ logoText }: { logoText: string }) => (
  <Link to='/' style={{ textDecoration: 'none' }}>
    <LogoContainer>{logoText}</LogoContainer>
  </Link>
);

export default HeaderLogo;

const LogoContainer = styled.h1`
  font-size: 32px;
  font-weight: 900;
`;
