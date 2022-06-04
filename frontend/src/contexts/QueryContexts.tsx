import { createContext } from "react";

const { search } = window.location;
const queryData: { [key: string]: string } = {};
search
  .slice(1)
  .split("&")
  .map((item) => item.split("="))
  .forEach(([key, val]) => {
    queryData[key] = val;
  });

export const QueryContexts = createContext(queryData);

const QueryParser = ({ children }: { children: React.ReactNode }) => {
  return (
    <QueryContexts.Provider value={queryData}>
      {children}
    </QueryContexts.Provider>
  );
};

export default QueryParser;
