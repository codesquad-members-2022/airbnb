import useCallback, { useRef } from "react";

import Calendar from "@components/Calendar";
import Modal from "@components/common/Modal";
import TextBox from "@components/common/TextBox";
import { ModalList } from "@constants/calendar";
import { useCalendarState } from "@contexts/CalendarProvider";
import { getCheckInTemplate, ModalOpenType } from "@utils/calendar";

import * as S from "./style";

const Period = ({ modalOpen, setModalOpen }: ModalOpenType) => {
  const periodElement = useRef(null);
  const today = useRef(new Date());
  const { checkIn, checkOut } = useCalendarState();

  const handleModal = () => {
    setModalOpen(ModalList.PERIOD);
  };

  return (
    <>
      <S.Period onClick={handleModal} ref={periodElement}>
        <TextBox label={`체크인`} placeholder={`날짜 입력`} textContent={getCheckInTemplate(checkIn)} />
        <TextBox label={`체크아웃`} placeholder={`날짜 입력`} textContent={getCheckInTemplate(checkOut)} />
      </S.Period>
      {modalOpen === ModalList.PERIOD && (
        <Modal setModalOpen={setModalOpen} containElement={periodElement}>
          <Calendar today={today.current} />
        </Modal>
      )}
    </>
  );
};

export default Period;
