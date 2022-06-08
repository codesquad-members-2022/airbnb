import { useMemo, useState } from "react";

import { RouterContext, LocationContext } from "./Contexts";
import { pages } from "./pages";

const FIRST_INDEX = 0;
const FIRST_SLASH_COUNT = 1;

const Router = (): React.ReactElement => {
  const { location } = window;
  const queryData: { [key: string]: string } = useMemo(() => ({}), []);
  location.search
    .slice(1)
    .split("&")
    .map((item) => item.split("="))
    .forEach(([key, val]) => {
      if (key.length) {
        queryData[key] = val;
      }
    });

  const getCurrentPath = () => {
    return (
      location.pathname.slice(FIRST_SLASH_COUNT).split("/")[FIRST_INDEX] ||
      "index"
    );
  };

  const currentPath = getCurrentPath();

  // 이부분이 잘못됨, 무조건 존재하면 index로 연결
  const [page, setPage] = useState(
    pages[currentPath] ? currentPath : "notFound"
  );

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
