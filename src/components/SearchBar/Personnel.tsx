import React, { Dispatch } from 'react';
import SearchBarSection from '../../UI/SearchBarSection';
import {
  usePersonnelStateContext,
  usePersonnelDispatchContext,
} from '../../store/personnelStore/PersonnelContext';
import { personnelActions } from '../../store/personnelStore/personnelReducer';
import Container from '../../UI/Container';
import { ModalType } from '../../types/types';

const Personnel = ({
  setOpenedModal,
}: {
  setOpenedModal: Dispatch<React.SetStateAction<ModalType>>;
}) => {
  const personnelState = usePersonnelStateContext();
  const dispatchPersonnel = usePersonnelDispatchContext();
  const { deleteActionCreator } = personnelActions;
  const totalPersonnel =
    personnelState.ADULT + personnelState.CHILD + personnelState.INFANT;
  const personnelValue =
    totalPersonnel !== 0
      ? `게스트 ${personnelState.ADULT + personnelState.CHILD}명, 유아 ${
          personnelState.INFANT
        }명`
      : undefined;

  return (
    <Container onClick={() => setOpenedModal('PERSONNEL')}>
      <SearchBarSection
        searchBarSectionInfo={[
          { name: '인원', placeholder: '게스트 추가', value: personnelValue },
        ]}
        isLast
        initSection={() => dispatchPersonnel(deleteActionCreator('INITIAL'))}
      />
    </Container>
  );
};

export default Personnel;
