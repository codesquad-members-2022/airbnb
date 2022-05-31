import React, { createContext, Dispatch, SetStateAction, useContext, useState } from 'react';

type State = boolean;
type DispatchType = Dispatch<SetStateAction<State>>;

export const ActiveContext = createContext<State>(false);
export const SetActiveContext = createContext<DispatchType>(() => false);

export function ModalProvider({ children }: { children: React.ReactNode }) {
  const [show, setShow] = useState<State>(false);

  return (
    <ActiveContext.Provider value={show}>
      <SetActiveContext.Provider value={setShow}>{children}</SetActiveContext.Provider>
    </ActiveContext.Provider>
  );
}

export function useActiveModal() {
  const active = useContext(ActiveContext);
  return active;
}

export function useSetActiveModal() {
  const setActive = useContext(SetActiveContext);
  if (!setActive) throw new Error('Cannot find SetActiveModalProvider');
  return setActive;
}
