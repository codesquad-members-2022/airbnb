export interface PeriodType {
  checkIn?: number;
  checkOut?: number;
}

export interface PriceType {
  minPrice?: number;
  maxPrice?: number;
}

export interface PersonnelType {
  adult?: number;
  teenager?: number;
  child?: number;
}

export interface SearchPropsType {
  title: string | string[];
  defaultValue: string;
  value: PeriodType & PriceType & PersonnelType;
}

export interface SectionProps {
  search: SearchPropsType;
  addSearch: object;
  value?: string;
}
