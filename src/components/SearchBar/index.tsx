import React from "react";

import Modal from "@components/common/Modal";
import Calendar from "@components/SearchBar/Period/Calendar";
import { useSearchModalState } from "@contexts/SearchModalProvider";

import Period from "./Period";
import Personnel from "./Personnel";
import Price from "./Price";
import { PriceRangeGraph } from "./Price/PriceRangeGraph";
import * as S from "./style";

const SEARCH_BAR = {
  PERIOD: <Calendar />,
  PRICE: <PriceRangeGraph />,
  PERSONNEL: "PERSONNEL",
};

const SearchBar = () => {
  const { openedModal } = useSearchModalState();

  return (
    <S.SearchBar openedModal={openedModal}>
      <Period />
      <S.Block />
      <Price />
      <S.Block />
      <Personnel />
      {openedModal && <Modal>{SEARCH_BAR[openedModal]}</Modal>}
    </S.SearchBar>
  );
};

export default React.memo(SearchBar);
