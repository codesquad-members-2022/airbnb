import { useMemo, useState } from "react";

import { LinkPath } from "router";

import { RouterContext, LocationContext } from "./Contexts";
import pages from "./pages";

const FIRST_INDEX = 0;
const FIRST_SLASH_COUNT = 1;

const Router = (): React.ReactElement => {
  const { location } = window;
  // const queryData: { [key: string]: string } = useMemo(() => ({}), []);
  const queryData = location.search
    .slice(1)
    .split("&")
    .map((item) => item.split("="))
    .reduce((prev, [key, val]) => {
      if (key.length) {
        return { ...prev, [key]: val };
      }
      return { ...prev };
    }, {});

  const getCurrentPath = (): LinkPath => {
    const currentPath =
      location.pathname.slice(FIRST_SLASH_COUNT).split("/")[FIRST_INDEX] ||
      "index";

    return currentPath as LinkPath;
  };

  const currentPath: LinkPath = getCurrentPath();

  const [page, setPage] = useState<LinkPath>(
    pages[currentPath] ? currentPath : "notFound"
  );

  onpopstate = (/* e: PopStateEvent */) => {
    const poppedPath: LinkPath = getCurrentPath();
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
      <LocationContext.Provider
        value={useMemo(
          () => ({
            queryData,
            pathname: location.pathname,
          }),
          [location.pathname, queryData]
        )}
      >
        <div style={{ position: "relative" }}>{pages[page]}</div>
      </LocationContext.Provider>
    </RouterContext.Provider>
  );
};

export default Router;
