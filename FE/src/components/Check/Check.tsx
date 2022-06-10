import React, { useState, useContext, useRef } from 'react';

import { InputText } from 'components/InputText';
import { CalendarModal } from 'components/CalendarModal';

import { CHECK_INFOS } from 'constant';

import { CheckContext } from 'contexts/checkcontext/checkContext';
import { SearchContext } from 'contexts/searchcontext/searchContext';
import { CheckContainer, CheckClearBtn } from './Check.styled';

export function Check(): JSX.Element {
  const calendarClickCount = useRef<number>(0);
  const { checkIn, checkOut, setCheckIn, setCheckOut } =
    useContext(CheckContext);
  const [isShowing, setIsShowing] = useState<boolean>(false);
  const { isSearchShowing } = useContext(SearchContext);

  const bigCheckMenu = CHECK_INFOS.map(el =>
    el.id === 1 ? (
      <InputText key={el.id} info={el} value={checkIn} />
    ) : (
      <InputText key={el.id} info={el} value={checkOut} />
    ),
  );

  const smallCheckMenu = <InputText value={`${checkIn} - ${checkOut}`} />;

  const handleClickShow = () => setIsShowing(prev => !prev);

  const handleClickCheckClearBtn = () => clearInutCheckTextAndClearBtn();

  const clearInutCheckTextAndClearBtn = () => {
    setIsShowing(true);
    setCheckIn('');
    setCheckOut('');
    calendarClickCount.current = 0;
  };

  return (
    <>
      <CheckContainer onClick={handleClickShow}>
        {isSearchShowing ? smallCheckMenu : bigCheckMenu}
        {!isSearchShowing && (
          <CheckClearBtn
            type="button"
            onClick={handleClickCheckClearBtn}
            checkIn={checkIn}
          >
            <img
              src="./assets/images/x-circle.svg"
              alt="체크인, 체크아웃 초기화 버튼"
            />
          </CheckClearBtn>
        )}
      </CheckContainer>
      <CalendarModal
        isShowing={isShowing}
        handleClickShow={handleClickShow}
        calendarClickCount={calendarClickCount}
      />
    </>
  );
}
