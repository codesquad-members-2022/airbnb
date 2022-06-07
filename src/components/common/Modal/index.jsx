/* eslint-disable react/prop-types */
// eslint-disable-next-line react/prop-types
import { useCallback, useEffect, useRef } from "react";

import { useSearchModalDispatch } from "@contexts/SearchModalProvider";

import * as S from "./style";

const Modal = ({ children }) => {
  const modalRef = useRef(null);
  const { onCloseSearchModal } = useSearchModalDispatch();

  const outsideClickHandler = useCallback((e) => {
    if (e.target.dataset.button === "REMOVE") {
      return;
    }

    if (!modalRef.current?.contains(e.target)) {
      onCloseSearchModal();
    }
  }, []);

  useEffect(() => {
    document.addEventListener("mouseup", outsideClickHandler);

    return () => {
      document.removeEventListener("mouseup", outsideClickHandler);
    };
  }, []);

  return (
    <S.Modal onClick={outsideClickHandler} ref={modalRef}>
      {children}
    </S.Modal>
  );
};

export default Modal;
