import styled from 'styled-components';

function Logo() {
  return <StyledLogo>Logo</StyledLogo>;
}

const StyledLogo = styled.div`
  background-color: ${({ theme }) => theme.colors.clearwhite};
  font-size: 40px;
  font-weight: 700;
  cursor: pointer;
  padding: 10px;
  border-radius: 20px;
  margin-left: 10px;
`;

export default Logo;
