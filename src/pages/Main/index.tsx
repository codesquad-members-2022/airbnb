import GNB from "@components/GNB";
import SearchBar from "@components/SearchBar";
import SearchModalProvider from "@contexts/SearchModalProvider";

import * as S from "./style";

const Main = () => {
  return (
    <>
      <S.MainBanner>
        <GNB />
        <SearchModalProvider>
          <SearchBar />
        </SearchModalProvider>
      </S.MainBanner>

      <S.MainContents>
        {/* <Content />
        <Content />
        <Content /> */}
      </S.MainContents>

      <S.Footer />
    </>
  );
};

export default Main;
