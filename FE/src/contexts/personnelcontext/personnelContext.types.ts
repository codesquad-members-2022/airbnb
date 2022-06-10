import { Dispatch } from 'react';

export interface IPersonnelState {
  adult: number;
  child: number;
  infant: number;
}

export interface IPersonnelContext {
  personnelState: IPersonnelState;
  personnelDispatch: Dispatch<{ type: string }>;
}
