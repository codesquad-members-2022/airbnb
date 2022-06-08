import React from 'react';
import Section from 'components/common/Section/Section';
import { ModalProps, PersonnelType } from 'components/SearchBar/types';
import { ReactComponent as MinusIcon } from 'img/svg/minus-circle.svg';
import { ReactComponent as PlusIcon } from 'img/svg/plus-circle.svg';
import info from 'helpers/constant';
import {
  StyledPersonnel,
  StyledSection,
  PersonnelController,
  MinusButton,
  PlusButton,
  SplitLine,
} from './Personnel.styled';

export default function Personnel({ search, addSearch }: ModalProps<PersonnelType>): JSX.Element {
  const titleArray = Object.keys(search);
  const handlePersonnel = (e: string, type: string) => {
    const current = search[e] || 0;
    const surplus = type === 'increment' ? +1 : -1;
    const value = { [e]: current + surplus };
    const needProtector = type === 'increment' && e !== 'adult' && !search.adult;

    addSearch({
      type: 'SET_PERSONNEL',
      value: needProtector ? { ...value, adult: 1 } : value,
    });
  };

  return (
    <>
      {titleArray.map((e) => (
        <StyledPersonnel key={e}>
          <StyledSection>
            <Section title={info.personnel.value[e].title} value={info.personnel.value[e].description || 0} />
            <PersonnelController count={search[e]}>
              <MinusButton
                count={search[e]}
                min={info.personnel.range.min}
                disabled={Number(search[e]) === info.personnel.range.min && 'disabled'}
                onClick={() => handlePersonnel(e, 'decrement')}
              >
                <MinusIcon />
              </MinusButton>
              <p>{search[e] || 0}</p>
              <PlusButton
                count={search[e]}
                max={info.personnel.range.max}
                disabled={Number(search[e]) === info.personnel.range.max && 'disabled'}
                onClick={() => handlePersonnel(e, 'increment')}
              >
                <PlusIcon />
              </PlusButton>
            </PersonnelController>
          </StyledSection>
          <SplitLine />
        </StyledPersonnel>
      ))}
    </>
  );
}
