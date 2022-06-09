import { useMemo, useState } from "react";

import { LinkPath } from "router";

import RouterContext /* , LocationContext */ from "./Contexts";
import pages from "./pages";

const FIRST_INDEX = 0;
const FIRST_CHAR_COUNT = 1;

const parseQueryStringToObject = (
  queryString: string
): { [key: string]: string } | null => {
  if (!queryString.length) {
    return null;
  }
  return Object.fromEntries(queryString.split("&").map((s) => s.split("=")));
};

const Router = (): React.ReactElement => {
  const { location } = window;

  const getCurrentPath = (): LinkPath => {
    const currentPath =
      location.pathname.slice(FIRST_CHAR_COUNT).split("/")[FIRST_INDEX] ||
      "index";

    return currentPath as LinkPath;
  };

  const currentPath: LinkPath = getCurrentPath();

  const { search: queryString } = location;

  let queryData = parseQueryStringToObject(queryString);

  const [page, setPage] = useState<LinkPath>(
    pages[currentPath] ? currentPath : "notFound"
  );

  onpopstate = () => {
    const poppedPath: LinkPath = getCurrentPath();
    queryData = parseQueryStringToObject(queryString);

    if (!pages[poppedPath]) {
      setPage("notFound");

      return;
    }

    setPage(poppedPath);
  };

  return (
    <RouterContext.Provider
      value={useMemo(
        () => ({ queryData, page, setPage }),
        [queryData, page, setPage]
      )}
    >
      <div style={{ position: "relative" }}>{pages[page]}</div>
    </RouterContext.Provider>
  );
};

export default Router;
