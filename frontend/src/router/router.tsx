import { useMemo, useState } from "react";

import RouterContext from "./Contexts";
import { pages } from "./pages";

const { location } = window;

const FIRST_INDEX = 0;
const FIRST_SLASH_COUNT = 1;

const getCurrentPath = () => {
  return (
    location.pathname.slice(FIRST_SLASH_COUNT).split("/")[FIRST_INDEX] ||
    "index"
  );
};

const Router = ({ children }: RouterProps): React.ReactElement => {
  const currentPath = getCurrentPath();

  const [page, setPage] = useState(pages[currentPath] ? "index" : "notFound");

  onpopstate = (/* e: PopStateEvent */) => {
    const poppedPath = getCurrentPath();
    // TODO: e.state 이용하여 뒤로가기 시 검색결과

    if (!pages[poppedPath]) {
      setPage("notFound");
      return;
    }

    setPage(poppedPath);
  };

  return (
    <RouterContext.Provider
      value={useMemo(() => ({ page, setPage }), [page, setPage])}
    >
      {children}
    </RouterContext.Provider>
  );
};
interface RouterProps {
  children: React.ReactNode;
}

export default Router;
