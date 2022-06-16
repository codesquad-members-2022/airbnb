import { Dispatch } from 'react';

export type PersonnelStateType = {
  [key: number]: string;
  ADULT: number;
  CHILD: number;
  INFANT: number;
};

export type PersonnelTargetType = 'ADULT' | 'CHILD' | 'INFANT';

export type PersonnelActionType = {
  type: string;
  target: PersonnelTargetType;
};

export type PersonnelDispatchType = Dispatch<PersonnelActionType>;

export type PersonnelSelectOptionType = {
  target: PersonnelTargetType;
  title: string;
  description: string;
};
