export interface PeriodTypes {
  checkIn: string;
  checkOut: string;
}

export interface PriceTypes {
  min: number;
  max: number;
}

export interface PersonnelTypes {
  guest: number;
  kid: number;
}

export interface SearchBarDataTypes {
  period: PeriodTypes;
  price: PriceTypes;
  personnel: PersonnelTypes;
}

export const searchBarData = {
  period: {
    checkIn: '5월 27일',
    checkOut: '5월 28일',
  },
  price: {
    min: 100000,
    max: 1000000,
  },
  personnel: {
    guest: 0,
    kid: 0,
  },
};

export const defaultPeriod = {
  checkIn: null,
  checkOut: null,
};

export const defaultPersonnel = {
  guest: 0,
  kid: 0,
};
