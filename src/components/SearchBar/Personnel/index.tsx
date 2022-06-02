import SEARCH_ICON from "@assets/search-icon.svg";
import X_ICON from "@assets/x-icon.svg";
import Icon from "@components/common/Icon";
import Modal from "@components/common/Modal";
import TextBox from "@components/common/TextBox";

import * as S from "./style";

interface props {
  modalOpen: number;
  setModalOpen: React.Dispatch<React.SetStateAction<number>>;
}

const Personnel = ({ modalOpen, setModalOpen }: props) => {
  const onClickHandler = () => {
    setModalOpen(3);
  };

  return (
    <>
      <S.Personnel onClick={onClickHandler}>
        <TextBox label={`인원`} placeholder={`게스트 추가`} text={null} />
        <Icon iconName={X_ICON} iconSize={"base"} />
        <SearchButton />
      </S.Personnel>
      {modalOpen === 3 && <Modal setModalOpen={setModalOpen}>Personnel</Modal>}
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
