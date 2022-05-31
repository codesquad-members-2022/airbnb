import Header from "components/Header/Header";
import SearchResult from "components/Main/SearchResult/SearchResult";
import NotFound from "components/NotFound/NotFound";

// TODO: searchResult 파라미터가 없을때 올바르지 않다고 표시되도록?
export const pages: PagesType = {
  index: <Header />,
  searchResult: <SearchResult />,
  notFound: <NotFound />,
};

export type LinkPath = "index" | "searchResult";

export interface PagesType {
  [key: string]: React.ReactNode;
}
