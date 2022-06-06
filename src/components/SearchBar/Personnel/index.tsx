import { useRef } from "react";

import SEARCH_ICON from "@assets/search-icon.svg";
import X_ICON from "@assets/x-icon.svg";
import Icon from "@components/common/Icon";
import Modal from "@components/common/Modal";
import TextBox from "@components/common/TextBox";

import * as S from "./style";

export const Personnel = ({ setModalOpen }: { setModalOpen: React.Dispatch<React.SetStateAction<string | null>> }) => {
  const personnelElement = useRef(null);

  const handleModal = () => {
    setModalOpen("PERSONNEL");
  };

  return (
    <>
      <S.Personnel onClick={handleModal} ref={personnelElement}>
        <TextBox label="인원" placeholder="게스트 추가" textContent={null} />
        <Icon data-button="REMOVE" iconName={X_ICON} iconSize="base" />
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

export default Personnel;
