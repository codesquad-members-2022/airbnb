import customStyled from '@/custom-styled-component/customStyled';
import { CalenderDateProvider } from '@/component/header/calender/CalenderDateProvider';
import GNB from '@/component/header/gnb/GNB';
import SearchBar from '@/component/header/search-bar/SearchBar';
import { SearchBarProvider } from '@/component/header/search-bar/SearchBarProvider';

function Header() {
  return (
    <Container>
      <GNB />
      <SearchBarProvider>
        <CalenderDateProvider>
          <SearchBar />
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
