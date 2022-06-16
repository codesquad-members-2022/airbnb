import {
  PersonnelStateType,
  PersonnelTargetType,
  PersonnelActionType,
} from './personnelTypes';

const initialPersonnelState: PersonnelStateType = {
  ADULT: 0,
  CHILD: 0,
  INFANT: 0,
};

const INCREASE = 'personnel/INCREASE';
const DECREASE = 'personnel/DECREASE';
const DELETE = 'personnel/DELETE';

const increaseActionCreator = (target: PersonnelTargetType) => ({
  type: INCREASE,
  target,
});

const decreaseActionCreator = (target: PersonnelTargetType) => ({
  type: DECREASE,
  target,
});

const deleteActionCreator = (target: PersonnelTargetType) => ({
  type: DELETE,
  target,
});

const personnelReducer = (
  state = initialPersonnelState,
  { type, target }: PersonnelActionType,
) => {
  switch (type) {
    case INCREASE: {
      const newState = (state[target] += 1);
      return { ...state, newState };
    }
    case DECREASE: {
      const newState = (state[target] -= 1);
      return { ...state, newState };
    }
    case DELETE: {
      return initialPersonnelState;
    }
    default: {
      return state;
    }
  }
};

export const personnelActions = {
  increaseActionCreator,
  decreaseActionCreator,
  deleteActionCreator,
};

export default personnelReducer;
