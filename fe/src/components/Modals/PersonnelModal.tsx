import { Divider } from '@mui/material';
import styled from 'styled-components';
import PersonnelModalWrap from './PersonnelModalWrap';

import { ModalWrap } from './styled';

export type PersonnselInfo = {
  id: number;
  title: string;
  info: string;
  desc: string;
};

function PersonnelModal() {
  const PERSONNEL_INFO = [
    { id: 1, title: '성인', info: '만 13세 이상', desc: 'adult' },
    { id: 2, title: '어린이', info: '만 2~12세', desc: 'child' },
    { id: 3, title: '유아', info: '만 2세 미만', desc: 'toddler' },
  ];

  const PersonnelInfo = PERSONNEL_INFO.map((info: PersonnselInfo, index: number) => {
    return (
      <>
        <PersonnelModalWrap key={info.id} info={info} />
        {index !== PERSONNEL_INFO.length - 1 && <StyledDevider key={info.id} />}
      </>
    );
  });

  return <PersonnelModalContainer>{PersonnelInfo}</PersonnelModalContainer>;
}

const PersonnelModalContainer = styled(ModalWrap)`
  width: 400px;
  height: 355px;
  right: 0;
  padding: 64px;
  display: flex;
  flex-direction: column;
`;

const StyledDevider = styled(Divider)`
  && {
    width: 100%;
    margin: 24px 0;
  }
`;

export default PersonnelModal;
