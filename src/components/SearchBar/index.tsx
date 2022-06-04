import { useState } from "react";

import styled from "styled-components";

import { ModalList } from "@constants/calendar";

import Period from "./Period";
import Personnel from "./Personnel";
import Price from "./Price";
import * as S from "./style";

const SearchBar = () => {
  const [modalOpen, setModalOpen] = useState(ModalList.NONE);
  return (
    <S.SearchBar>
      <Period modalOpen={modalOpen} setModalOpen={setModalOpen} />
      <Block />
      <Price modalOpen={modalOpen} setModalOpen={setModalOpen} />
      <Block />
      <Personnel modalOpen={modalOpen} setModalOpen={setModalOpen} />
    </S.SearchBar>
  );
};

const Block = styled.div`
  width: 1px;
  height: 44px;
  border-right: 1px solid ${({ theme }) => theme.color.gray5};
`;

export default SearchBar;
