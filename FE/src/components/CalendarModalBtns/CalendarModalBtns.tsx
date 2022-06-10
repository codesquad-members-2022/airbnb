import React from 'react';

import { Button } from './CalendarModalBtns.styled';

import { CalendarModalBtnsProps } from './CalendarModalBtns.types';

export function CalendarModalBtns({
  btn,
  handleClickButton,
}: CalendarModalBtnsProps): JSX.Element {
  return (
    <Button type="button" className={btn.className} onClick={handleClickButton}>
      <img src={btn.src} alt={btn.alt} />
    </Button>
  );
}
