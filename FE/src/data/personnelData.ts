export interface PersonnelDataTypes {
  id: number;
  type: string;
  description: string;
}

export const personnelData: PersonnelDataTypes[] = [
  {
    id: 1,
    type: '성인',
    description: '만 13세 이상',
  },
  {
    id: 2,
    type: '어린이',
    description: '만 2~12세',
  },
  {
    id: 3,
    type: '유아',
    description: '만 2세 미만',
  },
];
