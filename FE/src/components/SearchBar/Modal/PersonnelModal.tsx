import { RefObject } from 'react';

import * as S from '@components/SearchBar/Modal/Modal.style';
import PersonnelListItem from '@components/SearchBar/Modal/PersonnelListItem';
import Modal, { MODAL_POSITION } from '@components/common/Modal';
import { personnelData } from '@data';

interface PersonnelModalPropsTypes {
  modalRef: RefObject<HTMLDivElement>;
}

const PersonnelModal = ({ modalRef }: PersonnelModalPropsTypes) => {
  return (
    <Modal position={MODAL_POSITION.RIGHT}>
      <S.PersonnelModal ref={modalRef}>
        {personnelData.map(({ id, type, description }) => (
          <PersonnelListItem key={id} {...{ type, description }} />
        ))}
      </S.PersonnelModal>
    </Modal>
  );
};

export default PersonnelModal;
