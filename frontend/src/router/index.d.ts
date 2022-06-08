// cycle 오류로 인한 type, interface 분리

// import pages from "./pages";

export type LinkPath = "index" | "searchResult" | "notFound";

export interface RouterContextType {
  page: LinkPath;
  setPage: React.Dispatch<React.SetStateAction<LinkPath>>;
}

export interface LocationContextType {
  queryData: {
    [key: string]: string;
  };
  pathname: string;
}
