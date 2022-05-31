import React from 'react';
import styled from 'styled-components';
import { useAddSearch, useSearch } from 'context/SearchProvider';
import { useActiveModal, useContentModal, useSetActiveModal, useSetContentModal } from 'context/ModalProvider';
import DeleteButton from 'components/SearchBar/SearchList/DeleteButton';
import Modal from 'components/Modal/Modal';
import ModalPortal from 'Portal';
import { SectionProps } from 'components/SearchBar/types';

const StyledLi = styled.li`
  max-width: 233px;
  section {
    width: 194px;
  }
  position: relative;
`;

export default function SearchList({
  Element,
  id,
}: {
  Element: React.ComponentType<SectionProps>;
  id: string;
}): React.ReactElement {
  const search = useSearch();
  const addSearch = useAddSearch();
  const isActiveModal = useActiveModal();
  const setActiveModal = useSetActiveModal();
  const content = useContentModal();
  const setContent = useSetContentModal();

  const handleModalOpen = (event: React.MouseEvent<HTMLButtonElement>) => {
    const searchListId = event.currentTarget.id;
    setActiveModal(true);
    setContent(searchListId);
  };
  const handleModalClose = (event: React.MouseEvent<HTMLButtonElement>) => {
    setActiveModal(false);
    event.stopPropagation();
  };

  const searchList = search[id];
  const { value } = searchList;
  const hasValue = () => Object.values(value).filter((e) => e).length > 0;
  const isCurrentActive = () => content === id;

  return (
    <StyledLi role="button" tabIndex={0} onClick={handleModalOpen} id={id}>
      <Element search={searchList} addSearch={addSearch} />
      {hasValue() && <DeleteButton />}
      {isCurrentActive() && (
        <ModalPortal>
          <Modal shown={isActiveModal} onClose={handleModalClose}>
            {id}
          </Modal>
        </ModalPortal>
      )}
    </StyledLi>
  );
}
