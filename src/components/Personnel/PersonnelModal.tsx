import React from 'react';
import styled from 'styled-components';
import Container from '../../UI/Container';
import PersonnelSelectSection from './PersonnelSelectSection';
import { PersonnelSelectOptionType } from '../../store/personnelStore/personnelTypes';

// this is TEST
const selectOptions: PersonnelSelectOptionType[] = [
  {
    target: 'ADULT',
    title: '성인',
    description: '만 13세 이상',
  },
  {
    target: 'CHILD',
    title: '어린이',
    description: '만 2~12세',
  },
  {
    target: 'INFANT',
    title: '유아',
    description: '만 2세 미만',
  },
];

const PersonnelModal = () => (
  <Container
    width="400px"
    height="355px"
    flexInfo={['column', 'center', 'flex-start', 'wrap']}
  >
    <SelectSectionWrapper>
      {selectOptions.map((selectOption, idx) => (
        <PersonnelSelectSection
          key={selectOption.target}
          isLast={idx === selectOptions.length - 1}
          selectOption={selectOption}
        />
      ))}
    </SelectSectionWrapper>
  </Container>
);

export default PersonnelModal;

const SelectSectionWrapper = styled.div`
  ${({ theme }) => theme.mixin.flexMixin('column', 'center', 'center')}
  padding: 30px 0px;
  width: 100%;
  height: 100%;
`;
