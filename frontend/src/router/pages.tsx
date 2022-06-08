import Header from "components/Header/Header";
import SearchResult from "components/Main/SearchResult/SearchResult";
import NotFound from "components/NotFound/NotFound";
import { LinkPath } from "router";

// TODO: searchResult 파라미터가 없을때 올바르지 않다고 표시되도록?
const pages: PagesType = {
  index: <Header />,
  searchResult: (
    <>
      <Header />
      <SearchResult />
    </>
  ),
  notFound: <NotFound />,
};

type PagesType = {
  [key in LinkPath]: React.ReactNode;
};

export default pages;
