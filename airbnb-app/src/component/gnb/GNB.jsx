import customStyled from '../../custom-styled-component/customStyled';
import Logo from './Logo';
import MenuTabs from './MenuTabs';
import AccountMenu from './AccountMenu';

function GNB() {
  return (
    <StyledContainer>
      <Logo />
      <MenuTabs />
      <AccountMenu />
    </StyledContainer>
  );
}

const StyledContainer = customStyled.div`
  width: 1280px;
  margin: 24px 80px;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export default GNB;
