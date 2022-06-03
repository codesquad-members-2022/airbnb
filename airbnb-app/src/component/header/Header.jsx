import customStyled from '@/utils/custom-styled-component/customStyled';
import GNB from '@/component/header/gnb/GNB';
import SearchBar from '@/component/header/search-bar/SearchBar';
import { SearchBarProvider } from '@/context/SearchBarProvider';
import { CalenderDateProvider } from '@/context/CalenderDateProvider';
import { PersonnelProvider } from '@/context/PersonnelProvider';

function Header() {
  return (
    <Container>
      <GNB />
      <SearchBarProvider>
        <CalenderDateProvider>
          <PersonnelProvider>
            <SearchBar />
          </PersonnelProvider>
        </CalenderDateProvider>
      </SearchBarProvider>
    </Container>
  );
}

const Container = customStyled.div`
  box-sizing: border-box;
  position: fixed;
  width: 100%;
  min-width: 900px;
  padding: 0 30px;
`;

export default Header;
