import { useState } from "react";

const useModal = (initialState: null) => {
  const [modal, setModal] = useState(initialState);
  return [modal, setModal];
};

export default useModal;
