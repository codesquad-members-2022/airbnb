import { createContext } from "react";

export default createContext<RouterContextType>({
  page: "index",
  setPage: () => {},
});

interface RouterContextType {
  page: string;
  setPage: React.Dispatch<React.SetStateAction<string>>;
}
