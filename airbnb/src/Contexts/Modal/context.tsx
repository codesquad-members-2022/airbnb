import React, { ReactNode } from 'react';
import { useBoolean } from '@/Hooks/useBoolean';

const initialModalState = { isShowModal: false };

export const ModalStateContext = React.createContext(initialModalState);

export const ModalDispatchContext = React.createContext({
  showModal: () => {},
  hideModal: () => {},
});

export function ModalProvider({ children }: { children: ReactNode }) {
  const {
    boolState: isShowModal,
    setTrue: showModal,
    setFalse: hideModal,
  } = useBoolean();

  <ModalStateContext.Provider value={{ isShowModal }}>
    <ModalDispatchContext.Provider value={{ showModal, hideModal }}>
      {children}
    </ModalDispatchContext.Provider>
  </ModalStateContext.Provider>;
}
