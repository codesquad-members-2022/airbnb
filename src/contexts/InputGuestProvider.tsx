import { createContext, useContext, useMemo, useReducer, useCallback } from "react";

import { InputGuestActionType, InputGuestDispatches, InputGuestState, InputGuestType } from "_types/inputGuest";

const reducer = (state: InputGuestState, action: InputGuestActionType): InputGuestState => {
  switch (action.type) {
    case "INCREASE_GUEST":
      return { ...state, [action.guestType]: state[action.guestType] + 1 };

    case "DECREASE_GUEST":
      return { ...state, [action.guestType]: state[action.guestType] - 1 };

    case "RESET_GUEST":
      return initialState;

    default:
      return state;
  }
};

const InputGuestStateContext = createContext<InputGuestState | null>(null);
const InputGuestDispatchContext = createContext<InputGuestDispatches | null>(null);

const initialState = {
  adult: 0,
  child: 0,
  baby: 0,
};

const InputGuestProvider = ({ children }: { children?: React.ReactNode }) => {
  const [inputGuest, dispatch] = useReducer(reducer, initialState);

  const onIncreaseGuest = useCallback((guestType: InputGuestType) => {
    dispatch({ type: "INCREASE_GUEST", guestType: guestType });
  }, []);

  const onDecreaseGuest = useCallback((guestType: InputGuestType) => {
    dispatch({ type: "DECREASE_GUEST", guestType: guestType });
  }, []);

  const onResetGuest = useCallback(() => {
    dispatch({ type: "RESET_GUEST" });
  }, []);

  const dispatches = useMemo(
    () => ({
      onIncreaseGuest,
      onDecreaseGuest,
      onResetGuest,
    }),
    [onDecreaseGuest, onIncreaseGuest, onResetGuest],
  );

  return (
    <InputGuestStateContext.Provider value={inputGuest}>
      <InputGuestDispatchContext.Provider value={dispatches}>{children}</InputGuestDispatchContext.Provider>
    </InputGuestStateContext.Provider>
  );
};

export const useInputGuestState = () => {
  const state = useContext(InputGuestStateContext);
  if (!state) throw new Error("Cannot find InputGuestProvider");
  return state;
};

export const useInputGuestDispatch = () => {
  const state = useContext(InputGuestDispatchContext);
  if (!state) throw new Error("Cannot find InputGuestProvider");
  return state;
};

export default InputGuestProvider;
