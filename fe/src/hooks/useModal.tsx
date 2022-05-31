import { useContext } from 'react';
import { ModalContext } from 'contexts/ModalContext';

export function useModal() {
  const { focusModal, setFocusModal, isClicked, setClicked } = useContext(ModalContext);

  const clickModalFocus = (id: string) => {
    if (focusModal === id) {
      setFocusModal?.('');
      setClicked?.(false);
    } else {
      setFocusModal?.(id);
      setClicked?.(true);
    }
  };

  const closeModal = () => {
    setFocusModal?.('');
  };

  return { focusModal, setFocusModal, isClicked, setClicked, clickModalFocus, closeModal };
}
