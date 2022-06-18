import { ActionType } from 'components/calender/context/action';
import { initState } from 'components/calender/context';

const initFilter = (state, { filter }) => {
  const { state: prevState } = state;
  const newState = {
    ...prevState,
    filter,
  };

  return { ...state, state: newState };
};

const setCheckIn = (state, { checkIn: newCheckIn }) => {
  const { state: prevState } = state;
  const newState = {
    ...prevState,
    period: {
      ...prevState?.period,
      checkIn: newCheckIn,
    },
  };

  return { ...state, state: newState };
};

const setCheckout = (state, { checkOut: newCheckOut }) => {
  const { state: prevState } = state;
  const newState = {
    ...prevState,
    period: {
      ...prevState?.period,
      checkOut: newCheckOut,
    },
  };

  return { ...state, state: newState };
};

const resetDate = () => initState;

const actionFunc = {
  [ActionType.INIT_FILTER]: initFilter,
  [ActionType.SET_CHECK_IN]: setCheckIn,
  [ActionType.SET_CHECK_OUT]: setCheckout,
  [ActionType.RESET_DATE]: resetDate,
};

const reducer = (state, { type, payload }) => actionFunc[type](state, payload) || state;

export default reducer;
