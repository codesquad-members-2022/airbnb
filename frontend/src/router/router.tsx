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
  // const queryData: { [key: string]: string } = useMemo(() => ({}), []);

  // Object.fromEntries
  // const queryData = location.search
  //   .slice(1)
  //   .split("&")
  //   .map((item) => item.split("="))
  //   .reduce((prev, [key, val]) => {
  //     if (key.length) {
  //       return { ...prev, [key]: val };
  //     }
  //     return { ...prev };
  //   }, {});

  const getCurrentPath = (): LinkPath => {
    const currentPath =
      location.pathname.slice(FIRST_CHAR_COUNT).split("/")[FIRST_INDEX] ||
      "index";

    return currentPath as LinkPath;
  };

  const currentPath: LinkPath = getCurrentPath();
  const { search: queryString } = location;
  const queryData = parseQueryStringToObject(queryString);

  // console.log(currentPath);
  console.log(queryString, "queryString");
  console.log(queryData, "queryData");

  const [page, setPage] = useState<LinkPath>(
    pages[currentPath] ? currentPath : "notFound"
  );

  onpopstate = (/* e: PopStateEvent */) => {
    const poppedPath: LinkPath = getCurrentPath();

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
      {/* <LocationContext.Provider
        value={useMemo(
          () => ({
            queryData,
            pathname: location.pathname,
          }),
          [location.pathname, queryData]
        )}
      > */}
      <div style={{ position: "relative" }}>{pages[page]}</div>
      {/* </LocationContext.Provider> */}
    </RouterContext.Provider>
  );
};

export default Router;
