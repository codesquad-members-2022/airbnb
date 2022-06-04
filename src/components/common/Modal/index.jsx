/* eslint-disable react/prop-types */
// eslint-disable-next-line react/prop-types
import { useEffect, useRef } from "react";

import * as S from "./style";

const Modal = ({ setModalOpen, containElement, children }) => {
  const modalRef = useRef(null);
  const outsideClickHandler = (e) => {
    if (containElement.current?.contains(e.target)) {
      return;
    }
    if (!modalRef.current?.contains(e.target)) {
      setModalOpen(0);
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", outsideClickHandler);

    return () => {
      document.removeEventListener("mousedown", outsideClickHandler);
    };
  }, []);

  return (
    <S.Modal onClick={outsideClickHandler} ref={modalRef}>
      {children}
    </S.Modal>
  );
};

export default Modal;
