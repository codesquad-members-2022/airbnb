import { useRef } from "react";

import Calendar from "@components/Calendar";
import Modal from "@components/common/Modal";
import TextBox from "@components/common/TextBox";
import { useCalendarState } from "@contexts/CalendarProvider";

import * as S from "./style";

type Props = {
  modalOpen: number;
  setModalOpen: React.Dispatch<React.SetStateAction<number>>;
};

// 어디에 모아두는 것이 좋을까
enum Modals {
  NONE,
  PERIOD,
  PRICE,
  PERSONNEL,
}

const Period = ({ modalOpen, setModalOpen }: Props) => {
  const { checkIn, checkOut } = useCalendarState();
  const today = useRef(new Date());

  const onClickHandler = () => {
    setModalOpen(1);
  };

  return (
    <>
      <S.Period onClick={onClickHandler}>
        <TextBox label={`체크인`} placeholder={`날짜 입력`} text={checkIn} />
        <TextBox label={`체크아웃`} placeholder={`날짜 입력`} text={checkOut} />
      </S.Period>
      {modalOpen === 1 && (
        <Modal setModalOpen={setModalOpen}>
          <Calendar today={today.current} />
        </Modal>
      )}
    </>
  );
};

export default Period;
