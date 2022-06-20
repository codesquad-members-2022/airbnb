import { Dispatch, RefObject, SetStateAction, useEffect, useState } from 'react';

interface useModalPropsTypes<T> {
  modalRef: RefObject<T>;
}

type useModalReturnTypes = [boolean, Dispatch<SetStateAction<boolean>>];

const useModal = <T extends HTMLElement>({
  modalRef,
}: useModalPropsTypes<T>): useModalReturnTypes => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleModalClick = (event: MouseEvent) => {
    for (const element of event.composedPath()) {
      if (element === modalRef.current) return;
    }
    setIsModalOpen(false);
  };

  useEffect(() => {
    window.addEventListener('click', handleModalClick, true);

    return () => {
      window.removeEventListener('click', handleModalClick, true);
    };
  }, [modalRef]);

  return [isModalOpen, setIsModalOpen];
};

export default useModal;
