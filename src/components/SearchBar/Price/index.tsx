/* eslint-disable no-debugger */
import React, { useRef } from "react";

import X_ICON from "@assets/x-icon.svg";
import Icon from "@components/common/Icon";
import TextBox from "@components/common/TextBox";
import { useSearchModalDispatch, useSearchModalState } from "@contexts/SearchModalProvider";

import * as S from "./style";

const Price = () => {
  const priceElement = useRef(null);
  const { openedModal } = useSearchModalState();
  const { onOpenSearchModal, onCloseSearchModal } = useSearchModalDispatch();

  return (
    <S.Price onClick={() => onOpenSearchModal("PRICE")} openedModal={openedModal} ref={priceElement}>
      <TextBox label="요금" placeholder="금액대 설정" textContent={null} />
      {true && <Icon onClick={onCloseSearchModal} data-button="REMOVE" iconName={X_ICON} iconSize="base" />}
    </S.Price>
  );
};

export default Price;
