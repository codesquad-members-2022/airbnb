import React, { useRef } from "react";

import SEARCH_ICON from "@assets/search-icon.svg";
import X_ICON from "@assets/x-icon.svg";
import Icon from "@components/common/Icon";
import Modal from "@components/common/Modal";
import TextBox from "@components/common/TextBox";
import { useSearchModalDispatch, useSearchModalState } from "@contexts/SearchModalProvider";

import * as S from "./style";

export const Personnel = () => {
  const personnelElement = useRef(null);
  const { onOpenSearchModal, onCloseSearchModal } = useSearchModalDispatch();

  return (
    <>
      <S.Personnel onClick={() => onOpenSearchModal("PERSONNEL")} ref={personnelElement}>
        <TextBox label="인원" placeholder="게스트 추가" textContent={null} />
        {true && <Icon onClick={onCloseSearchModal} data-button="REMOVE" iconName={X_ICON} iconSize="base" />}
        <SearchButton />
      </S.Personnel>
    </>
  );
};

const SearchButton = () => {
  return (
    <S.SearchButton>
      <Icon iconName={SEARCH_ICON} iconSize={"base"}></Icon>
    </S.SearchButton>
  );
};

export default React.memo(Personnel);
