import Calender from '@/component/header/calender/Calender';
import { CalenderDateProvider } from '@/component/header/calender/CalenderDateProvider';
import GNB from '@/component/header/gnb/GNB';
import SearchBar from '@/component/header/search-bar/SearchBar';

function Header() {
  return (
    <>
      <GNB />
      <CalenderDateProvider>
        <SearchBar />
        <Calender page={2} />
      </CalenderDateProvider>
    </>
  );
}

export default Header;
