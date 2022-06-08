import { createContext } from "react";

export const RouterContext = createContext<RouterContextType>({
  page: "index",
  setPage: () => {},
});

export const LocationContext = createContext<LocationContextType | null>(null);

interface RouterContextType {
  page: string;
  setPage: React.Dispatch<React.SetStateAction<string>>;
}

interface LocationContextType {
  queryData: {
    [key: string]: string;
  };
  pathname: string;
}
