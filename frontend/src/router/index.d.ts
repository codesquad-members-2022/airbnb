// NOTE: cycle 오류로 인한 type, interface 분리

export type LinkPath = "index" | "searchResult" | "notFound";

export interface RouterContextType {
  queryData: { [key: string]: string } | null;
  page: LinkPath;
  setPage: React.Dispatch<React.SetStateAction<LinkPath>>;
}

export interface LocationContextType {
  queryData: {
    [key: string]: string;
  };
  pathname: string;
}
