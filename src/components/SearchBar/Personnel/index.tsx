import { useRef } from "react";

import SEARCH_ICON from "@assets/search-icon.svg";
import X_ICON from "@assets/x-icon.svg";
import Icon from "@components/common/Icon";
import Modal from "@components/common/Modal";
import TextBox from "@components/common/TextBox";
import { ModalList } from "@constants/calendar";
import { ModalOpenType } from "@utils/calendar";

import * as S from "./style";

const Personnel = ({ modalOpen, setModalOpen }: ModalOpenType) => {
  const personnelElement = useRef(null);

  const handleModal = () => {
    setModalOpen(ModalList.PERSONNEL);
  };

  return (
    <>
      <S.Personnel onClick={handleModal} ref={personnelElement}>
        <TextBox label={`인원`} placeholder={`게스트 추가`} textContent={null} />
        <Icon iconName={X_ICON} iconSize={"base"} />
        <SearchButton />
      </S.Personnel>
      {modalOpen === 3 && (
        <Modal setModalOpen={setModalOpen} containElement={personnelElement}>
          Personnel
        </Modal>
      )}
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

export default Personnel;
