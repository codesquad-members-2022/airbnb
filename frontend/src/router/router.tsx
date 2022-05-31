import { createContext, useContext, useMemo, useState } from "react";

import { pages, LinkPath } from "./pages";

const { history, location } = window;

export const RouterContext = createContext<RouterContextType>({
  page: pages.index,
  setPage: () => {},
});

const pushHistory = ({ path, state }: PushHistoryProps): void => {
  // history.pushState(state, title, url)
  history.pushState(state, path, `${location.origin}${path}`);
};

const Link = ({
  to,
  params = {},
  children,
  onClick,
}: LinkProps): JSX.Element => {
  const { setPage } = useContext(RouterContext);

  const href = `/${to}`;

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
    e.preventDefault();
    onClick?.();
    pushHistory({ path: href, state: params });
    setPage(pages[to]);
  };

  return (
    <a href={href} onClick={handleClick}>
      {children}
    </a>
  );
};

const FIRST_INDEX = 0;
const FIRST_SLASH_COUNT = 1;
const SLASH = "/";

const getCurrentPath = () => {
  return (
    location.pathname.slice(FIRST_SLASH_COUNT).split(SLASH)[FIRST_INDEX] ||
    "index"
  );
};

const Router = ({ children }: RouterProps): React.ReactElement => {
  const currentPath = getCurrentPath();

  const [page, setPage] = useState(pages[currentPath] || pages.notFound);

  onpopstate = (/* e: PopStateEvent */) => {
    const poppedPath = getCurrentPath();
    // TODO: e.state 이용하여 뒤로가기 시 검색결과

    if (!pages[poppedPath]) {
      setPage(pages.notFound);
      return;
    }

    setPage(pages[poppedPath]);
  };

  return (
    <RouterContext.Provider
      value={useMemo(() => ({ page, setPage }), [page, setPage])}
    >
      {children}
    </RouterContext.Provider>
  );
};

interface LinkProps {
  to: LinkPath | string;
  children: React.ReactNode;
  params?: { [key: string]: string } | {}; // TODO: key 값 추후에 지정하기
  onClick?: () => void;
}

interface PushHistoryProps {
  path: string;
  state?:
    | {
        [key: string]: string;
      }
    | {};
}

interface RouterContextType {
  page: React.ReactNode;
  setPage: React.Dispatch<React.SetStateAction<React.ReactNode>>;
}

interface RouterProps {
  children: React.ReactNode;
}

export { Router, Link };
