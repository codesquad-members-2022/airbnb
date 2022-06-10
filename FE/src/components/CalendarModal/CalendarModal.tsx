import React, { useReducer, useState, useRef } from 'react';

import ModalPortal from 'common/portal';
import { Calendar } from 'components/Calendar';
import { CalendarModalBtns } from 'components/CalendarModalBtns';

import {
  initialCalendarState,
  calendarReducer,
} from 'store/calendarModalStore';

import { CALENDAR_BUTTON_INFOS } from 'constant';

import { Backdrop } from 'common/util.styled';
import { Modal, Carousel, CarouselItemContainer } from './CalendarModal.styled';

import { ICalendarProps } from './CalendarModal.types';

export function CalendarModal({
  isShowing,
  handleClickShow,
  calendarClickCount,
}: ICalendarProps): JSX.Element {
  const carouselCounter = useRef<number>(1);
  const [carouselXPos, setCarouselXPos] = useState<number>(0);
  const [calendarState, calendarDispatch] = useReducer(
    calendarReducer,
    initialCalendarState,
  );
  const { carouselCountGreaterThanOne, carouselCountEqualToOne } = {
    carouselCountGreaterThanOne: carouselCounter.current > 1,
    carouselCountEqualToOne: carouselCounter.current === 1,
  };

  const moveNextCarousel = (carouselUnit: number): void => {
    setCarouselXPos(prev => prev + carouselUnit);
    carouselCounter.current += 1;
    addCarouselItem();
  };

  const addCarouselItem = () => {
    if (calendarState.length === carouselCounter.current)
      calendarDispatch({ type: 'ADD_CALENDAR' });
  };

  const movePrevCarousel = (carouselUnit: number): void => {
    setCarouselXPos(prev => prev + carouselUnit);
    carouselCounter.current -= 1;
  };

  const handleClickButton = (carouselUnit: number): void =>
    selectCarouselDirection(carouselUnit);

  const selectCarouselDirection = (carouselUnit: number) => {
    const carouselUnitLessThanZero = carouselUnit < 0;

    if (carouselCountGreaterThanOne) {
      if (carouselUnitLessThanZero) moveNextCarousel(carouselUnit);
      else movePrevCarousel(carouselUnit);
    } else if (carouselCountEqualToOne) {
      if (carouselUnitLessThanZero) moveNextCarousel(carouselUnit);
    }
  };

  const calendars = calendarState.map(calendar => (
    <Calendar
      key={calendar.id}
      calendarInfo={calendar}
      calendarClickCount={calendarClickCount}
    />
  ));

  const buttons = CALENDAR_BUTTON_INFOS.map(btn => (
    <CalendarModalBtns
      key={btn.id}
      btn={btn}
      handleClickButton={() => handleClickButton(btn.carouselUnit)}
    />
  ));

  if (isShowing) {
    return (
      <ModalPortal>
        <>
          <Modal>
            <Carousel>
              <CarouselItemContainer pos={carouselXPos}>
                {calendars}
              </CarouselItemContainer>
            </Carousel>
            {buttons}
          </Modal>
          <Backdrop onClick={handleClickShow} />
        </>
      </ModalPortal>
    );
  }

  return <ModalPortal />;
}
