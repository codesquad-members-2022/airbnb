import { createContext } from "react";

import { LocationContextType, RouterContextType } from "router";

export const RouterContext = createContext<RouterContextType>({
  page: "index",
  setPage: () => {},
});

export const LocationContext = createContext<LocationContextType | null>(null);
