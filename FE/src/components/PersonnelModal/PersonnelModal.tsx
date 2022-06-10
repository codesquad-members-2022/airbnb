import React from 'react';

import ModalPortal from 'common/portal';
import { PersonnelCounter } from 'components/PersonnelCounter';

import { PERSONNEL_INFOS } from 'constant';

import { Backdrop } from 'common/util.styled';
import {
  Modal,
  PersonnelList,
  PersonnelItem,
  Personnel,
  PersonnelTitle,
  PersonnelAge,
} from './PersonnleModal.styled';

import { IPersonnelModalProps } from './PersonnelModal.types';

export function PersonnelModal({
  isShowing,
  handleClickPersonnelModalShow,
}: IPersonnelModalProps): JSX.Element {
  const personnels = PERSONNEL_INFOS.map(personnel => (
    <PersonnelItem key={personnel.id}>
      <Personnel>
        <PersonnelTitle>{personnel.title}</PersonnelTitle>
        <PersonnelAge>{personnel.age}</PersonnelAge>
      </Personnel>
      <PersonnelCounter actionTypeName={personnel.actionTypeName} />
    </PersonnelItem>
  ));

  if (isShowing)
    return (
      <ModalPortal>
        <>
          <Modal>
            <PersonnelList>{personnels}</PersonnelList>
          </Modal>
          <Backdrop onClick={handleClickPersonnelModalShow} />
        </>
      </ModalPortal>
    );

  return <ModalPortal />;
}
