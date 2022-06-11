import { createContext } from "react";

import { /* LocationContextType, */ RouterContextType } from "router";

const RouterContext = createContext<RouterContextType>({
  queryData: null,
  page: "index",
  setPage: () => {},
});

export default RouterContext;
