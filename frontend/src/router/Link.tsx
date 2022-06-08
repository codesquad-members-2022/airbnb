import { useContext } from "react";

import { LinkPath } from "router";

import { RouterContext } from "./Contexts";

const { history, location } = window;

const pushHistory = ({ path, state }: PushHistoryProps): void => {
  // history.pushState(state, title, url);
  history.pushState(state, path, `${location.origin}${path}`);
};

const Link = ({
  to,
  params = {},
  children,
  onClick,
}: LinkProps): JSX.Element => {
  const { setPage } = useContext(RouterContext);

  const href = to === "index" ? `/` : `/${to}`;

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
    e.preventDefault();
    onClick?.();
    setPage?.(to as LinkPath);
    pushHistory({ path: href, state: params });
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
}

interface LinkProps {
  to: string;
  children: React.ReactNode;
  params?: { [key: string]: string }; // TODO: key 값 추후에 지정하기
  onClick?: () => void;
}
