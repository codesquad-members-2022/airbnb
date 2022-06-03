export type PriceInfoType = {
  minPrice: number;
  maxPrice: number;
  priceData: Array<number>;
};

export type ObjType = {
  [key: string]: number;
};

export type DataInfo = {
  data: Array<number>;
  sections: number;
  maxPrice: number;
  minPrice: number;
};
