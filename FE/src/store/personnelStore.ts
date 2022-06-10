import { IPersonnelState } from 'contexts/personnelcontext/personnelContext.types';

export const initialPersonnelState = {
  adult: 0,
  child: 0,
  infant: 0,
};

export function personnelReducer(
  state: IPersonnelState,
  action: { type: string },
): IPersonnelState {
  switch (action.type) {
    case 'ADD_ADULT':
      return {
        ...state,
        adult: state.adult + 1,
      };
    case 'ADD_CHILD':
      return {
        ...state,
        child: state.child + 1,
      };
    case 'ADD_INFANT':
      return {
        ...state,
        infant: state.infant + 1,
      };
    case 'SUBTRACT_ADULT':
      return {
        ...state,
        adult: state.adult - 1,
      };
    case 'SUBTRACT_CHILD':
      return {
        ...state,
        child: state.child - 1,
      };
    case 'SUBTRACT_INFANT':
      return {
        ...state,
        infant: state.infant - 1,
      };
    case 'CLEAR':
      return {
        ...state,
        adult: 0,
        child: 0,
        infant: 0,
      };
    default:
      return state;
  }
}
