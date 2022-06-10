import React, { useContext, useEffect, useState } from 'react';

import { InputText } from 'components/InputText';
import { PersonnelModal } from 'components/PersonnelModal';

import { PersonnelContext } from 'contexts/personnelcontext/personnelContext';

import {
  PersonnelContainer,
  PersonnelInputClearBtn,
} from 'components/Personnel/Personnel.styled';

import { PERSONNEL_TEXT } from 'constant';
import { SearchContext } from 'contexts/searchcontext/searchContext';

export function Personnel(): JSX.Element {
  const [personnelText, setPersonnelText] = useState<string>('');
  const [isShowing, setIsShowing] = useState<boolean>(false);
  const [isClearBtnShowing, setIsClearBtnShowing] = useState<boolean>(false);
  const {
    personnelState: { adult, child, infant },
    personnelDispatch,
  } = useContext(PersonnelContext);
  const { isSearchShowing } = useContext(SearchContext);

  const {
    adultEqualtoZero,
    adultGreatethanZero,
    childEqualtoZero,
    childGreatethanZero,
    infantEqualtoZero,
    infantGreatethanZero,
  } = {
    adultEqualtoZero: adult === 0,
    adultGreatethanZero: adult > 0,
    childEqualtoZero: child === 0,
    childGreatethanZero: child > 0,
    infantEqualtoZero: infant === 0,
    infantGreatethanZero: infant > 0,
  };

  useEffect(() => {
    showClearBtn();
    updateInputPersonnelText();
  }, [adult, child, infant]);

  const showClearBtn = () => {
    if (adultGreatethanZero || childGreatethanZero || infantGreatethanZero)
      setIsClearBtnShowing(true);
    else if (adultEqualtoZero && childEqualtoZero && infantEqualtoZero)
      setIsClearBtnShowing(false);
  };

  const handleClickPersonnelModalShow = () => setIsShowing(prev => !prev);

  const handleClickPersonnelClearBtn = () =>
    clearInputPersonnelTextAndClearBtn();

  const updateInputPersonnelText = () => {
    if (adultEqualtoZero) setPersonnelText('');
    else if (adultGreatethanZero) addGuestPersonnel();
  };

  const addGuestPersonnel = () => {
    if (infantEqualtoZero) setPersonnelText(`게스트 ${adult + child}명`);
    else if (infantGreatethanZero)
      setPersonnelText(`게스트 ${adult + child}명 유아 ${infant}명`);
  };

  const clearInputPersonnelTextAndClearBtn = () => {
    setPersonnelText('');
    setIsShowing(true);
    setIsClearBtnShowing(false);
    personnelDispatch({ type: 'CLEAR' });
  };

  return (
    <>
      <PersonnelContainer onClick={handleClickPersonnelModalShow}>
        <InputText info={PERSONNEL_TEXT} value={personnelText} />
        {!isSearchShowing && (
          <PersonnelInputClearBtn
            isClearBtnShowing={isClearBtnShowing}
            type="button"
            onClick={handleClickPersonnelClearBtn}
          >
            <img src="./assets/images/x-circle.svg" alt="인원 초기화 버튼" />
          </PersonnelInputClearBtn>
        )}
      </PersonnelContainer>
      <PersonnelModal
        isShowing={isShowing}
        handleClickPersonnelModalShow={handleClickPersonnelModalShow}
      />
    </>
  );
}
