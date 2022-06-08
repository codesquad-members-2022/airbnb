/* eslint-disable no-debugger */
import React, { useRef, useState } from "react";
import { useEffect } from "react";

import X_ICON from "@assets/x-icon.svg";
import Icon from "@components/common/Icon";
import TextBox from "@components/common/TextBox";
import { usePriceState } from "@contexts/PriceProvider";
import { useSearchModalDispatch } from "@contexts/SearchModalProvider";

import * as S from "./style";

const Price = () => {
  const priceElement = useRef(null);
  const { openedModal } = useSearchModalState();
  const { onOpenSearchModal, onCloseSearchModal } = useSearchModalDispatch();
  const { priceRange } = usePriceState();
  const [text, setText] = useState<string | null>(null);

  useEffect(() => {
    if (!priceRange) return;
    const text = `${priceRange?.minPrice}~${priceRange?.maxPrice}`;
    setText(text);
  }, [priceRange]);

  return (
    <>
      <S.Price onClick={() => onOpenSearchModal("PRICE")} ref={priceElement}>
        <TextBox label="요금" placeholder="금액대 설정" textContent={validateText(text)} />
        {true && <Icon onClick={onCloseSearchModal} data-button="REMOVE" iconName={X_ICON} iconSize="base" />}
      </S.Price>
    </>
  );
};

export default React.memo(Price);

const validateText = (text: string | null): string | null => {
  if (!text) {
    return null;
  }
  return text;
};
