import customStyled from '@/custom-styled-component/customStyled';
import Logo from '@/component/header/gnb/Logo';
import MenuTabs from '@/component/header/gnb/MenuTabs';
import AccountMenu from '@/component/header/gnb/AccountMenu';

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
