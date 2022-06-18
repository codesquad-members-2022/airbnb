/* Type */
export enum ActionType {
  INIT_FILTER = 'initFilter',
  SET_CHECK_IN = 'setCheckIn',
  SET_CHECK_OUT = 'setCheckOut',
  RESET_DATE = 'resetDate',
}

/* Dispatch Action */
const initFilter = (dispatch, filter) => {
  dispatch({ type: ActionType.INIT_FILTER, payload: { filter } });
};

const setCheckIn = (dispatch, checkIn) => {
  dispatch({ type: ActionType.SET_CHECK_IN, payload: { checkIn } });
};

const setCheckOut = (dispatch, checkOut) => {
  dispatch({ type: ActionType.SET_CHECK_OUT, payload: { checkOut } });
};

const resetDate = (dispatch) => {
  dispatch({ type: ActionType.RESET_DATE });
};

export { initFilter, setCheckIn, setCheckOut, resetDate };
