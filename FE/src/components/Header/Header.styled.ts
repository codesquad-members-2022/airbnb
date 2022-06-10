import styled from 'styled-components';

export const Nav = styled.nav`
  display: flex;
  justify-content: space-between;
  padding: 2.4rem 8rem 0;
`;

export const Logo = styled.h1`
  cursor: pointer;
  font-weight: ${({ theme: { fontWeights } }) => fontWeights.black};
  font-size: ${({ theme: { fontSizes } }) => fontSizes.xxxl};
  line-height: ${({ theme: { lineHeights } }) => lineHeights.logo};
  letter-spacing: ${({ theme: { letterSpacings } }) => letterSpacings.tighter};
`;
