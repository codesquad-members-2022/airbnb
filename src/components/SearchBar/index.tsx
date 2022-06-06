import { useState, useRef } from "react";

import Calendar from "@components/Calendar";
import Modal from "@components/common/Modal";
import useModal from "@hooks/useModal";

import Period from "./Period";
import Personnel from "./Personnel";
import Price, { PriceRangeGraph } from "./Price";
import * as S from "./style";

const SearchBar = () => {
  // const [modal, setModal] = useModal(null, SEARCH_BAR);
  const [modalOpen, setModalOpen] = useState(null);

  const SEARCH_BAR = {
    PERIOD: <Calendar />,
    PRICE: <PriceRangeGraph />,
    PERSONNEL: "PERSONNEL",
  };

  return (
    <S.SearchBar>
      <Period setModalOpen={setModalOpen} />
      <S.Block />
      <Price setModalOpen={setModalOpen} />
      <S.Block />
      <Personnel setModalOpen={setModalOpen} />
      {modalOpen && <Modal setModalOpen={setModalOpen}>{SEARCH_BAR[modalOpen]}</Modal>}
    </S.SearchBar>
  );
};

export default SearchBar;
