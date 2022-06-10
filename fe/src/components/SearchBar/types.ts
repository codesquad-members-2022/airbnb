import { Dispatch } from 'react';

export type PeriodType = {
  checkIn?: string;
  checkOut?: string;
};

export type PriceType = {
  min?: number;
  max?: number;
};

export type PersonnelType = {
  adult?: number;
  teenager?: number;
  child?: number;
};

export interface InfoType {
  title: string;
  defaultValue: string;
  value?: object;
}

export type SearchType = {
  period: PeriodType;
  price: PriceType;
  personnel: PersonnelType;
};

export type addSearchType =
  | {
      type: 'SET_PERIOD';
      value: PeriodType;
    }
  | {
      type: 'SET_PRICE';
      value: PriceType;
    }
  | {
      type: 'SET_PERSONNEL';
      value: PersonnelType;
    }
  | {
      type: 'INIT_VALUE';
      value: string;
    };
export interface ModalProps<T> {
  search: T;
  addSearch: Dispatch<addSearchType>;
}

export interface SectionProps<T> {
  info: InfoType;
  search: T;
}
