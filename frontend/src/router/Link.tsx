import { useContext } from "react";

import { LinkPath } from "router";

import RouterContext from "./Contexts";

const { history, location } = window;
const FIRST_INDEX = 0;
const DELETE_COUNT = 1;

const queryDataToUrlString = (query: { [key: string]: string }) => {
  return JSON.stringify(query)
    .replace(/["{}]/g, "")
    .split(",")
    .reduce((prev, cur) => `${prev}${cur.split(":").join("=")}&`, "")
    .slice(FIRST_INDEX, DELETE_COUNT * -1);
};

const pushHistory = ({ path, state, query }: PushHistoryProps): void => {
  // NOTE: history.pushState(state, title, url);
  const url = `${location.origin}${path}${
    (query && `?${queryDataToUrlString(query)}`) || ""
  }`;

  history.pushState(state, path, url);
};

const Link = ({
  to,
  state,
  children,
  onClick,
  query,
}: LinkProps): JSX.Element => {
  const { setPage } = useContext(RouterContext);

  const href = to === "index" ? `/` : `/${to}`;

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
    e.preventDefault();
    onClick?.();
    setPage?.(to as LinkPath);
    pushHistory({ path: href, state, query });
  };

  return (
    <a href={href} onClick={handleClick}>
      {children}
    </a>
  );
};

export default Link;

interface PushHistoryProps {
  path: string;
  state?: {
    [key: string]: string;
  };
  query?: { [key: string]: string };
}

interface LinkProps {
  to: string;
  children: React.ReactNode;
  state?: { [key: string]: string };
  query?: { [key: string]: string };
  onClick?: () => void;
}
