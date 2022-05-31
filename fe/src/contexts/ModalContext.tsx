import { createContext, Dispatch, ReactNode, useState } from 'react';

type ModalInfo = {
  focusModal: string;
  setFocusModal?: Dispatch<React.SetStateAction<string>>;
  isClicked: boolean;
  setClicked?: Dispatch<React.SetStateAction<boolean>>;
};

export const ModalContext = createContext<ModalInfo>({
  focusModal: '',
  isClicked: false,
});

export function ModalProvider({ children }: { children: ReactNode }) {
  const [focusModal, setFocusModal] = useState<string>('');
  const [isClicked, setClicked] = useState<boolean>(false);

  return (
    <ModalContext.Provider
      // eslint-disable-next-line react/jsx-no-constructed-context-values
      value={{ focusModal, setFocusModal, isClicked, setClicked }}
    >
      {children}
    </ModalContext.Provider>
  );
}
