import React, { useRef } from "react";

import X_ICON from "@assets/x-icon.svg";
import Icon from "@components/common/Icon";
import TextBox from "@components/common/TextBox";
import { useCalendarState, useCalendarDispatch } from "@contexts/CalendarProvider";
import { useSearchModalDispatch, useSearchModalState } from "@contexts/SearchModalProvider";
import { getCheckInTemplate } from "@utils/calendar";

import * as S from "./style";

const Period = () => {
  const periodElement = useRef(null);

  const { checkIn, checkOut } = useCalendarState();
  const { onCheckRemove } = useCalendarDispatch();

  const { onOpenSearchModal, onCloseSearchModal } = useSearchModalDispatch();

  const handleCloseSearchModal = () => {
    onCloseSearchModal();
    onCheckRemove();
  };

  return (
    <>
      <S.Period onClick={() => onOpenSearchModal("PERIOD")} ref={periodElement}>
        <TextBox label="체크인" placeholder="날짜 입력" textContent={getCheckInTemplate(checkIn)} />
        <TextBox label="체크아웃" placeholder="날짜 입력" textContent={getCheckInTemplate(checkOut)} />
        {checkIn && (
          <Icon onClick={() => handleCloseSearchModal()} data-button="REMOVE" iconName={X_ICON} iconSize="base" />
        )}
      </S.Period>
    </>
  );
};

export default React.memo(Period);
