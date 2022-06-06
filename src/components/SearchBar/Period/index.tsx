import useCallback, { useRef } from "react";

import X_ICON from "@assets/x-icon.svg";
import Icon from "@components/common/Icon";
import Modal from "@components/common/Modal";
import TextBox from "@components/common/TextBox";
import { useCalendarState } from "@contexts/CalendarProvider";
import { getCheckInTemplate } from "@utils/calendar";

import * as S from "./style";

const Period = ({ setModalOpen }: { setModalOpen: React.Dispatch<React.SetStateAction<string | null>> }) => {
  const periodElement = useRef(null);
  const { checkIn, checkOut } = useCalendarState();

  const handleModal = () => {
    setModalOpen("PERIOD");
  };

  return (
    <>
      <S.Period onClick={handleModal} ref={periodElement}>
        <TextBox label="체크인" placeholder="날짜 입력" textContent={getCheckInTemplate(checkIn)} />
        <TextBox label="체크아웃" placeholder="날짜 입력" textContent={getCheckInTemplate(checkOut)} />
        <Icon data-button="REMOVE" iconName={X_ICON} iconSize="base" />
      </S.Period>
    </>
  );
};

export default Period;
