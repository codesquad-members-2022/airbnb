import React from 'react';
import styled from 'styled-components';
import DeleteButton from 'components/SearchBar/SearchList/DeleteButton';
import { useAddSearch, useSearch } from 'context/SearchProvider';
import { useActiveModal, useSetActiveModal } from 'context/ModalProvider';
import Modal from 'components/Modal/Modal';
import ModalPortal from 'Portal';

const StyledLi = styled.li`
  max-width: 233px;
  section {
    width: 194px;
  }
  position: relative;
`;

type KeyType = 'period' | 'price' | 'personnel';

export default function SearchList({ Element }: { Element: React.ComponentType<any> }): React.ReactElement {
  const search = useSearch();
  const addSearch = useAddSearch();
  const isActiveModal = useActiveModal();
  const setActiveModal = useSetActiveModal();

  const key: KeyType = Element.displayName as KeyType;
  const searchList = search[key];

  const hasValue = () => Object.values(searchList.value).filter((e) => e !== 0).length > 0;
  const handleModal = () => setActiveModal(!isActiveModal);

  return (
    <StyledLi role="button" tabIndex={0} onClick={handleModal}>
      <Element search={searchList} addSearch={addSearch} />
      {hasValue() && <DeleteButton />}
      <ModalPortal>
        <Modal shown={isActiveModal} onClose={handleModal}>
          hi
        </Modal>
      </ModalPortal>
    </StyledLi>
  );
}
